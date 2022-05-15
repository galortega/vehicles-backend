import express from "express";
import { getAll } from "../controllers/vehicle";
import { allowedMethods, asyncWrapper } from "../utils/wrappers";
const router = express.Router();

router.use("/$", allowedMethods(["GET", "POST"]));

/* GET vehicles listing. */
router.get("/", asyncWrapper(getAll));

/* POST new vehicle. */
router.post("/", asyncWrapper(getAll));

router.use("/:id$", allowedMethods(["PUT", "DELETE"]));

/* PUT vehicle by id. */
router.put("/:id", asyncWrapper(getAll));

/* DELETE vehicle by id. */
router.delete("/:id", asyncWrapper(getAll));

export default router;
