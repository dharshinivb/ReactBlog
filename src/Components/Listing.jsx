import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteBlog } from "../utils/api";

const Listing = ({ blog, onDelete }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let des = blog.description;
  if (!showFullDescription) {
    des = des.substring(0, 90) + "...";
  }

  const handleDelete = async () => {
    try {
      await deleteBlog(blog._id);
      alert("Blog Deleted!");
      onDelete(blog._id);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{blog.type}</div>
        <h3 className="text-xl font-bold">{blog.title}</h3>
      </div>

      {/* Fix: Prevent description overflow */}
      <div className={`mb-5 text-gray-700 break-words ${showFullDescription ? "" : "truncate overflow-hidden"}`}>
        {des}
      </div>

      <button
        onClick={() => setShowFullDescription((prev) => !prev)}
        className="text-indigo-500 mb-5 hover:text-indigo-600"
      >
        {showFullDescription ? "Less" : "More"}
      </button>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex justify-between">
        <div className="text-orange-700">
          <i className="fa-solid fa-user text-lg"></i> {blog.author}
        </div>
        <div className="flex gap-3">
          <Link
            to={`/blogs/${blog._id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Read More
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
