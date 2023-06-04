//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createHorario,
  deleteHorario,
  getHorarios,
} from "../controllers/horaDAO.controller.js";

const router = Router();

router.get("/hora", getHorarios);
router.post("/hora", createHorario);
router.delete('/hora/:id', deleteHorario)

export default router;
