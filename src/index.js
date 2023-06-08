//* encargado de arrancar la aplicación

import app from "./app.js";
import { sequelize } from "./database/database.js";

import { Restaurante } from "./models/restaurante.js";
import { Hora } from "./models/hora.js";
import { Cliente } from "./models/cliente.js";

import {fileURLToPath} from 'url';
import {dirname} from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



async function main() {
  try {
    // sincroniza todos los modelos
    await sequelize.sync({ force: false });   // sincroniza con la BD y crear la tabla sin borrar la bue ya existía
    console.log("Connection has been established successfully.");
    app.listen(4000);
    console.log("Servidor corriendo en el puerto", 4000);



    /* Para rederizar el index */
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/views");

    app.get('/', (req, res) => {
      res.render("index");
    });    

    var restaurantes = await Restaurante.findAll();
    var horarios = await Hora.findAll();
    var clientes = await Cliente.findAll();
    
    

    app.get('/reserva', (req, res) => {
      //console.log("-->" + horarios);  
      res.render("reserva", 
        {
          rows_restaurante: restaurantes, 
          rows_hora: horarios
        });
     });   
     
     
     app.get('/listareserva', (req, res) => {
      //console.log("-->" + horarios);  
      

      res.render("listareserva", 
        {
          rows_restaurante: restaurantes, 
          rows_cliente: clientes
        });
     });   


  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
