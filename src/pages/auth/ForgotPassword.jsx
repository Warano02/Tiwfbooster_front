import { Link } from "react-router-dom"
import Footer1 from "../../components/Footer1"

function ForgotPassword() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[95vh]">
        <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Forget Password?</h2>
          <label htmlFor="email">Email</label>
          <input id="email" className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4" type="email" placeholder="Enter your email" />
          <button type="button" className="w-full my-3 cursor-pointer bg-gray-800 active:scale-95 transition py-2.5 rounded text-white">Send Email</button>
          <p className="text-center mt-4">Don’t have an account? <Link to={"/auth/signup"} className="text-blue-500 underline">Signup Now</Link></p>
        </div>
      </div>
      <Footer1 />
    </>
  )
}

export default ForgotPassword
