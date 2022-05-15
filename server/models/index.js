import db from "../config/connect";

import { DriverModel, DriverConfig } from "./driver";
import { VehicleModel, VehicleConfig } from "./vehicle";
import { CompanyModel, CompanyConfig } from "./company";

const Company = db.sequelize.define("Company", CompanyModel, CompanyConfig);
const Driver = db.sequelize.define("Driver", DriverModel, DriverConfig);
const Vehicle = db.sequelize.define("vehicle", VehicleModel, VehicleConfig);

Company.hasMany(Driver, { foreignKey: "companyId" });
Driver.belongsTo(Company, { foreignKey: "companyId" });

Driver.hasMany(Vehicle, { foreignKey: "driverId" });
Vehicle.belongsTo(Driver, { foreignKey: "driverId" });

export default { Company, Driver, Vehicle };
