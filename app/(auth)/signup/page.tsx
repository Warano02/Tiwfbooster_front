import SignupForm from '@/components/auth/SignupForm'

export const metadata = {
  title: "Sign up - Tayc Bot",
  description: "Create an account to start using Tayc Bot and experience the power of the WhatsApp Bot.",
}

function Signup() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-full hidden md:inline-block">
        <img className="h-full" src="/leftSideImage.png" alt="leftSideImage" />
      </div>
      
       <div className="w-full flex flex-col items-center justify-center">
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup