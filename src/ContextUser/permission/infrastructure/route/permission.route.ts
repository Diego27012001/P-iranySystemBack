import { Router } from "express";
import { PermissionUseCase } from "../../application/permissionUseCase";
import { PermissionController } from "../controller/permission.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const permissionRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const permissionUseCase = new PermissionUseCase(permissionRepo)

/**
 * Iniciar User Controller
 */

const permissionCtrl = new PermissionController(permissionUseCase)

/**
 * 
 */

route.get(`/permission`,permissionCtrl.listPermissionCtrl);
route.post(`/permission/new`,permissionCtrl.insertPermissionCtrl);

export default route