import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardSidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Folder, Share2 } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stalker",
  description: "Hack your own phone easier",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider> 
            <SidebarProvider className="bg-sidebar">
            <DashboardSidebar />
            <div className="h-svh overflow-hidden  w-full">
                <div className=" overflow-hidden flex flex-col h-full w-full bg-background">
                    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-card sticky top-0 z-10 w-full shrink-0">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="-ml-2" />
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
        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
