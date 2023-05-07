//va a tener la configuración de express
import express from 'express';
import restauranteRoutes from './routes/restaurante.routes.js';
import mesaRoutes from './routes/mesa.routes.js';

const app = express()

//middelwares para manejar peticiones una vez que pasen por la dirección

app.use(express.json())

app.use(restauranteRoutes)
app.use(mesaRoutes)

export default app;
