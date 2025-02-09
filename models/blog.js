import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    type: { type: String, required: true },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

// ✅ Correctly export the model
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
