import { Cliente } from "../models/cliente.js";

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    console.log(clientes); //mostrar por consola

    res.json(clientes); // enviar los datos al cliente
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClienteByCI = async (req, res) => {
  try {
    const { cedula } = req.params; // recuperar el id de cliente
    const cliente = await Cliente.findOne({where: {'cedula': cedula}}); // buscar por primaryKey

    if (!cliente)
      return res.json({ cedula:"NoExiste" ,message: "Cliente no existe!" });

    res.json(cliente); // enviar al cliente
    console.log(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const { id } = req.params; // recuperar el id de cliente
    const cliente = await Cliente.findByPk(id); // buscar por primaryKey

    if (!cliente)
      return res.status(404).json({ message: "Cliente no existe!" });

    res.json(cliente); // enviar al cliente
    console.log(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { cedula, nombre, apellido } = req.body; // recuperar los datos insertados por el cliente

    // crear un nuevo cliente con los datos recibidos en el body
    const newCliente = await Cliente.create({
      cedula,
      nombre,
      apellido,
    });
    res.json(newCliente); // retornar al cliente
    console.log(newCliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
