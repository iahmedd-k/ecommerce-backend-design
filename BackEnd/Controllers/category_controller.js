import Category_Model from "../Models/Category_Model.js";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const existingCategory = await Category_Model.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({ message: "Category already exists" });
    }

    const newCategory = await Category_Model.create({ name, description });

    return res.status(201).json({
      message: "Category created successfully",
      category: newCategory
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create category", error: error.message });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category_Model.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch categories", error: error.message });
  }
};

// Get a single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category_Model.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch category", error: error.message });
  }
};

// Update a category by ID
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCategory = await Category_Model.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update category", error: error.message });
  }
};

// Delete a category by ID
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category_Model.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: "Category deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete category", error: error.message });
  }
};
