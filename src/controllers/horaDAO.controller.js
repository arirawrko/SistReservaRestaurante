import { Hora } from "../models/hora.js";

export const getHorarios= async (req, res) => {
  try {
    const horarios = await Hora.findAll();
    console.log(horarios); //mostrar por consola

    res.json(horarios); // enviar los datos al cliente
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createHorario= async (req, res) => {
  try {
    const { horario } = req.body; // recuperar los datos insertados por el cliente

    // crear un nuevo horario con los datos recibidos en el body
    const newHorario = await Hora.create({
      horario,
    });
    res.json(newHorario); // retornar al horario 
    console.log(newHorario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteHorario= async (req, res) => {
  const { id } = req.params;

  try {
    //! falta validar que exista primero el horario a eliminar, retorna 204 aunque no exista el id
    // buscar y eliminar a la vez por id
    const result = await Hora.destroy({
      where: { id },
    });

    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
