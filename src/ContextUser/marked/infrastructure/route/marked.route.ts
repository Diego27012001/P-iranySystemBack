import { Router } from "express";
import { MarkedUseCase } from "../../application/markedUseCase";
import { MarkedController } from "../controller/marked.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const markedRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const markedUseCase = new MarkedUseCase(markedRepo)

/**
 * Iniciar User Controller
 */

const markedCtrl = new MarkedController(markedUseCase)

/**
 * 
 */

route.get(`/marked`,markedCtrl.listMarkedCtrl);
route.post(`/marked/new`, markedCtrl.insertMarkedCtrl);


export default route