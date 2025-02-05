import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Main from './layouts/Main';
import BlogsPage from './Pages/BlogsPage';
import NotFound from './Pages/NotFound';
import BlogPage from './Pages/BlogPage';
import EditBlogPage from './Pages/EditBlogPage';
import AddBlog from './Pages/AddBlog'; // Add the EditBlogPage import

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
      <Route path="/edit-blog/:id" element={<EditBlogPage />} /> 
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
