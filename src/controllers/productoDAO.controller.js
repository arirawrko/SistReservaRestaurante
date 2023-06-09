//* funciones que se van a ejecutar cuando se llegue a productos

import { Producto } from "../models/producto.js";

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params; // recuperar el id de cliente
    const producto = await Producto.findByPk(id); // buscar por primaryKey

    if (!producto)
      return res.status(404).json({ message: "Producto no existe!" });

    res.json(producto); // enviar al cliente
    console.log(producto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProducto = async (req, res) => {
  try {
    const producto = await Producto.findAll();
    console.log(producto); //mostrar por consola

    res.json(producto); // enviar los datos al cliente
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProducto = async (req, res) => {
  const { nombre, precioVenta, categoriumId} = req.body;

  try {
    const newProducto = await Producto.create({
      nombre,
      precioVenta,
      categoriumId,
    });

    console.log(newProducto);

    res.json(newProducto);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findOne({
      where: { id },
    });

    producto.set(req.body);
    await producto.save();

    console.log(producto);
    return res.json(producto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProducto = async (req, res) => {
  const { id } = req.params;

  try {
    //! falta validar que exista primero el producto a eliminar, retorna 204 aunque no exista el id
    // buscar y eliminar a la vez por id
    const result = await Producto.destroy({
      where: { id },
    });

    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
