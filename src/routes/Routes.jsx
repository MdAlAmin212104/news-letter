import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";




export const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: "/",
                        element: <Home />,
                        loader: () => fetch('news.json'),
                  },
                  {
                        path: "/news/:id",
                        element: <News/>
                  },
                  {
                        path: '/login',
                        element: <Login/>,
                  },
                  {
                        path: '/register',
                        element: <Register/>
                  },
                  
            ]
      }
])