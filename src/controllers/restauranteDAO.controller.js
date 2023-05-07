import { Mesa } from "../models/mesa.js";
import { Restaurante } from "../models/restaurante.js";

export const getRestaurantes = async (req, res) => {
  try {
    const restaurantes = await Restaurante.findAll();
    res.json(restaurantes);
    console.log(restaurantes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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

export const getRestauranteMesas = async (req, res) => {
  const {id} = req.params

  const mesas = await Mesa.findAll({
    where: {restauranteId: id}
  })

  res.json(mesas)
}

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

export const updateRestaurante = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, direccion } = req.body;

    /**
     * TODO: validar que se encuentre primero el restaurante o dejar que solo el try-catch se encargue
     */
    const restaurante = await Restaurante.findByPk(id);
    restaurante.nombre = nombre;
    restaurante.direccion = direccion;

    await restaurante.save();
    console.log(restaurante);

    res.json(restaurante);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteRestaurante = async (req, res) => {
  try {
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
