// src/utils/localStorage.js

export const getBlogsFromLocalStorage = () => {
    const blogs = localStorage.getItem('blogs');
    return blogs ? JSON.parse(blogs) : [];
  };
  
  export const saveBlogsToLocalStorage = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  };
  