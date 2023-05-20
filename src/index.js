//* encargado de arrancar la aplicación

import app from "./app.js";
import { sequelize } from "./database/database.js";
// import {fileURLToPath} from 'url';
// import {dirname} from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.get('/', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
// });

async function main() {
  try {
    // sincroniza todos los modelos
    await sequelize.sync({ force: true });   // sincroniza con la BD y crear la tabla sin borrar la bue ya existía
    console.log("Connection has been established successfully.");
    app.listen(4000);
    console.log("Servidor corriendo en el puerto", 4000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
