import { Outlet } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

function Auth() {
    // console.log(useAppContext());

    // const { user } = useAppContext()
    // if (user) {
    //     alert("User is login")
    // } else {
    //     alert("You Can Login")
    // }
    return (
        <>
            <div className="w-full h-full">
                <Outlet />
            </div>
        </>
    )
}

export default Auth
