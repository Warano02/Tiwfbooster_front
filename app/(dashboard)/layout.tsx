import { Sidebar } from "@/components/Sidebar";

export const metadata = {
    title: "Dashboard - Tayc Bot",
    description: "Dashboard for managing your Tayc Bot instance, including settings, commands, and more.",
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <div className="hidden md:block w-64 border-r border-border">
                <Sidebar />
            </div>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </div>
    );
}
