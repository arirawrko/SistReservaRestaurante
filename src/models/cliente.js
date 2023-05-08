//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Reserva } from "./reserva.js";

export const Cliente = sequelize.define(
  "cliente",
  // Aquí se definen los atributos del modelo
  //TODO: agregar notNull a los atributos que hagan falta
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, //? definir si usar autoIncrement para todos los PK
    },
    cedula: {
      type: DataTypes.INTEGER,
      unique: true, // es un requisito que la cédula sea única
      // indexes: [{ unique: true, fields: ['someUnique'] }]
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false,
  }
);

//* relaciones

// un cliente puede tener varias reservas
Cliente.hasMany(Reserva, {
  foreignKey: "reserva_id", //probando en sneake_case
  sourceKey: "id",
});

// una reserva puede pertenecer a un solo cliente
Reserva.belongsTo(Cliente, {
  foreignKey: "reserva_id",
  targetId: "id",
});
