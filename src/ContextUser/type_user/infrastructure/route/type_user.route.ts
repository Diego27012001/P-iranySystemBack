import { Router } from "express";
import { TypeUseCase } from "../../application/type_userUseCase";
import { TypeController } from "../controller/type_user.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const typeRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const typeUseCase = new TypeUseCase(typeRepo)

/**
 * Iniciar User Controller
 */

const typeCtrl = new TypeController(typeUseCase)

/**
 * 
 */

route.get(`/type_user`,typeCtrl.listTypeCtrl);
route.post(`/type_user/new`,typeCtrl.insertTypeCtrl);

export default route