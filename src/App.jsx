import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
	const router = createBrowserRouter([
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/",
			element: <Dashboard />,
		},
		// {
		// 	path: "/dashboard",
		// 	element: <Dashboard />,
		// },
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
