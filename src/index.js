//encargado de arrancar la aplicación
import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/restaurante.js";
import "./models/mesa.js";

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
    app.listen(4000);
    console.log("Servidor corriendo en el puerto", 4000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
