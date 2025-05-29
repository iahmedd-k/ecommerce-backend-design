import mongoose, {model} from "mongoose";


const product_schema = new mongoose.Schema(

    {

        title: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        stock: { type: Number, default: 0 },
 category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"


    },
    rating: {
        type: Number,
        default: 0
    },
Reveiws: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reveiw"
}


    },
{
    timestamps: true
}
)

const Product_Model = model("ProductsList", product_schema);
export default Product_Model