import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from './components/PublicLayout'
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Article from "./components/Article.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      { path: "/", element: <Home/>, name: "Home" },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/about", element: <About /> },
      { path: "/article", element: <Article /> },
    ]
  }
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}