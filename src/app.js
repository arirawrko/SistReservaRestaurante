//* archivo que contine la configuración de express

import express from "express";
import restauranteRoutes from "./routes/restaurante.routes.js";
import mesaRoutes from "./routes/mesa.routes.js";
import clienteRoutes from './routes/cliente.routes.js';
import cors from 'cors';

const app = express();

// middelwares para manejar peticiones una vez que pasen por la dirección

app.use(express.json());    //cada vez que se envía un dato en formato json el servidor va a interpretarlo y guardarlo en un req.body

app.use(restauranteRoutes);
app.use(mesaRoutes);
app.use(clienteRoutes)
app.use(cors())

export default app;
