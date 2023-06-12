//* archivo para crear las URL del servidor

import { Router } from "express";
import {
  createReserva,
  getReserva,
  getReservaByID,
} from "../controllers/reservaDAO.controller.js";

import { Restaurante } from "./../models/restaurante.js";
import { Hora } from "./../models/hora.js";
import { Cliente } from "./../models/cliente.js";

const router = Router();

//rutas

router.get("/reserva/:id", getReservaByID);
router.get("/buscar/reserva/:id1/:id2", getReserva);
router.post("/reserva", createReserva);

router.get('/reserva', async (req, res) => {
  var restaurantes = await Restaurante.findAll();
  var horarios = await Hora.findAll();
    
  res.render("reserva", 
    {
      rows_restaurante: restaurantes, 
      rows_hora: horarios
    });
 });   
 
 
router.get('/listareserva', async (req, res) => {
  //console.log("-->" + horarios);  
  var clientes = await Cliente.findAll();
  var restaurantes = await Restaurante.findAll();

  res.render("listareserva", 
    {
      rows_restaurante: restaurantes, 
      rows_cliente: clientes
    });
 });

export default router;
