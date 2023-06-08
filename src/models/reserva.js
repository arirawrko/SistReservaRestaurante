//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Hora } from "./hora.js";
import { ReservaDetalle } from "./reservaDetalle.js";
// import { Mesa } from './mesa.js';
export const Reserva = sequelize.define(
  "reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        return this.getDataValue("id");
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cantidadPersonas: {
      type: DataTypes.INTEGER,
      field: "cantidad_personaos",
      allowNull: false
    },
    /*     id_mesa: {
      type: DataTypes.INTEGER,
      foreignKey: true
    } */
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false,
  }
);

// relaciones

// rel. reserva y mesa

Reserva.hasMany(ReservaDetalle, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

ReservaDetalle.belongsTo(Reserva);
