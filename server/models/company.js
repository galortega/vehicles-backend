import { DataTypes, Sequelize } from "sequelize";

export const CompanyModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    unique: true,
  },
  city: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  planType: {
    type: Sequelize.STRING(20),
    allowNull: false,
    field: "plan_type",
    defaultValue: "prepaid",
  },
  status: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: "active",
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: "creation_date",
  },
};

export const CompanyConfig = {
  freezeTableName: true,
  tableName: "company",
  timestamps: true,
  createdAt: "creationDate",
  updatedAt: false,
};
