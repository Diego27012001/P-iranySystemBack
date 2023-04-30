import { Router } from "express";
import { LocationUseCase } from "../../application/locationUseCase";
import { LocationController } from "../controller/location.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const locationRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const locationUseCase = new LocationUseCase(locationRepo)

/**
 * Iniciar User Controller
 */

const locationCtrl = new LocationController(locationUseCase)

/**
 * 
 */

route.get(`/location_store`,locationCtrl.listLocationCtrl);


export default route