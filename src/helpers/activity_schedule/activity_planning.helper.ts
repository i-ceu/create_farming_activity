import { getConnection } from "typeorm";
import {
  KEY_ROLES,
  ACS_ACTIVITY_LEVEL_ID_FARM,
  ACS_ACTIVITY_LEVEL_ID_MEMBER,
  KEY_PRIORITY_SCORE_JSON,
  ACS_DC_DATE_TYPE_RELATIVE,
  ACS_DC_DATE_TYPE_SPECIFIC,
  DAYS_IN_WEEKS,
  DAYS_IN_MONTHS,
  DAYS_IN_DAYS,
  ROLE_OFO,
  ROLE_BGO,
  TYPE_PRIORITY_SCHEDULER,
  TYPE_DUE_SCHEDULER,
  ACS_ACTIVITY_LEVEL_ID_OFO,
  ROLE_ASST_SUPERVISOR,
  ROLE_CCA,
  ROLE_SUPERVISOR,
  ACS_ACTIVITY_LEVEL_ID_TRUST_GROUP,
  ROLE_CFO,
  ROLE_TGE,
  KEY_START_OF_FARMING_PHASE,
  KEY_START_OF_HARVEST_PHASE,
  KEY_MID_FARMING_PHASE,
  KEY_END_OF_FARMING_PHASE,
  TYPE_NO_THRESHING,
  ROLE_HUB_AGENT,
  OSO_INSPECTION_ACTIVITY_ID,
  ROLE_PCS,
  ROLE_BGT,
  ROLE_PCO,
} from "../../constants";

let farmingConnection = null;
let planningConnection = null;
let recruitmentConnection = null;
let portfolioConnection = null;
let inventoryConnection = null;

// Save the IK list that have gotten distribution
let ikListInId = null;
let activityLabelMap = {};

let dateConfigMap = {};
let activityMap = {};
let activityConfigMap = {};
let repeatConfigMap = {};
let activityDismissDateConfigMap = {};
let triggerConfigMap = {};
let completionConfigMap = {};
let rfs = []; // All rfs on the system
let operatorToStaffIdMap = {};
let priorityScoreJson = null;
let specialSeedTgs = new Set();


export async function initConnection() {
  farmingConnection = getConnection("postgresdb-farming");
  planningConnection = getConnection("postgresdb-planning");
  recruitmentConnection = getConnection("postgresdb-recruitment");
  portfolioConnection = getConnection("postgresdb-portfolio");
  inventoryConnection = getConnection("postgresdb-inventory");
}


export async function createFarmingActivity(unique_member_id: string, activity_label: string, unique_field_id: string) {

  farmingConnection = getConnection("postgresdb-farming");
  recruitmentConnection = getConnection("postgresdb-recruitment");

  const unique_field = await farmingConnection.query(`
    SELECT unique_field_id from mapped_field
    where unique_field_id = '${unique_field_id}'`)

  if (unique_field.length == 0) {
    throw Error("Invalid unique_field_id or field has not been mapped");
  }

  const member = await recruitmentConnection.query(`
    SELECT unique_member_id, ik_number, assigned_fo_id, assigned_operator_id, hub_id from member_pool_entity
    WHERE unique_member_id = '${unique_member_id}'`)

  if (member === undefined || member.length == 0) {
    throw Error("Invalid unique_member_id");
  }

  console.log(member)

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const due_date = new Date(currentDate)
  due_date.setDate(currentDate.getDate() - 3);

  const lateDate = new Date(due_date);
  const veryLateDate = new Date(due_date);

  lateDate.setDate(lateDate.getDate() + 7);
  veryLateDate.setDate(veryLateDate.getDate() + 14);

  let activity_id;
  let entity_id;
  switch (activity_label) {
    case "Scheduled Inspection":
      activity_id = "AL_OFO_0001",
        entity_id = 1
      break;
    case "Fertilizer 1":
      activity_id = "AL_OFO_0003",
        entity_id = 1
      break;

    case "Fertilizer 2":
      activity_id = "AL_OFO_0004",
        entity_id = 1
      break;

    case "Unscheduled Inspection":
      activity_id = "AL_OFO_0005",
        entity_id = 1
      break;

    case "Map Farm (Reported)":
      activity_id = "AL_OFO_0007",
        entity_id = 2;
      break;

    default:
      activity_id = "AL_OFO_0007",
        entity_id = 2
      break;
  }

  const activity_schedule_id = await generateActivityScheduleId(member[0].ik_number, activity_id);
  const activity = [];
  activity.push({
    unique_member_id: member[0].unique_member_id,
    staff_id: member[0].assigned_fo_id,
    activity_label: activity_label,
    date_scheduled: formattedDate,
    status: 0,
    ik_number: member[0].ik_number,
    due_date: formatDate(due_date),
    unique_field_id: unique_field_id,
    activity_schedule_id: activity_schedule_id,
    activity_id: activity_id,
    hub_id: member[0].hub_id,
    operator_id: member[0].assigned_operator_id,
    duration: 30,
    initial_date_scheduled: formatDate(currentDate),
    due_date_status: "DUE",
    late_date: formatDate(lateDate),
    very_late_date: formatDate(veryLateDate),
    outline_flag: 0,
    deferred_flag: 0,
    delete_flag: 0,
    unique_entity_id: entity_id == 2 ? unique_member_id : unique_field_id,
    entity_id: entity_id,
    initial_due_date: formatDate(due_date),
    initial_late_date: formatDate(lateDate),
    initial_very_late_date: formatDate(veryLateDate),
  });

  const values = activity.map((act) =>
    Object.values(act)
      .map((value) => {
        if (value === null) return "null";
        if (typeof value === 'number') return value;
        return `'${value}'`
      })
      .join(",")
  );

  const columns = Object.keys(activity[0]).join(", ");
  const insertValues = values.map((value) => "(" + value + ")").join(", ");
  const query = `INSERT INTO activity_schedule AS t (${columns}) VALUES ${insertValues} 
          ON CONFLICT(activity_schedule_id) 
          DO UPDATE SET status = 0, updated_at = now(), delete_flag=0, operator_id=EXCLUDED.operator_id;
          `;

  await farmingConnection.query(query);
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

async function generateActivityScheduleId(ik_number, activity_id) {
  farmingConnection = getConnection("postgresdb-farming");
  recruitmentConnection = getConnection("postgresdb-recruitment");
  const unique_digit = Math.floor(Math.random() * 9000) + 1000;
  const activity_schedule_id = `AS_${ik_number}_${activity_id}_${unique_digit}`

  const exists = await farmingConnection.query(
    `SELECT activity_schedule_id FROM activity_schedule WHERE activity_schedule_id = '${activity_schedule_id}' limit 1`
  )
  if (exists.length > 0) {
    console.log(exists)
    generateActivityScheduleId(ik_number, activity_id)
  }
  return activity_schedule_id;
}
