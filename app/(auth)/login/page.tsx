import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
    title: "Login - Tayc Bot",
    description: "Login to your Tayc Bot account to access your personalized AI chat experience. Enter your credentials or use Google authentication to sign in securely.",
}

export default function Login() {
    return (
        <div className="flex h-screen w-full">
            <div className="w-full hidden md:inline-block">
                <img className="h-full" src="/leftSideImage.png" alt="leftSideImage" />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <LoginForm />
            </div>
        </div>
    );
};