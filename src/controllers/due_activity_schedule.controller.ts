import { NextFunction, Request, Response } from "express";
import { createFarmingActivity } from "../helpers/activity_schedule/activity_planning.helper";
import { HttpException } from '../exceptions/HttpException';


export async function createFarmingActivityController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.body.unique_member_id || !req.body.activity_label || !req.body.unique_field_id)
      throw new HttpException(400, "Please include appropriate unique_member_id, activity label and unique_field_id");

    const data = await createFarmingActivity(req.body.unique_member_id, req.body.activity_label, req.body.unique_field_id);

    await res.status(200).json({ message: "scheduling in progress", data });
  } catch (error) {
    next(error);
  }
}

