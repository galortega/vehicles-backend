import { Vehicle } from "../models";
import { errorStatusHandle } from "../utils/wrappers";

export const getAll = async (req, res) => {
  const { driverId } = req.query;
  const vehicles = await Vehicle.findAll({
    where: driverId && { driverId: parseInt(driverId) },
    order: [["creationDate", "DESC"]],
  });
  return res.status(200).json({ status: "success", data: vehicles });
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const vehicle = await Vehicle.findByPk(id);
  return res.status(200).json({ status: "success", data: vehicle });
};

export const create = async (req, res) => {
  const vehicle = await Vehicle.create(req.body);
  return res.status(201).json({ status: "success", data: vehicle });
};

export const update = async (req, res) => {
  const vehicle = await Vehicle.update(req.body, {
    where: { id: req.params.id },
  });
  return res.status(200).json({ status: "success", data: vehicle });
};

export const remove = async (req, res) => {
  const vehicle = await Vehicle.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json({ status: "success", data: vehicle });
};

export const bulkCreate = async (req, res) => {
  const { vehiclesToCreate } = req.body;

  try {
    const createdVehicles = await Vehcle.bulkCreate(vehiclesToCreate, {
      returning: true,
    });

    return res.status(200).json({
      message: "Vehicles created successfully",
      data: createdVehicles,
    });
  } catch (error) {
    console.log(error);
    return errorStatusHandle(res, error);
  }
};
