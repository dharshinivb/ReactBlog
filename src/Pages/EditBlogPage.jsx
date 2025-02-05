import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveBlogsToLocalStorage, getBlogsFromLocalStorage } from '../utils/localstorage';

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [Author, setAuthor] = useState('');
  const [type, setType] = useState('');
  
  // Load the blog data when the page loads
  useEffect(() => {
    const blogs = getBlogsFromLocalStorage();
    const blogToEdit = blogs.find(blog => blog.id === parseInt(id));

    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
      setContent(blogToEdit.content);
      setAuthor(blogToEdit.Author);
      setType(blogToEdit.type);
    } else {
      navigate('/blogs'); // If the blog is not found, redirect to blogs page
    }
  }, [id, navigate]);

  // Handle form submission (update blog)
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      id: parseInt(id),
      title,
      description,
      content,
      Author,
      type,
      likes: 0, // Leave likes as-is for now, or fetch from localStorage
      views: 0, // Leave views as-is for now, or fetch from localStorage
    };

    // Get existing blogs from localStorage
    const blogs = getBlogsFromLocalStorage();
    const updatedBlogs = blogs.map(blog =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );

    // Save the updated blogs to localStorage
    saveBlogsToLocalStorage(updatedBlogs);

    // Redirect to the updated blog page
    navigate(`/blogs/${updatedBlog.id}`);
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
              value={Author}
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
