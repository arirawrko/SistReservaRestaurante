//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createMesa,
  deleteMesa,
  getMesa,
  getMesas,
  updateMesa,
} from "../controllers/mesaDAO.controller.js";

// función de Express para manejar las rutas
const router = Router();

// rutas
router.get("/mesa", getMesas);
router.get("/mesa/:id", getMesa);
router.post("/mesa", createMesa);
router.put("/mesa/:id", updateMesa);
router.delete("/mesa/:id", deleteMesa);

export default router;
