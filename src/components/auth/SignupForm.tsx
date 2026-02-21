import Link from "next/link"
import GoogleAuth from "./GoogleAuth"
import { Lock, Mail, User, UserLock } from "lucide-react"

function SignupForm() {
    return (
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-gray-900 font-medium">Sign Up</h2>
            <p className="text-sm text-gray-500/90 mt-3">Welcome To Tayc Bot! </p>
            <GoogleAuth todo="signup" />

            <div className="flex items-center gap-4 w-full my-5">
                <div className="w-full h-px bg-gray-300/90"></div>
                <p className="w-full text-nowrap text-sm text-gray-500/90">or sign up with email</p>
                <div className="w-full h-px bg-gray-300/90"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <User />
                <input type="text"  placeholder="Full Name" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <Mail />
                <input type="email" placeholder="Email id" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <Lock />
                <input type="password" placeholder="Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <UserLock />
                <input type="password" placeholder="Confirm Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                <div className="flex items-center gap-2">
                    <input className="h-5" type="checkbox" id="checkbox" />
                    <label className="text-sm" htmlFor="checkbox">
                        <Link className="text-sm hover:underline" href="#">I agree to the Terms of Service and Privacy Policy</Link>
                    </label>
                </div>

            </div>

            <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-primary cursor-pointer hover:opacity-90 transition-opacity">
                Sign Up
            </button>
            <p className="text-gray-500/90 text-sm mt-4">Already have an account? <Link className="text-primary hover:underline" href="/login">Log in</Link></p>
        </form>
    )
}

export default SignupForm