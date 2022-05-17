import express from "express";
import {
  bulkCreate,
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/vehicles";
import {
  allowedMethods,
  asyncWrapper,
  checkParameters,
} from "../utils/wrappers";
import { checkCreate } from "../validations/vehicle";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET vehicles listing */
router.get("/", asyncWrapper(getAll));

/* POST new vehicle */
router.post("/", checkParameters(checkCreate), asyncWrapper(create));

router.use("/bulk$", allowedMethods(["POST"]));

/* POST new vehicle */
router.post("/bulk", asyncWrapper(bulkCreate));

router.use("/:id$", allowedMethods(["GET", "PUT", "DELETE"]));

/* GET vehicle by id */
router.get("/:id", asyncWrapper(getById));

/* PUT vehicle by id */
router.put("/:id", asyncWrapper(update));

/* DELETE vehicle by id */
router.delete("/:id", asyncWrapper(remove));

export default router;
