import express from "express";
import { getAll, bulkCreateByCompanyId } from "../controllers/drivers";
import { allowedMethods, asyncWrapper } from "../utils/wrappers";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET drivers listing */
router.get("/", asyncWrapper(getAll));

router.use("/bulk$", allowedMethods(["POST"]));

/* POST bulk companies */
router.post("/bulk", asyncWrapper(bulkCreateByCompanyId));

export default router;
