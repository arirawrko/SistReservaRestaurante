//* definir las tablas que se van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export const Mesa = sequelize.define(
  "mesa",
  // Aquí se definen los atributos del modelo
  //TODO: agregar notNull a los atributos que hagan falta
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    posicion_x: {
      type: DataTypes.INTEGER,
    },
    posicion_y: {
      type: DataTypes.INTEGER,
    },
    planta: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    capacidad: {
      type: DataTypes.INTEGER,
    },
    reservado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,  //! como no acepta TRUE en el POST, manejar mejor o dejar de usar
    },
  },
  {
    timestamps: false,
  }
);
