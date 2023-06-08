//* definir las tablas que van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";
import { Mesa } from "./mesa.js";

export const Consumo = sequelize.define(
  "consumo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        return this.getDataValue("id");
      },
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["A", "C"]],
        msg: "Estado solo puede ser Abierto o Cerrado",
      },
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0,
    },
    fecha_creacion_consumo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    fecha_cierre_consumo: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

//* relaciones
