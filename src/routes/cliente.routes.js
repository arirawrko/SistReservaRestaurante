//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createCliente,
  getCliente,
  getClienteByCI,
  getClientes,
} from "../controllers/clienteDAO.controller.js";
const router = Router();

//rutas
router.get("/cliente", getClientes);
router.get("/cliente/:id", getCliente);

router.get("/clienteByCi/:cedula", getClienteByCI);

router.post("/cliente", createCliente);

export default router;
