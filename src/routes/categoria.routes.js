//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategoriaById,
  getCategoriaProductos,
  updateCategoria,
} from "../controllers/categoriaDAO.controller.js";

const router = Router();

// rutas

router.get("/categoria", getCategoria);
router.get("/categoria/:id", getCategoriaById);
router.get("/categoria/:id/productos", getCategoriaProductos);
router.post("/categoria", createCategoria);
router.put("/categoria/:id", updateCategoria);
router.delete("/categoria/:id", deleteCategoria);

export default router;
