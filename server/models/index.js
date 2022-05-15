import db from "../config/connect";

import { DriverModel, DriverConfig } from "./driver";
import { VehiculeModel, VehiculeConfig } from "./vehicule";
import { CompanyModel, CompanyConfig } from "./company";

const Company = db.sequelize.define("Company", CompanyModel, CompanyConfig);
const Driver = db.sequelize.define("Driver", DriverModel, DriverConfig);
const Vehicule = db.sequelize.define("Vehicule", VehiculeModel, VehiculeConfig);

Company.hasMany(Driver, { foreignKey: "companyId" });
Driver.belongsTo(Company, { foreignKey: "companyId" });

Driver.hasMany(Vehicule, { foreignKey: "driverId" });
Vehicule.belongsTo(Driver, { foreignKey: "driverId" });

export default { Company, Driver, Vehicule };
