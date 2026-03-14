import { DashboardSidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Folder, Share2 } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider className="bg-sidebar">
            <DashboardSidebar />
            <div className="h-svh overflow-hidden lg:p-2 w-full">
                <div className="lg:border lg:rounded-md overflow-hidden flex flex-col h-full w-full bg-background">
                    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-card sticky top-0 z-10 w-full shrink-0">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="-ml-2" />
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Folder className="size-4" />
                                <span className="text-sm font-medium">Dashboard</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <Button variant="outline" size="sm" className="h-8 gap-1.5">
                                <Share2 className="size-3.5" />
                                <span className="hidden sm:inline cursor-pointer">Invite friends</span>
                            </Button>
                            <ThemeToggle />

                        </div>
                    </header>
                    <main className="w-full flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout