"use client";

import { useState } from "react";
import {
  SearchIcon,
  HomeIcon,
  SparklesIcon,
  FileStackIcon,
  Layers3Icon,
  FolderClosedIcon,
  ZapIcon,
  MessageCircleDashedIcon,
  WandSparklesIcon,
  BoxIcon,
  ChevronDownIcon,
  UsersIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CheckIcon,
  MoreVerticalIcon,
  Share2Icon,
  PencilIcon,
  ArchiveIcon,
  ArchiveRestoreIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/ui/logo";
import { useChatStore } from "@/store/chat-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const iconMap = {
  zap: ZapIcon,
  "message-circle-dashed": MessageCircleDashedIcon,
  "wand-sparkles": WandSparklesIcon,
  box: BoxIcon,
};

const teams = [
  { id: "personal", name: "Personal", icon: UsersIcon },
  { id: "work", name: "Work Team", icon: BriefcaseIcon },
  { id: "education", name: "Education", icon: GraduationCapIcon },
];

export function ChatSidebar() {
  const {
    chats,
    selectedChatId,
    selectChat,
    archiveChat,
    unarchiveChat,
    deleteChat,
  } = useChatStore();
  const [selectedTeam, setSelectedTeam] = useState("personal");

  
  return (
    <div className="flex h-full w-full flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center justify-between p-3 border-b border-sidebar-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2.5 px-2 h-10"
            >
             
              <span className="font-semibold text-sm">Felix Warano</span>
              <div className="ml-auto flex items-center gap-1.5">
                <Image
                  src="/ln.png"
                  alt="lndev.me"
                  className="size-5 object-cover rounded-full"
                  width={20}
                  height={20}
                />
                <ChevronDownIcon className="size-3" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-64">
            <DropdownMenuItem className="gap-2">
              <button>Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      <div className="p-3 space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <HomeIcon className="size-4" />
          <span className="text-sm">Home</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <SparklesIcon className="size-4" />
          <span className="text-sm">Ask AI</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <FileStackIcon className="size-4" />
          <span className="text-sm">Prompt Library</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <Layers3Icon className="size-4" />
          <span className="text-sm">Extension</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <FolderClosedIcon className="size-4" />
          <span className="text-sm">Folders</span>
        </Button>
      </div>

    
     

    </div>
  );
}
