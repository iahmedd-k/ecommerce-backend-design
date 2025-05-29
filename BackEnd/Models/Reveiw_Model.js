import mongoose, { model } from "mongoose";

const reviewSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User_Model", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product_Model", required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: String
}, { timestamps: true });


const Review_Model = model("Review", reviewSchema);
export default Review_Model ;
