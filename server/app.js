import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import indexRouter from "./routes/index";
import vehiclesRouter from "./routes/vehicles";
import driversRouter from "./routes/drivers";
import companyRouter from "./routes/company";

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/drivers", driversRouter);
app.use("/companies", companyRouter);

export default app;
