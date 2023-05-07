//* funciones que se van a ejecutar cuando se llegue a las restaurante

import { Mesa } from "../models/mesa.js";

// función para el post: crear una mesa
export const createMesa = async (req, res) => {
  try {
    const { nombre, posicion_x, posicion_y, planta, capacidad, restauranteId } =
      req.body; // recuperar el los parámetros del body para la inserción en la BD

    // usar create de Sequelize para asignar lo recuperado del req.body para crear una nueva mesa
    const newMesa = await Mesa.create({
      nombre, // nombre: nombre, posicion_x: posicion_x, planta: planta, etc.
      posicion_x,
      posicion_y,
      planta,
      capacidad,
      restauranteId,
    });

    // enviar al cliente la respuesta en formato json
    res.json(newMesa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// función para el get: obtener todas las mesas
export const getMesas = async (req, res) => {
  try {
    // método para obtener todas las mesas de la BD
    const mesas = await Mesa.findAll();

    res.json(mesas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// función para el get: obtener una mesa
export const getMesa = async (req, res) => {
  try {
    // extraer el id de una mesa en el request

    const { id } = req.params;
    // buscar en el BD por id.
    const mesa = await Mesa.findOne({
      where: {
        id,
      },
      // elegir qué atributos mostrar
      // attributes: ["nombre", "planta", "capacidad", "reservado"],
    });

    // si no encuentra la mesa, retorna un mensaje de error

    if (!mesa) return res.status(404).json({ message: "Mesa no existe!" });

    res.json(mesa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// función para el update de una mesa
export const updateMesa = async (req, res) => {
  try {
    const { id } = req.params;

    const mesa = await Mesa.findOne({
      where: { id },
    });

    // método más sencillo que en la versión de restaurante para guardar un cambio en cualquier atributo de una mesa

    mesa.set(req.body);
    await mesa.save();

    console.log(mesa);
    return res.json(mesa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// función para el delete de una mesa
export const deleteMesa = async (req, res) => {
  const { id } = req.params;

  try {
    //! falta validar que exista primero la mesa a eliminar, retorna 204 aunque no exista el id
    // buscar y eliminar a la vez por id
    const result = await Mesa.destroy({
      where: { id },
    });

    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
