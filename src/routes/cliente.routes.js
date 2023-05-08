//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createCliente,
  getCliente,
  getClientes,
} from "../controllers/clienteDAO.controller.js";
const router = Router();

//rutas
router.get("/cliente", getClientes);
router.get("/cliente/:id", getCliente);
router.post("/cliente", createCliente);

export default router;
