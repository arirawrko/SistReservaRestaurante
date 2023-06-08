
//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ConsumoDetalle= sequelize.define(
  "detalle_consumo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        return this.getDataValue("id");
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

//* relaciones
