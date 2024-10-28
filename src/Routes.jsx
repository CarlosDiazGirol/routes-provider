import { createBrowserRouter } from "react-router-dom";
import Header from "./templates/Header";
import HeaderLogin from "./templates/HeaderLogin";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ErrorTemplate from "./templates/404";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorTemplate />,
      element: <Header />,
      children: [
        {path:'/', element:<Home />},
        {path:'/projects', element:<Projects />},
        {path:'/resume', element:<Resume />}
      ]
    },
    {
      path: "/dashboard",
      element: <HeaderLogin />,
      children: [
        {path:'/dashboard', element:<Home />},
        {path:'/dashboard/projects', element:<Projects />},
        {path:'/dashboard/resume', element:<Resume />}
      ]
    }
  ]
)

export default router