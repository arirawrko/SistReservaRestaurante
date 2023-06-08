//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ConsumoDetalle } from "./consumoDetalle.js";

export const Producto = sequelize.define(
  "producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        return this.getDataValue("id");
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precioVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Producto.hasMany(ConsumoDetalle, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});
