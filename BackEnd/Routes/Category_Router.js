import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../Controllers/category_controller.js";

const category_router = express.Router();


category_router.post("/", createCategory);

category_router.get("/", getAllCategories);


category_router.get("/:id", getCategoryById);


category_router.put("/:id", updateCategory);

category_router.delete("/:id", deleteCategory);

export default category_router;
