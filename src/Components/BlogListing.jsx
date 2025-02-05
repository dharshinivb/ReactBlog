import React from 'react';
import { Link } from 'react-router-dom';
import Listing from './Listing';
import { getBlogsFromLocalStorage } from '../utils/localstorage';

const BlogListing = ({ isHome = false }) => {
  const blogs = getBlogsFromLocalStorage();
  const blogListings = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Blogs' : 'Browse Blogs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogListings.map((blog) => (
            <Listing key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
