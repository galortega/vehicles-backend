import { DataTypes, Sequelize } from "sequelize";

export const DriverModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    field: "company_id",
  },
  city: {
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: Sequelize.STRING(100),
    field: "last_name",
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  avatarUrl: {
    type: Sequelize.STRING(200),
    field: "avatar_url",
  },
  status: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: "creation_date",
  },
};

export const DriverConfig = {
  freezeTableName: true,
  tableName: "driver",
  timestamps: true,
  createdAt: "creationDate",
  updatedAt: false,
};
