import express from "express";
import { getAll, bulkCreate } from "../controllers/company";
import { allowedMethods, asyncWrapper } from "../utils/wrappers";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET companies listing */
router.get("/", asyncWrapper(getAll));

router.use("/bulk$", allowedMethods(["POST"]));

/* POST bulk companies */
router.post("/bulk", asyncWrapper(bulkCreate));

export default router;
