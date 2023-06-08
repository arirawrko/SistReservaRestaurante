//* funciones que se van a ejecutar cuando se llegue a las restaurante

import { Reserva } from "../models/reserva.js";
import { ReservaDetalle } from "../models/reservaDetalle.js";
import { Hora } from "../models/hora.js";
import { Cliente } from "../models/cliente.js";
import { Restaurante } from "../models/restaurante.js";

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
  try {
    const {
      // data
      restauranteId,
      mesaId,
      cantidad_personas,
      fecha,
      horario,

      // cliente

      cedula,
      nombre,
      apellido,
    } = req.body;
    console.log(req.body);

    // verificar si existe el cliente con su cedula

    let consultaCliente = await Cliente.findOne({
      where: {
        cedula: cedula,
      },
    });
    console.log(consultaCliente.getDataValue("id"));

    if (!consultaCliente) {
      newCliente = await Cliente.create({
        cedula,
        nombre,
        apellido,
      });
      consultaCliente = await Cliente.findOne({
        where: {
          cedula: cedula,
        },
      });
      // persistir reserva
    }
    let id = consultaCliente.getDataValue("id");
    let newReserva = await Reserva.create({
      restauranteId: restauranteId,
      cantidadPersonas: cantidad_personas,
      fecha: fecha,
      clienteId: id,
      mesaId: mesaId,
    });
    // persistir reserva ReservaDetalle
    // rescatar primero el id de reserva
    const id_reserva = newReserva.getDataValue("id");
    console.log("Id reserva", id_reserva);
    var datos = [];
    /*     let reservaDetalle = await horario.forEach(async (element) => {
      let newReservaDetalle = await ReservaDetalle.create({
        reservaId: id_reserva,
        horaId: element,
      });
      console.log("Reserva Detalle: " + id_reserva + "- " + element);
      datos.push(newReservaDetalle);
    }); */
    let reservaDetalle = await Promise.all(
      horario.map(async (element) => {
        let newReservaDetalle = await ReservaDetalle.create({
          reservaId: id_reserva,
          horaId: element,
        });
        console.log("Reserva Detalle: " + id_reserva + "- " + element);
        return newReservaDetalle;
      })
    );
    console.log(reservaDetalle);
    const data = {
      reserva: newReserva,
      reservaDetalleMas: reservaDetalle,
    };
    console.log("terminando proceso");
    res.json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
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

    if (!reserva) return res.status(404).json({ message: "Reserva no existe" });

    res.json(reserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReserva = async (req, res) => {
  try {
    // direccion: http://localhost:4000/buscar/reserva/:id1/:id2
    const { id1, id2 } = req.params;
    if (id1 === "restaurante") {
      const reservas = await Reserva.findAll({
        where: { restauranteId: id2 },
      });
      res.json(reservas);
    } else if (id1 === "fecha") {
      const reservas = await Reserva.findAll({
        where: { fecha: id2 },
        order: [["fecha", "ASC"]],
      });
      res.json(reservas);
    } else if (id1 === "cliente") {
      const reservas = await Reserva.findAll({
        where: { clienteId: id2 },
        order: [["fecha", "ASC"]],
      });
      res.json(reservas)
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
