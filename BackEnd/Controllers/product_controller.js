
import Category_Model from "../Models/Category_Model.js";
import Product_Model from "../Models/Product_Model.js";

export const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      stock,
      category,
      images 
    } = req.body;

    if (!title || !price || !category) {
      return res.status(400).json({ message: "Title, price, and category are required" });
    }

    // Optional: verify category exists
    const existingCategory = await Category_Model.findById(category);
    if (!existingCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    const newProduct = await Product_Model.create({
      title,
      description,
      price,
      stock,
      category,
      images
    });

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct
    });

  } catch (error) {
    return res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product_Model.find().populate("category").populate("reviews");
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product_Model.findById(id).populate("category").populate("reviews");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });

  } catch (error) {
    return res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};


// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
};