
function GoogleAuth({ todo}: { todo: "login" | "signup" }) {
    return (
        <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full cursor-pointer">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
        </button>
    )
}

export default GoogleAuth