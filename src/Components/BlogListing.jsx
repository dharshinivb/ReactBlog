import React, { useEffect, useState } from "react";
import Listing from "./Listing";
import { getBlogs } from "../utils/api";

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Try again.");
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Blogs</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Listing key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
