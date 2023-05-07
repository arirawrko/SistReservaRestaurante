import { Router } from "express";
import { createMesa, getMesas } from "../controllers/mesaDAO.controller.js";

const router = Router();

router.get("/mesa", getMesas);
router.get("/mesa/:id");
router.post("/mesa", createMesa);
router.put("/mesa/:id");
router.delete("/mesa/:id");

export default router;
