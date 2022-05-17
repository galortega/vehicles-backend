import { Company } from "../models/index";

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
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
