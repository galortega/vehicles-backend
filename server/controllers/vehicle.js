import models from "../models";

export const getAll = async (req, res) => {
  const { driver } = req.query;
  const vehicles = await models.Vehicle.findAll(
    driver && {
      where: { driverId: driver },
    }
  );
  return res.status(200).json({ status: "success", data: vehicles });
};

export const create = async (req, res) => {
  const vehicle = await models.Vehicle.create(req.body);
  return res.status(201).json({ status: "success", data: vehicle });
};

export const update = async (req, res) => {
  const vehicle = await models.Vehicle.update(req.body, {
    where: { id: req.params.id },
  });
  return res.status(200).json({ status: "success", data: vehicle });
};

export const remove = async (req, res) => {
  const vehicle = await models.Vehicle.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json({ status: "success", data: vehicle });
};
