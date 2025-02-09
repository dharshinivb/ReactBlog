import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById, updateBlog } from "../utils/api"; // ✅ Import getBlogById

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState(''); // ✅ Changed "Author" to "author"
  const [type, setType] = useState('');

  // Load the blog data when the page loads
  useEffect(() => {
    const fetchBlog = async () => {
        try {
            const blog = await getBlogById(id);
            if (!blog) {
                navigate('/blogs'); // Redirect if blog not found
            } else {
                setTitle(blog.title);
                setDescription(blog.description);
                setContent(blog.content);
                setAuthor(blog.author); // ✅ Fixes "Author" to "author"
                setType(blog.type);
            }
        } catch (error) {
            console.error("Error fetching blog:", error);
            navigate('/blogs'); // Redirect if blog not found
        }
    };
    fetchBlog();
}, [id, navigate]);

  // Handle form submission (update blog)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await updateBlog(id, { title, description, content, author, type }); // ✅ Fixes "Author" to "author"
        alert("Blog Updated!");
        navigate(`/blogs/${id}`); // ✅ Redirect to updated blog
    } catch (error) {
        console.error("Error updating blog:", error);
        alert("Failed to update blog. Please try again.");
    }
  };

  return (
    <section className="py-10 px-4 bg-blue-50">
      <div className="container-xl mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">Edit Blog</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              value={author} // ✅ Changed "Author" to "author"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-lg">
            Update Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditBlogPage;
