import express from "express";
import {
  createReview,
  getReviewsByProduct,
  updateReview,
  deleteReview
} from "../Controllers/reveiw_controler.js";

const review_router = express.Router();

review_router.post("/", createReview);

review_router.get("/product/:productId", getReviewsByProduct);

review_router.put("/:id", updateReview);

review_router.delete("/:id", deleteReview);

export default review_router;
