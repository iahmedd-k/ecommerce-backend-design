import mongoose , {model} from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String
}, { timestamps: true });
const Category_Model = model("Category", categorySchema);
export default Category_Model; 
