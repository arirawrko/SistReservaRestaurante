import { DataTypes, DatabaseError } from "sequelize";
import { sequelize } from "../database/database.js";
import { Mesa } from "./mesa.js";

export const Restaurante = sequelize.define(
  "restaurante",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    freezeTableName: true,
  }
);

Restaurante.hasMany(Mesa, {
  foreingKey: "restauranteId",
  sourceKey: "id",
});

Mesa.belongsTo(Restaurante, {
  foreingKey: "restauranteId",
  targetId: "id",
});
