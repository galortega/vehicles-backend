import { check } from "express-validator";

export const checkCreate = [
  check("plate", "Plate is required").not().isEmpty(),
  check("model", "Model is required").not().isEmpty(),
  check("type", "Type is required").not().isEmpty(),
  check("capacity", "Capacity is required").not().isEmpty(),
];
