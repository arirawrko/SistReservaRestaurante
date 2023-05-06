import { Router } from "express";
import {getRestaurantes, getRestaurante, createRestaurante, updateRestaurante, deleteRestaurante} from '../controllers/restauranteDAO.controller.js';
const router = Router();

router.get("/restaurante", getRestaurantes);
router.get("/restaurante/:id", getRestaurante);
router.post("/restaurante", createRestaurante);
router.put("/restaurante/:id", updateRestaurante);
router.delete("/restaurante/:id", deleteRestaurante);

export default router;
