import { assets } from '../../../assets/assets'

function GoogleLogin() {
    return (
        <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full cursor-pointer">
            <img src={assets.icon.googleLogo} alt="googleLogo" />
        </button>
    )
}

export default GoogleLogin
