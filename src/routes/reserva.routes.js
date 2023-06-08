//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createReserva,
  getReserva,
  getReservaByID,
} from "../controllers/reservaDAO.controller.js";

const router = Router();

//rutas

router.get("/reserva/:id", getReservaByID);
router.get("/buscar/reserva/:id1/:id2", getReserva);
router.post("/reserva", createReserva);

export default router;
