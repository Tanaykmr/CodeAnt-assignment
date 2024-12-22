import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login/login";



function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
