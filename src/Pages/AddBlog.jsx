import React, { useState } from 'react';
import { addBlog } from "../utils/api";

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, description, content, author, type };

    try {
      const response = await addBlog(newBlog);
      if (response) {
        setAlertMessage("Blog has been successfully added!");
        setTitle(''); setDescription(''); setContent(''); setAuthor(''); setType('');
        setTimeout(() => setAlertMessage(''), 3000);
      } else {
        setAlertMessage("Failed to add blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Error adding blog.");
    }
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

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
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
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full h-48"
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
              value={author}
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

          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
          >
            Add Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
