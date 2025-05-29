import Review_Model from "../Models/Reveiw_Model.js";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    if (!user || !product || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReview = await Review_Model.create({
      user,
      product,
      rating,
      comment,
    });

    return res.status(201).json({
      message: "Review created successfully",
      review: newReview,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create review", error: error.message });
  }
};

// Get all reviews for a product
export const getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review_Model.find({ product: productId }).populate("user", "FirstName LastName");

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch reviews", error: error.message });
  }
};

// Update a review by ID
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedReview = await Review_Model.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    return res.status(200).json({
      message: "Review updated successfully",
      review: updatedReview,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update review", error: error.message });
  }
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review_Model.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    return res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete review", error: error.message });
  }
};
