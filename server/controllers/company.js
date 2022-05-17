import { Company } from "../models/index";
import { errorStatusHandle } from "../utils/wrappers";

export const getAll = async (req, res) => {
  const companies = await Company.findAll();
  return res.status(200).json({ status: "success", data: companies });
};

export const bulkCreate = async (req, res) => {
  const { companiesToCreate } = req.body;

  try {
    const createdCompanies = await Company.bulkCreate(companiesToCreate, {
      returning: true,
    });

    return res.status(200).json({
      message: "Companies created successfully",
      data: createdCompanies,
    });
  } catch (error) {
    console.log(error);
    return errorStatusHandle(res, error);
  }
};
