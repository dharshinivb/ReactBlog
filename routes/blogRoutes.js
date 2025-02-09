import express from "express";
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/blogs", getBlogs); // Read all blogs
router.get("/blogs/:id", getBlogById); // Read a single blog
router.post("/blogs", createBlog); // Create a new blog
router.put("/blogs/:id", updateBlog); // Update a blog
router.delete("/blogs/:id", deleteBlog); // Delete a blog

export default router;
