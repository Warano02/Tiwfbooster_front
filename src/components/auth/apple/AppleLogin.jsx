import { assets } from '../../../assets/assets'

function AppleLogin() {
    return (
        <button type="button" className="cursor-pointer w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
            <img className="h-4 w-4" src={assets.icon.appleLogo} alt="appleLogo" />
            Log in with Apple
        </button>
    )
}

export default AppleLogin
