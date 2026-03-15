"use client";

import Link from "next/link";
import {
  Search,
  Sparkles,
  LayoutGrid,
  Bell,
  LayoutDashboard,
  Inbox,
  FolderKanban,
  Calendar,
  BarChart3,
  HelpCircle,
  Settings,
  ChevronDown,
  Plus,
  LogOut,
  Smartphone,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, isActive: true, },
  { title: "Connect", icon: Smartphone, },
  { title: "Notification", icon: Bell, },

  { title: "Reports", icon: BarChart3, },
  { title: "Help & Center", icon: HelpCircle, },
  { title: "Settings", icon: Settings, },
];

export function DashboardSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" className="border-r-0!" {...props}>
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center justify-between w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none w-full justify-start cursor-pointer">
              <Avatar className="size-8 border-2 border-sidebar shrink-0">
                <AvatarImage src="/ln.png" />
                <AvatarFallback>FW</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-sidebar-foreground truncate">
                Felix Warano
              </span>
              <ChevronDown className="size-3 text-muted-foreground shrink-0" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem className="cursor-pointer">
                <Plus className="size-4 mr-2" />
                Connect New Device
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 cursor-pointer">
                <LogOut className="size-4 mr-2 text-red-500" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className="h-9">
                    <Link href="#">
                      <item.icon className={cn("size-4 shrink-0",)} />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


    </Sidebar>
  );
}
