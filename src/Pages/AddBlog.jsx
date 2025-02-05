import React, { useState } from 'react';
import { saveBlogsToLocalStorage, getBlogsFromLocalStorage } from '../utils/localstorage';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [Author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: new Date().getTime(), // unique ID based on timestamp
      title,
      description,
      content,
      Author,
      type,
      likes: 0, // Initialize likes to 0
      views: 0, // Initialize views to 0
    };

    const blogs = getBlogsFromLocalStorage();
    blogs.push(newBlog);
    saveBlogsToLocalStorage(blogs);

    // Set the alert message
    setAlertMessage('Blog has been successfully added!');

    // Reset form
    setTitle('');
    setDescription('');
    setContent('');
    setAuthor('');
    setType('');

    // Hide the alert message after 3 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  return (
    <section className="py-10 px-4 bg-blue-50">
      <div className="container-xl mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">Add a New Blog</h2>

        {/* Alert message */}
        {alertMessage && (
          <div className="mb-4 text-white bg-green-500 p-3 rounded-lg">
            {alertMessage}
          </div>
        )}

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
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full h-48" // Set a larger height for the content box
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
            Add Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
