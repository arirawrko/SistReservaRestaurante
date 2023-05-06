import { Mesa } from "../models/mesa.js";

export const createMesa = async (req, res) => {
};
export const getMesas = async (req, res) => {
  try {
    const mesas = await Mesa.findAll();
    res.json(mesas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
