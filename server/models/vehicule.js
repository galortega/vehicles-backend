import { DataTypes, Sequelize } from "sequelize";

export const VehiculeModel = {
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

export const VehiculelConfig = {
  freezeTableName: true,
  tableName: "vehicule",
  timestamps: true,
  createdAt: "creation_date",
};
