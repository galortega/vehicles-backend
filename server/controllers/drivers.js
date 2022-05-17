import { Op } from "sequelize";
import { Driver, Company } from "../models";
import errors from "../utils/errors";
import { errorStatusHandle } from "../utils/wrappers";

export const getAll = async (req, res) => {
  const { firstName, lastName } = req.query;
  const drivers = await Driver.findAll({
    where: {
      [Op.or]: [
        firstName && { firstName: { [Op.like]: `%${firstName}%` } },
        lastName && { lastName: { [Op.like]: `%${lastName}%` } },
      ],
    },
  });
  return res.status(200).json({ status: "success", data: drivers });
};

export const bulkCreateByCompanyId = async (req, res) => {
  const { companyId, drivers } = req.body;

  try {
    const company = await Company.findOne({
      where: { id: companyId },
      include: [
        {
          model: Driver,
        },
      ],
    });

    if (!company) {
      return errorStatusHandle(res, errors.INVALID_PARAMS);
    }

    const driversToCreate = drivers.map((driver) => {
      return {
        ...driver,
        companyId,
      };
    });

    const createdDrivers = await Driver.bulkCreate(driversToCreate, {
      returning: true,
    });

    return res.status(200).json({
      message: "Drivers created successfully",
      data: createdDrivers,
    });
  } catch (error) {
    console.log(error);
    return errorStatusHandle(res, error);
  }
};
