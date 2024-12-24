import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
    	path: "/dashboard",
    	element: <Dashboard />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
