import { useState } from "react"

function Subscribe1() {
    const [email,setEmail]=useState("")
    const handleSubmit=async (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" required/>
            <button className="bg-blue-600 w-24 h-9 text-white rounded cursor-pointer" type="submit">Subscribe</button>
        </form>
    )
}

export default Subscribe1
