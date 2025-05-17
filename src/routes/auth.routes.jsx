import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Auth from "../Layout/Auth";
import OTP from "../pages/auth/OTP";

export const authRoutes = {
    path: "/auth",
    element: <Auth />,
    children: [
        {
            index: true,
            element: <Login />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path: "forgot-password",
            element: <ForgotPassword />,
        },
        {
            path: "forgot-password-otp",
            element: <OTP />,
        },
    ],
};
