import { DataTypes, Sequelize } from "sequelize";

export const VehicleModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  driverId: {
    type: DataTypes.INTEGER,
    field: "driver_id",
  },
  plate: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  capacity: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: "creation_date",
  },
};

export const VehicleConfig = {
  tableName: "vehicle",
  freezeTableName: true,
  timestamps: false,
};
