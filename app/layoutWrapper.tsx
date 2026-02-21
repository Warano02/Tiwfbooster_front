"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <div className="hidden md:block w-64 border-r border-border">
                <Sidebar />
            </div>

            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetContent
                    side="left"
                    className="w-64 p-0 border-none [&>button]:hidden"
                >
                    <Sidebar />
                </SheetContent>
            </Sheet>

            <div className="flex flex-1 flex-col overflow-hidden">
                <div className="flex md:hidden items-center justify-between border-b border-border px-4 h-14 bg-background z-20">
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <MenuIcon className="size-5" />
                    </Button>
                </div>

                <div className="hidden md:flex absolute top-4 right-4 gap-2 z-20">
                    <ThemeToggle />
                </div>

                <div className="flex-1 overflow-hidden relative">

                    <div className="relative z-10 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
