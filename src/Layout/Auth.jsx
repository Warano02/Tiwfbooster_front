import { Outlet } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import { useEffect } from "react";
function Auth() {
 
    return (
        <>
            <div className="w-full h-full">
                <Outlet />
            </div>
        </>
    )
}

export default Auth
