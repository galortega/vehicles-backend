import db from "../config/connect";

import { DriverModel, DriverConfig } from "./driver";
import { VehicleModel, VehicleConfig } from "./vehicle";
import { CompanyModel, CompanyConfig } from "./company";

const Company = db.sequelize.define("Company", CompanyModel, CompanyConfig);
const Driver = db.sequelize.define("Driver", DriverModel, DriverConfig);
const Vehicle = db.sequelize.define("vehicle", VehicleModel, VehicleConfig);

Company.hasMany(Driver, { foreignKey: "companyId", constraints: false });
Driver.belongsTo(Company, { foreignKey: "companyId", constraints: false });

Driver.hasMany(Vehicle, { foreignKey: "driverId", constraints: false });
Vehicle.belongsTo(Driver, { foreignKey: "driverId", constraints: false });

export { Company, Driver, Vehicle };
