//* definir las tablas que se van a crear en la base de datos

import { DataTypes, DatabaseError } from "sequelize";
import { sequelize } from "../database/database.js";
import { Mesa } from "./mesa.js";
import { Reserva } from "./reserva.js";

//Sequelize es el que crea y diseñar las relaciones en la BD

export const Restaurante = sequelize.define(
  "restaurante",
  // Aquí se definen los atributos del modelo
  //TODO: agregar notNull a los atributos que hagan falta
  {
    id: {
      // Se importa DataTypes para traer los tipos de datos que soporta Sequelize
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, //? definir si usar autoIncrement para todos los PK
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
  {
    freezeTableName: true, //? por qué no freezea el nombre de la tabla?
  }
);

//* relaciones
// un restaurante puede tener muchas mesas
Restaurante.hasMany(Mesa, {
  foreingKey: "restauranteId",
  sourceKey: "id",
});

// una mesa puede pertenecer a un solo restaurante
Mesa.belongsTo(Restaurante);

// un restaurante puede tener muchas reservas
Restaurante.hasMany(Reserva, {
  foreingKey: "restaurante_id", // probando con sneake_case
  sourceKey: "id",
});

// una reserva puede pertenecer a un solo restaurante
Reserva.belongsTo(Restaurante, {
  foreingKey: "restaurante_id",
  targetId: "id",
});
