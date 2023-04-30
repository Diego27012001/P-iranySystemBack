import { Router } from "express";
import { SnackUseCase } from "../../application/snackUseCase";
import { SnackController } from "../controller/snack.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const snackRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const snackUseCase = new SnackUseCase(snackRepo)

/**
 * Iniciar User Controller
 */

const snackCtrl = new SnackController(snackUseCase)

/**
 * 
 */

route.get(`/snack_time`,snackCtrl.listSnackCtrl);
route.post(`/snack_time/new`,snackCtrl.insertSnacktCtrl);


export default route