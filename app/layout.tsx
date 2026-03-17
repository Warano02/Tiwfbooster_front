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
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
  description: "Hack a phone easier way as possible !",
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="h-8 gap-1.5">
                            <Share2 className="size-3.5" />
                            <span className="hidden sm:inline cursor-pointer">Invite friends</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Share your link</DialogTitle>
                            <DialogDescription>
                              For each person who signs up using your link, you earn an extra 15 coins.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center gap-2">
                            <div className="grid flex-1 gap-2">
                              <Label htmlFor="link" className="sr-only">
                                Link
                              </Label>
                              <Input
                                id="link"
                                defaultValue="https://stalker.com/jkioe"
                                readOnly
                              />
                            </div>
                          </div>
                          <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                              <Button type="button">Close</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
