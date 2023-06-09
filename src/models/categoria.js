//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./producto.js";

export const Categoria = sequelize.define(
  "categoria",
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
  },
  {
    timestamps: false,
  }
);

//* relaciones

// muchos productos pueden pertenecer a una categoría
Categoria.hasMany(Producto, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

// un producto pertenece a una sola categoría
Producto.belongsTo(Categoria);
