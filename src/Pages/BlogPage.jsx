import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById, updateBlog, deleteBlog } from "../utils/api"; // ✅ Import API functions

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);

  // Fetch blog from MongoDB
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        if (!blogData) {
          navigate('/blogs'); // Redirect if blog not found
        } else {
          setBlog(blogData);
          setLikes(blogData.likes || 0);
          handleView(blogData.views);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        navigate('/blogs');
      }
    };

    fetchBlog();
  }, [id, navigate]);

  // Function to update view count in MongoDB
  const handleView = async (currentViews) => {
    try {
      await updateBlog(id, { views: currentViews + 1 }); // ✅ Update views in database
      setBlog((prev) => ({ ...prev, views: currentViews + 1 }));
    } catch (error) {
      console.error("Error updating views:", error);
    }
  };

  // Function to handle like button click
  const handleLike = async () => {
    try {
      await updateBlog(id, { likes: likes + 1 }); // ✅ Update likes in database
      setLikes(likes + 1);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Function to handle blog deletion
  const handleDelete = async () => {
    try {
      await deleteBlog(id); // ✅ Delete from database
      navigate('/blogs'); // Redirect after deletion
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (!blog) return <p>Loading...</p>; // ✅ Show loading state while fetching data

  return (
    <section className="py-10 px-4 bg-blue-50">
      <div className="container-xl mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">{blog.title}</h2>
        <p className="mb-4 text-gray-600">{blog.author} | {blog.type}</p> {/* ✅ Fix "Author" to "author" */}
        <p>{blog.content}</p>
        <div className="flex justify-between mt-6">
          <div>
            <span className="text-sm text-gray-500">Likes: {likes}</span>
            <span className="ml-4 text-sm text-gray-500">Views: {blog.views}</span>
          </div>
          <div>
            <button className="text-indigo-500 hover:text-indigo-600" onClick={handleLike}>
              Like
            </button>
            <button className="ml-4 text-indigo-500 hover:text-indigo-600" onClick={() => navigate(`/edit-blog/${id}`)}>
              Edit
            </button>
            <button className="ml-4 text-red-500 hover:text-red-600" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
