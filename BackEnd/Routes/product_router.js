import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../Controllers/product_controller.js";

const product_router = express.Router();

product_router.post("/", createProduct);
product_router.get("/", getAllProducts);
product_router.get("/:id", getProductById);
product_router.put("/products/:id", updateProduct);
product_router.delete("/products/:id", deleteProduct);

export default product_router;
