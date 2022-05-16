import express from "express";
import { getAll } from "../controllers/drivers";
import { allowedMethods, asyncWrapper } from "../utils/wrappers";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET drivers listing */
router.get("/", asyncWrapper(getAll));

export default router;
