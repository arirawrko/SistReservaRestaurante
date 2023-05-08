//* funciones que se van a ejecutar cuando se llegue a las restaurante

import { Mesa } from "../models/mesa.js";
import { Restaurante } from "../models/restaurante.js";

// función para el get: obtener todos los restaurantes
export const getRestaurantes = async (req, res) => {
  try {
    const restaurantes = await Restaurante.findAll();
    res.json(restaurantes);
    console.log(restaurantes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// función para el get: obtener un restaurante
export const getRestaurante = async (req, res) => {
  try {
    const { id } = req.params;
    /**
     * ? Usar findOne o findByPk?
     */
    const restaurante = await Restaurante.findOne({
      where: {
        id,
      },
    });

    if (!restaurante)
      return res.status(404).json({ message: "Restaurante no existe" });

    res.json(restaurante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// función para el get: obtener todas las mesas por restaurante
export const getRestauranteMesas = async (req, res) => {
  const { id } = req.params;

  const mesas = await Mesa.findAll({
    where: { restauranteId: id },
  });

  res.json(mesas);
};

// función para el post: crear un restaurante
export const createRestaurante = async (req, res) => {
  const { nombre, direccion } = req.body;

  try {
    const newRestaurante = await Restaurante.create({
      nombre,
      direccion,
    });

    console.log(newRestaurante);

    res.json(newRestaurante);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// función para el update de un restaurante
export const updateRestaurante = async (req, res) => {
  try {
    const { id } = req.params; // recuperar el id
    const { nombre, direccion } = req.body; // recuperar  los parámetros del cliente para insertar en la BD

    /**
     * TODO: validar que se encuentre primero el restaurante o dejar que solo el try-catch se encargue
     */
    const restaurante = await Restaurante.findByPk(id); // consulta a la BD para buscar por id
    restaurante.nombre = nombre;
    restaurante.direccion = direccion;

    // guardar en la bd
    await restaurante.save();
    console.log(restaurante); // imprimmir por consola los datos nuevos

    res.json(restaurante); // enviar al cliente loos datos actualizados
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// función para el delete de un restaurante
export const deleteRestaurante = async (req, res) => {
  try {
    //! falta validar que exista primero el restaurante a eliminar, retorna 204 aunque no exista el id
    const { id } = req.params;
    await Restaurante.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
