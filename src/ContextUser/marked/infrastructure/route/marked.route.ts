import { Router } from "express";
import { MarkedUseCase } from "../../application/markedUseCase";
import { MarkedController } from "../controller/marked.ctrl";

import { PostgresRepository } from "../repository/postgres.repository";
import { Marked } from '../models/marked.model';

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
route.get('/marked/:id', async (req, res) => {
    try {
      const marked = await Marked.findAll({ where: {employeeId: req.params.id } });
      res.json(marked);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  });


export default route