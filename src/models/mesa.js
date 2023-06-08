//* definir las tablas que se van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";
import { Reserva } from "./reserva.js";
import { ReservaDetalle } from "./reservaDetalle.js";
import { Consumo } from "./consumo.js";

export const Mesa = sequelize.define(
  "mesa",
  // Aquí se definen los atributos del modelo
  //TODO: agregar notNull a los atributos que hagan falta
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
      get() {
        return this.getDataValue("nombre");
      },
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
  },
  {
    timestamps: false,
  }
);

//* relaciones

// una mesa puede tener una Reserva

Mesa.hasOne(Reserva, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});
Reserva.belongsTo(Mesa);

// una reserva  puede tener muchas reservaDetalle

Reserva.hasMany(ReservaDetalle, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

Mesa.hasMany(Consumo, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});
Consumo.belongsTo(Mesa);
