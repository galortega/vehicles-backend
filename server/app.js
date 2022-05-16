import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import indexRouter from "./routes/index";
import vehiclesRouter from "./routes/vehicles";

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/vehicles", vehiclesRouter);

export default app;
