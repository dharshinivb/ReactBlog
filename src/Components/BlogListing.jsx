import React from 'react';
import blogs from '../blogs.json';
import Listing from './Listing';

const BlogListing = () => {
  const recentBlogs= blogs.slice(0,3);
  return (
    <>
    
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs.map((blog)=>(
            <Listing key={blog.id} blog={blog}/>
          ))}
               </div>
        </div>
    </section>

    </>
  )
}

export default BlogListing