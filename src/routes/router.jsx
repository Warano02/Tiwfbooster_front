import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public.routes";
// import { accountRoutes } from "./account.routes";
import { authRoutes } from "./auth.routes";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    ...publicRoutes,
    authRoutes,
    // ...accountRoutes,
    {
        path: "*",
        element: <NotFound />,
    },
]);
