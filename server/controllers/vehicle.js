import models from "../models";

export const getAll = async (req, res) => {
  const vehicles = await models.Vehicle.findAll();
  return res.status(200).json({ status: "success", data: vehicles });
};
