//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createReserva,
  getReservaByID,
} from "../controllers/reservaDAO.controller.js";

const router = Router();

//rutas

router.get("/reserva/:id", getReservaByID);
router.post("/reserva", createReserva);

export default router;
