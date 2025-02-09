const API_URL = "http://localhost:5000/api"; // Fixed API URL

// Fetch all blogs
export const getBlogs = async () => {
    const res = await fetch(`${API_URL}/blogs`);
    return res.json();
};

// Fetch single blog by ID
export const getBlogById = async (id) => { //  Fix: Add `id` parameter
    const res = await fetch(`${API_URL}/blogs/${id}`);
    return res.json();
};

// Add a new blog
export const addBlog = async (blogData) => {
    const res = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData)
    });
    return res.json();
};

// Update a blog
export const updateBlog = async (id, blogData) => {
    const res = await fetch(`${API_URL}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData)
    });
    return res.json();
};

// Delete a blog
export const deleteBlog = async (id) => {
    await fetch(`${API_URL}/blogs/${id}`, { method: "DELETE" });
};
