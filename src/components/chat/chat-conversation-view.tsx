"use client";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { useEffect, useRef } from "react";

interface Message {
    id: string;
    content: string;
    sender: "user" | "ai";
    timestamp: Date;
}

interface ChatConversationViewProps {
    messages: Message[];
    message: string;
    onMessageChange: (value: string) => void;
    onSend: (content: string) => void;
    onReset: () => void;
}

export function ChatConversationView({ messages, message, onMessageChange, onSend, onReset }: ChatConversationViewProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto scrollbar-hide px-4 md:px-8 py-8">
                <div className="max-w-2xl mx-auto space-y-6">
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                    <div ref={bottomRef} />
                </div>
            </div>

            <div className="px-4 md:px-8 pb-6 pt-2">
                <div className="max-w-2xl mx-auto flex flex-col gap-2">
                    <ChatInput
                        message={message}
                        onMessageChange={onMessageChange}
                        onSend={onSend}
                    />
                    <p className="text-center text-xs text-muted-foreground">
                        Stalker AI can make mistakes. Check important info.
                    </p>
                </div>
            </div>
        </div>
    );
}