import { Outlet, useLocation } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import { useEffect } from "react";
import Header from "../components/auth/Header";

function Auth() {
    // const navigate = useNavigate()
    // const { user } = useAppContext()
    // useEffect(() => {
    //     if (user) {
    //         alert("User is login")
    //         navigate("/")
    //     } else {
    //         alert("You Can Login")
    //     }
    // })
    const location = useLocation()

    return (
        <>
            {location.pathname !== "/auth/" && <Header />}
            <div className="w-full h-full">
                <Outlet />
            </div>
        </>
    )
}

export default Auth
