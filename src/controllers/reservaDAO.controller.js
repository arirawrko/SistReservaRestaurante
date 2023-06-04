//* funciones que se van a ejecutar cuando se llegue a las restaurante

import { Reserva } from "../models/reserva.js";
import { ReservaDetalle } from "../models/reservaDetalle.js";
import { Hora } from "../models/hora.js";

/* export const createReserva = async (req, res) => {
  const {
    fecha,
    cantidadPersonas,
    cliente_id,
    mesaId,
    restautanteId,
    horario,
  } = req.body;

  try {
    const tryFecha = await Reserva.findOne({    // consulto fecha en la tabla reserva y guardo en variable
      where: { fecha: fecha },
    });
    const consultaIDHora = await Hora.findOne({ // consulto hora en la tabla hora y guardo en variable
      where: { horario: horario },
    });
    console.log(consultaIDHora)
    const tryHora = await ReservaDetalle.findOne({
      where: { horarioId: consultaIDHora },
    });
    const tryMesa = await Reserva.findOne({
      where: { mesaId: mesaId },
    });

    if (tryFecha === null && tryHora === null && tryMesa === null) {
      const newReserva = await Reserva.create({
        fecha,// consulto fecha en la tabla reserva y guardo en variable
        cantidadPersonas,
        cliente_id,
        mesaId,
        restautanteId,
        horario,
      });
      console.log(newReserva);

      const newReservaDetalle = await ReservaDetalle.create({
        fecha,
        horario,
      });

      console.log(newReservaDetalle);

      res.json(newReserva);
    } else {
      res.json({ message: "Mesa resevada en esa fecha y horario" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}; */

export const createReserva = async (req, res) => {
  const {
    fecha,
    cantidadPersonas,
    cliente_id,
    mesaId,
    restautanteId,
    horario,
  } = req.body;

/*   try {
    const { reserva } = 
  } catch (error) {
    return res.status(400).json({ message: error.message });
  } */
};

export const getReservaByID = async (req, res) => {
  try {
    const { id } = req.params;
    /**
     * ? Usar findOne o findByPk?
     */
    const reserva = await Reserva.findOne({
      where: {
        id,
      },
    });

    if (!reserva)
      return res.status(404).json({ message: "Restaurante no existe" });

    res.json(reserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
