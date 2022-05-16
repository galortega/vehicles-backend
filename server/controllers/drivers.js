import { Op } from "sequelize";
import models from "../models";

export const getAll = async (req, res) => {
  const { firstName, lastName } = req.query;
  const drivers = await models.Driver.findAll({
    where: {
      [Op.or]: [
        firstName && { firstName: { [Op.like]: `%${firstName}%` } },
        lastName && { lastName: { [Op.like]: `%${lastName}%` } },
      ],
    },
  });
  return res.status(200).json({ status: "success", data: drivers });
};
