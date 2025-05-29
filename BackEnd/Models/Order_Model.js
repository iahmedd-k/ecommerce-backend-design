import mongoose, { model } from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending"
  },
  shippingAddress: String,
  paymentMethod: String,
  paid: { type: Boolean, default: false },
  deliveredAt: Date
}, { timestamps: true });

const Order_Model = model("Orderslist", orderSchema);
export default Order_Model;
