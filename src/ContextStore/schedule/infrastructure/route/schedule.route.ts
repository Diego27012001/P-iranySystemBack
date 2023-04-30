import { Router } from "express";
import { ScheduleUseCase } from "../../application/scheduleUseCase";
import { ScheduleController } from "../controller/schedule.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const scheduleRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const scheduleUseCase = new ScheduleUseCase(scheduleRepo)

/**
 * Iniciar User Controller
 */

const scheduleCtrl = new ScheduleController(scheduleUseCase)

/**
 * 
 */

route.get(`/schedule`,scheduleCtrl.listScheduleCtrl);
route.post(`/schedule/new`,scheduleCtrl.insertScheduleCtrl);

export default route