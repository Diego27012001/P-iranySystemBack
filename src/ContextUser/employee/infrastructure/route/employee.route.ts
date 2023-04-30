import { Router } from "express";
import { EmployeeUseCase } from "../../application/employeeUseCase";
import { EmployeeController } from "../controller/employee.ctrl";
import { PostgresRepository } from "../repository/postgres.repository";
import multer from 'multer';
import path from 'path';
import { Employees } from "../models/employee.model";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now() + ext);
    }
  });
  
  const upload = multer({ storage: storage });

const route = Router()
/**
 * Iniciar Repository
 */
const employeeRepo = new PostgresRepository()

/**
 * Iniciamos casos de uso
 */

const employeeUseCase = new EmployeeUseCase(employeeRepo)

/**
 * Iniciar User Controller
 */

const employeeCtrl = new EmployeeController(employeeUseCase)

/**
 * 
 */
route.get(`/employee`,employeeCtrl.listEmployeeCtrl);
route.get('/employee/photo/:id', async (req, res) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (employee && employee.dataValues.photoPath) {
      res.sendFile(employee.dataValues.photoPath, { root: path.join(__dirname, '../../../../../') });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
route.post(`/employee/new`,upload.single('photo'), async (req, res) => {
    
    const {nameuser,lastnameuser,phone,dni,email,typeId,storeId} = req.body;
    const filename = req.file?.filename;
    const photoPath = req.file?.path;
    console.log(photoPath);
    Employees.create({
        nameuser,
        lastnameuser,
        phone,
        dni,
        email,
        typeId,
        storeId,
        photo: filename,
        photoPath: photoPath
    })
  });

route.get('/employee/:dni', async (req, res) => {
    try {
      const usuario = await Employees.findOne({ where: { dni: req.params.dni } });
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al buscar el usuario' });
    }
  });

export default route