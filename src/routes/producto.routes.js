
//* archivo para crear las URL del servidor

import { Router } from "express";
import { createProducto, deleteProducto, getProducto, getProductoById, updateProducto } from "../controllers/productoDAO.controller.js";

const router = Router();

// rutas

router.get("/producto", getProducto);
router.get("/producto/:id", getProductoById);
router.post("/producto", createProducto);
router.put("/producto/:id", updateProducto);
router.delete("/producto/:id", deleteProducto);

export default router;