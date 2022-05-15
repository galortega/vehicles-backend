import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/vehicle";
import { allowedMethods, asyncWrapper } from "../utils/wrappers";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET vehicles listing. */
router.get("/", asyncWrapper(getAll));

/* POST new vehicle. */
router.post("/", asyncWrapper(create));

router.use("/:id$", allowedMethods(["GET", "PUT", "DELETE"]));

/* GET vehicle by id. */
router.get("/:id", asyncWrapper(getById));

/* PUT vehicle by id. */
router.put("/:id", asyncWrapper(update));

/* DELETE vehicle by id. */
router.delete("/:id", asyncWrapper(remove));

export default router;
