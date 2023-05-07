import { Mesa } from "../models/mesa.js";

// función para el post
export const createMesa = async (req, res) => {
  try {
    const { nombre, posicion_x, posicion_y, planta, capacidad, restauranteId } =
      req.body;

    const newMesa = await Mesa.create({
      nombre,
      posicion_x,
      posicion_y,
      planta,
      capacidad,
      restauranteId,
    });

    res.json(newMesa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// función para el get: obtener todas las mesas
export const getMesas = async (req, res) => {
  try {
    const mesas = await Mesa.findAll();

    res.json(mesas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// función para el get: obtener una mesa
export const getMesa = async (req, res) => {
  try {
    const { id } = req.params;

    const mesa = await Mesa.findOne({
      where: {
        id,
      },
      // elegir qué atributos mostrar
      // attributes: ["nombre", "planta", "capacidad", "reservado"],
    });

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

    // método más sencillo que en la versión de restaurante

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
    // buscar y eliminar a la vez
    const result = await Mesa.destroy({
      where: { id },
    });

    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
