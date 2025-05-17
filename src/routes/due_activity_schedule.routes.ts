import { Router } from "express";
import { Routes } from "../interfaces/routes.interfaces";
import {  createFarmingActivityController } from "../controllers/due_activity_schedule.controller";

class DueActivityRoute implements Routes {
  public path = "/due_schedule";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/createFarmingActivity`, createFarmingActivityController);
  }
}

export default DueActivityRoute;