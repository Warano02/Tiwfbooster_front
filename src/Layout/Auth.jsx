import { Outlet } from "react-router-dom";

function Auth() {
    return (
        <>
            <div className="w-full h-16 bg-white mb-1">

            </div>
            <div className="w-full h-full flex flex-col items-center justify-center  bg-gray-100">
                <Outlet />
            </div>
        </>
    )
}

export default Auth
