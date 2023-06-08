//* definir las tablas que van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";
import { ReservaDetalle } from "./reservaDetalle.js";

export const Hora = sequelize.define(
  "hora",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, //? definir si usar autoIncrement para todos los PK
      get(){
        return this.getDataValue("id");
      }
    },
    horario: {
      type: DataTypes.STRING,
      get(){
        return this.getDataValue("horario");
      }
    },
  },
  {
    timestamps: false,
  }
);

// relaciones
// una hora tiene una reserva detalle y viceversa

// reservadetalle tiene un horario
Hora.hasOne(ReservaDetalle, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

ReservaDetalle.belongsTo(Hora);


