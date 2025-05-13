import { Outlet } from "react-router-dom";

function Auth() {
    return (
        <>
            <div className="w-full h-full bg-gray-100">
                <Outlet />
            </div>
        </>
    )
}

export default Auth
