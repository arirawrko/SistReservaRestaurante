//va a tener la configuración de express
import express from 'express';
import restauranteRoutes from './routes/restaurante.routes.js';

const app = express()

//middelwares para manejar peticiones una vez que pasen por la direccion

app.use(express.json())

app.use(restauranteRoutes)

export default app;
