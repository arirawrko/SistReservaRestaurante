//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Reserva } from "./reserva.js";
import { Consumo } from "./consumo.js";

export const Cliente = sequelize.define(
  "cliente",
  // Aquí se definen los atributos del modelo
  //TODO: agregar notNull a los atributos que hagan falta
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, //? definir si usar autoIncrement para todos los PK
      get() {
        return this.getDataValue("id");
      },
    },
    cedula: {
      type: DataTypes.INTEGER,
      unique: true, // es un requisito que la cédula sea única
      // indexes: [{ unique: true, fields: ['someUnique'] }]
    },
    nombre: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("nombre");
      },
    },
    apellido: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("apellido");
      },
    },
  },
  {
    timestamps: false,
  }
);

//* relaciones

// un cliente puede tener varias reservas
Cliente.hasMany(Reserva, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

// una reserva puede pertenecer a un solo cliente
Reserva.belongsTo(Cliente);

Cliente.hasMany(Consumo, {
  foreignKey: {
    allowNull: false,
  },
});

// una reserva puede pertenecer a un solo cliente
Consumo.belongsTo(Cliente);