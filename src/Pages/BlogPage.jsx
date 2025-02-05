import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogsFromLocalStorage, saveBlogsToLocalStorage } from '../utils/localstorage';

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  // Use state to track views and likes
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const blogs = getBlogsFromLocalStorage();
    const blogData = blogs.find(blog => blog.id === parseInt(id));
    
    if (blogData) {
      setBlog(blogData);
      setLikes(blogData.likes);  // Set initial like count from blog data
      handleView();  // Update views count
    } else {
      navigate('/blogs');  // If the blog is not found, redirect to the blogs page
    }
  }, [id, navigate]);

  // Function to update view count
  const handleView = () => {
    const blogs = getBlogsFromLocalStorage();
    const updatedBlogs = blogs.map(blog =>
      blog.id === parseInt(id) ? { ...blog, views: blog.views + 1 } : blog
    );
    saveBlogsToLocalStorage(updatedBlogs); // Save updated blogs with increased view count
  };

  // Function to handle like button click
  const handleLike = () => {
    const blogs = getBlogsFromLocalStorage();
    const updatedBlogs = blogs.map(blog =>
      blog.id === parseInt(id) ? { ...blog, likes: blog.likes + 1 } : blog
    );
    saveBlogsToLocalStorage(updatedBlogs); // Save updated blogs with increased like count
    setLikes(likes + 1); // Update local like count for rendering
  };

  // Function to handle blog deletion
  const handleDelete = () => {
    const blogs = getBlogsFromLocalStorage();
    const filteredBlogs = blogs.filter(blog => blog.id !== parseInt(id));
    saveBlogsToLocalStorage(filteredBlogs);
    navigate('/blogs'); // Redirect to blogs page after deletion
  };

  // If the blog is not found, show nothing (or redirect to blogs page)
  if (!blog) return null;

  return (
    <section className="py-10 px-4 bg-blue-50">
      <div className="container-xl mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">{blog.title}</h2>
        <p className="mb-4 text-gray-600">{blog.Author} | {blog.type}</p>
        <p>{blog.content}</p>
        <div className="flex justify-between mt-6">
          <div>
            {/* Display likes outside the button */}
            <span className="text-sm text-gray-500">Likes: {likes}</span>
            <span className="ml-4 text-sm text-gray-500">Views: {blog.views}</span>
          </div>
          <div>
            {/* Like button */}
            <button
              className="text-indigo-500 hover:text-indigo-600"
              onClick={handleLike}
            >
              Like
            </button>
            {/* Edit and Delete buttons */}
            <button
              className="ml-4 text-indigo-500 hover:text-indigo-600"
              onClick={() => navigate(`/edit-blog/${blog.id}`)}
            >
              Edit
            </button>
            <button
              className="ml-4 text-red-500 hover:text-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
