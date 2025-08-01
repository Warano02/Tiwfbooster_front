import AppleLogin from "./apple/AppleLogin"
import GoogleLogin from "./google/GoogleLogin"

function AuthLogin() {
    return (
        <>
            <AppleLogin />
            <GoogleLogin />
        </>
    )
}

export default AuthLogin
