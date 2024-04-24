import React from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer.jsx";
import Add from "./pages/add/Add.jsx";
import Gig from "./pages/gig/Gig.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Conversation from "./pages/conversation/Conversation.jsx";
import Message from "./pages/message/Message.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Register from "./pages/register/Register.jsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    const isLoginOrRegister =
      location.pathname === "/login" || location.pathname === "/register";

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {!isLoginOrRegister && <Navbar />}
          <Outlet />
          {!isLoginOrRegister && <Footer />}
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/conversation",
          element: <Conversation />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
