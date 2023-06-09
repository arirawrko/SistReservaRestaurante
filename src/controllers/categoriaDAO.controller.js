//* funciones que se van a ejecutar cuando se llegue a las categorías

import { Categoria } from "../models/categoria.js";
import { Producto } from "../models/producto.js";

export const getCategoriaProductos= async (req, res) => {
  const { id } = req.params;

  const productos = await Producto.findAll({
    where: { categoriumId: id },
  });

  res.json(productos);
};

export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params; // recuperar el id de cliente
    const categoria = await Categoria.findByPk(id); // buscar por primaryKey

    if (!categoria)
      return res.status(404).json({ message: "Categoría no existe!" });

    res.json(categoria); // enviar al cliente
    console.log(categoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findAll();
    console.log(categoria); //mostrar por consola

    res.json(categoria); // enviar los datos al cliente
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCategoria = async (req, res) => {
  const { nombre } = req.body;

  try {
    const newCategoria = await Categoria.create({
      nombre,
    });

    console.log(newCategoria);

    res.json(newCategoria);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const categoria = await Categoria.findOne({
      where: { id },
    });

    // método más sencillo que en la versión de restaurante para guardar un cambio en cualquier atributo de una mesa

    categoria.set(req.body);
    await categoria.save();

    console.log(categoria);
    return res.json(categoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCategoria = async (req, res) => {
  const { id } = req.params;

  try {
    //! falta validar que exista primero la categoría a eliminar, retorna 204 aunque no exista el id
    // buscar y eliminar a la vez por id
    const result = await Categoria.destroy({
      where: { id },
    });

    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
