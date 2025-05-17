/** App Config Keys */

// Scheduler App Global Config Keys
export const KEY_ROLES = "acs_staff_roles";
export const KEY_WORK_START_TIME = "acs_work_start_time";
export const KEY_WORK_END_TIME = "acs_work_end_time";
export const KEY_AVERAGE_TRAVEL_TIME_IN_GRID =
  "acs_average_travel_time_in_grid";
  export const KEY_MAX_TRAVEL_TIME_IN_GRID =
    "acs_max_travel_time_in_grid";
export const KEY_AVERAGE_ACTIVITY_DURATION = "acs_average_activity_duration";
export const KEY_NO_OF_DAYS_TO_SCHEDULE = "acs_no_of_days_to_schedule";
export const KEY_CONSEC_NO_WORK_LIMIT = "acs_consec_no_work_limit";
export const KEY_AVERAGE_TRAVEL_SPEED = "acs_average_travel_speed";
export const KEY_ABOVE_P2_TO_BELOW_P3 = "acs_above_p2_to_below_p3";
export const KEY_TIME_SAVINGS_TO_SHIFT_PRIORITY_GRID =
  "acs_time_savings_to_shift_priority_grid";
export const KEY_PRIORITY_SCORE_JSON = "acs_priority_score_json";
export const KEY_START_OF_FARMING_PHASE = "start_of_farming_phase";
export const KEY_START_OF_HARVEST_PHASE = "start_of_harvest_phase";
export const KEY_MID_FARMING_PHASE = "mid_farming_phase";
export const KEY_END_OF_FARMING_PHASE = "end_of_farming_phase";
export const OSO_INSPECTION_ACTIVITY_ID = "AL_OFO_0040";
// Scheduler Configs

// Rank Configs
export const KEY_RANK_ROLES = "rank_staff_roles";
// Rank Configs

/** App Config Keys */

/** Best Grid computation types */
export const ACS_FIRST_GRID_TYPE = "FIRST_GRID";
export const ACS_NEXT_BEST_GRID_TYPE = "NEXT_GRID";
/** Best Grid computation types */

/** Activity Level Ids */
export const ACS_ACTIVITY_LEVEL_ID_SYSTEM = "0";
export const ACS_ACTIVITY_LEVEL_ID_FARM = "1";
export const ACS_ACTIVITY_LEVEL_ID_MEMBER = "2";
export const ACS_ACTIVITY_LEVEL_ID_TRUST_GROUP = "3";
export const ACS_ACTIVITY_LEVEL_ID_TGE = "4";
export const ACS_ACTIVITY_LEVEL_ID_OFO = "5";
export const ACS_ACTIVITY_LEVEL_ID_BGO = "7";
export const ACS_ACTIVITY_LEVEL_ID_CFO = "8";
export const ACS_ACTIVITY_LEVEL_ID_ASST_SUPERVISOR = "10";
export const ACS_ACTIVITY_LEVEL_ID_SUPERVISOR = "11";
export const ACS_ACTIVITY_LEVEL_ID_TRANSPORTER = "31";
/** Activity Level Ids */

/** ACS User types */
export const ACS_ENTITY_ID_OFO = "5";
export const ACS_ENTITY_ID_BGO = "7";
export const ACS_ENTITY_ID_CCA = "6";
export const ACS_ENTITY_ID_CFO = "8";
export const ACS_ENTITY_ID_ASST_SUPERVISOR = "10";
export const ACS_ENTITY_ID_SUPERVISOR = "11";
/** ACS User types */

/** ACS Schedule new activity types */
export const ACS_NEW_ACTIVITY_TYPE_STRICT = "STRICT";
export const ACS_NEW_ACTIVITY_TYPE_LAX = "LAX";
/** ACS User types */

/** ACS Date Config Date Types */
export const ACS_DC_DATE_TYPE_SPECIFIC = "SPECIFIC";
export const ACS_DC_DATE_TYPE_RELATIVE = "RELATIVE";
export const ACS_DC_DATE_TYPE_OCCURENCE = "OCCURENCE";
/** ACS User types */

/**Repeat Configs */
export const DAYS_IN_WEEKS = 7;
export const DAYS_IN_MONTHS = 30;
export const DAYS_IN_DAYS = 1;
/**Repeat Configs */

/** User roles */
export const ROLE_OFO = "OFO";
export const ROLE_BGT = "BGT";
export const ROLE_BGO = "BGO";
export const ROLE_SUPERVISOR = "Supervisor";
export const ROLE_ASST_SUPERVISOR = "AsstSupervisor";
export const ROLE_CCA = "CCA";
export const ROLE_CFO = "CFO";
export const ROLE_TGE = "TGE";
export const ROLE_ICO = "ICO";
export const ROLE_PCO = "PCO";
export const ROLE_PCS = "PCS";
export const ROLE_DEFAULTING_TRUST_GROUP = "DEFAULTING TRUST GROUP";
export const ROLE_MEMBER = "MEMBER";
export const ROLE_TRUST_GROUP = "TRUST GROUP";
export const ROLE_FIELD = "FIELD";
export const ROLE_LICO = "LICO";
export const ROLE_ICS = "ICS";
export const ROLE_COLLECTION_CENTER = "COLLECTION CENTER";
export const ROLE_SECTION = "SECTION";
export const ROLE_BONUS_TGE = "BONUS TGE";
export const ROLE_BONUS_TG = "BONUS TG";
export const ROLE_HUB_AGENT = "Member Success In-Hub Officer";
export const ROLE_PRODUCT_SUPPORT = "Product Support";
export const ROLE_INTERNAL_SERVICE_SUPERVISOR = "Internal Service Supervisor";

/** User roles */

/** Due Date statuses */
export const DUE_STATUS_DUE = "DUE";
export const DUE_STATUS_LATE = "LATE";
export const DUE_STATUS_VERY_LATE = "VERY_LATE";
/** Due Date Statuses */

/** RF Count Types */

export const RF_COUNT_TYPE_MEMBER = "MEMBER";
export const RF_COUNT_TYPE_TRUST_GROUP = "TRUST GROUP";
export const RF_COUNT_TYPE_DEFAULTING_TRUST_GROUP = "DEFAULTING TRUST GROUP";
export const RF_COUNT_TYPE_FIELD = "FIELD";
export const RF_COUNT_TYPE_STAFF = "STAFF";
export const RF_COUNT_TYPE_COLLECTION_CENTER = "COLLECTION_CENTER";
export const RF_COUNT_TYPE_SECTION = "SECTION";
export const RF_COUNT_TYPE_MARKETED = "MARKETED";
export const RF_COUNT_TYPE_NOT_MARKETED = "NOT MARKETED";
export const RF_COUNT_TYPE_AUDIT = "AUDIT";
export const RF_COUNT_TYPE_OPEN = "OPEN";
export const RF_COUNT_TYPE_CLOSED = "CLOSED";
export const RF_COUNT_TYPE_TOTAL = "TOTAL";

/** RF Count Types */

/**ACS Scheduler Types */
export const TYPE_DUE_SCHEDULER = "DUE TYPE";
export const TYPE_PRIORITY_SCHEDULER = "PRIORITY TYPE";
/**ACS Eligibile Types */

export const TYPE_NO_THRESHING = "NO THRESHING TYPE";

/** TG RISK*/
export const riskConstant = {
  reg_phase_cur_season: "Registration Phase - Current Season",
  id_phase_cur_season: "ID Phase - Current Season",
  farm_phase_cur_season: "Farming Phase - Current Season",
  harvest_phase_cur_season: "Harvest Phase - Current Season",
  community_risk: "Community Risk",
  operator_entrepreneur_risk: "Operator/Entrepreneur Risk",
  new_tg_opening_group_weight: "New TG Opening Group Weight",
  reg_phase_prior_season: "Registration Phase - Prior Season",
  farm_phase_prior_season: "Farming Phase - Prior Season",
  harvest_phase_prior_season: "Harvest Phase - Prior Season",
  harvest_phase_cur_season_2: "Harvest Phase - Current Season 2",
};

export const ReservedRiskConstant = {
  "Registration Phase - Current Season": "reg_phase_cur_season",
  "ID Phase - Current Season": "id_phase_cur_season",
  "Farming Phase - Current Season": "farm_phase_cur_season",
  "Harvest Phase - Current Season": "harvest_phase_cur_season",
  "Community Risk": "community_risk",
  "Operator/Entrepreneur Risk": "operator_entrepreneur_risk",
  "New TG Opening Group Weight": "new_tg_opening_group_weight",
  "Registration Phase - Prior Season": "reg_phase_prior_season",
  "Farming Phase - Prior Season": "farm_phase_prior_season",
  "Harvest Phase - Prior Season": "harvest_phase_prior_season",
  "Harvest Phase - Current Season 2": "harvest_phase_cur_season_2",
};

export const DEFAULT_FINANCIAL_BAGS = 27;

export const TG_COMMITMENT_PAYMENT = "tg_commitment_payment";
