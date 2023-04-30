import { Router } from "express";
import { StoreUseCase } from "../../application/storeUseCase";
import { StoreController } from "../controller/store.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const StoreRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const storeUseCase = new StoreUseCase(StoreRepo)

/**
 * Iniciar User Controller
 */

const storeCtrl = new StoreController(storeUseCase)

/**
 * 
 */

route.get(`/store`,storeCtrl.listStoreCtrl);

route.post(`/store/new`,storeCtrl.insertStoreCtrl);

export default route