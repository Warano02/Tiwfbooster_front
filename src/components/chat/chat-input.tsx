"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperclipIcon, ArrowUpIcon } from "lucide-react";

interface ChatInputProps {
    message: string;
    onMessageChange: (value: string) => void;
    onSend: (content: string) => void;
}

export function ChatInput({ message, onMessageChange, onSend }: ChatInputProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const canSend = message.trim().length > 0;

    useEffect(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    }, [message]);

    function handleSend() {
        if (!canSend) return;
        onSend(message);
    }

    return (
        <div className="rounded-3xl px-4  bg-card pt-3 pb-2">
            <Textarea ref={textareaRef} placeholder="Message Stalker AI..." value={message} onChange={(e) => onMessageChange(e.target.value)} rows={1} className=" w-full min-h-15 max-h-48 resize-none overflow-y-auto border-0  bg-card placeholder: p-0 text-base leading-7 placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
            />
            <div className="flex items-center justify-between mt-2">
                <Button variant="ghost" size="icon" className="size-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted">
                    <PaperclipIcon className="size-4" />
                </Button>
                <Button
                    size="icon"
                    disabled={!canSend}
                    onClick={handleSend}
                    className="size-8 rounded-full disabled:opacity-30 transition-opacity"
                >
                    <ArrowUpIcon className="size-4" />
                </Button>
            </div>
        </div>
    );
}