"use client"

import { useEffect, useRef, useState } from "react";
import { Mode } from "./Connect";
type Status = "waiting" | "detected" | "connected";


function ConnectQr({ setMode }: { setMode: (m: Mode) => void }) {
    const [status, setStatus] = useState<Status>("waiting");
    const [success, setSuccess] = useState(false);

    const [timeLeft, setTimeLeft] = useState(60);
    const [expired, setExpired] = useState(false);
    const [token, setToken] = useState();

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const newToken = () => alert("okay bro")

    // useEffect(() => {
    //     timerRef.current = setInterval(() => {
    //         setTimeLeft((t) => {
    //             if (t <= 1) { setExpired(true); clearInterval(timerRef.current!); return 0; }
    //             return t - 1;
    //         });
    //     }, 1000);
    //     return () => clearInterval(timerRef.current!);
    // }, [token, expired,]);

    // useEffect(() => {
    //     const t = setTimeout(() => {
    //         setStatus("detected");
    //         setTimeout(() => { setStatus("connected"); setTimeout(() => setSuccess(true), 800); }, 1500);
    //     }, 5000);
    //     return () => clearTimeout(t);
    // }, [token, expired]);


    return (
        <main className="min-h-full bg-background  flex items-center justify-center p-6">
            <div className="flex gap-20 items-center max-w-3xl w-full">
                <div className="flex-1 min-w-0">
                    <h1 className="text-[32px] font-light text-[#111b21] dark:text-[#e9edef] mb-8 leading-tight">Scan to connect the bot</h1>
                    <ol className="flex flex-col gap-5 mb-6">
                        {[
                            "Open WhatsApp on your phone",
                            <span key="2">Tap <strong className="font-semibold">Menu</strong> or <strong className="font-semibold">Settings</strong> and select <strong className="font-semibold">Linked devices</strong></span>,
                            <span key="3">Tap on <strong className="font-semibold">Link a device</strong></span>,
                            "Point your phone at this screen to capture the QR code",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="size-6 rounded-full border border-[#667781] dark:border-[#8696a0] flex items-center justify-center text-xs text-[#667781] dark:text-[#8696a0] shrink-0 mt-0.5">{i + 1}</span>
                                <p className="text-sm text-[#111b21] dark:text-[#e9edef] leading-relaxed">{text}</p>
                            </li>
                        ))}
                    </ol>
                    <a href="#" className="inline-flex items-center gap-1 text-sm text-[#111b21] dark:text-[#e9edef] border-b border-[#111b21] dark:border-[#e9edef] hover:text-[#25d366] hover:border-[#25d366] transition-colors pb-0.5 mb-6">
                        Need help? ↗
                    </a>
                    <div className="border-t border-[#e9edef] dark:border-[#2a3942] pt-5 flex items-center justify-between">

                        <button onClick={() => setMode("phone")} className="text-sm text-[#667781] dark:text-[#8696a0] hover:text-[#25d366] transition-colors flex items-center gap-1">
                            Log in with phone number <span>›</span>
                        </button>
                    </div>
                </div>
                <div className="shrink-0 flex flex-col items-center gap-4">
                    <div className="relative size-56 bg-white rounded-2xl border border-[#e9edef] dark:border-[#2a3942] flex items-center justify-center overflow-hidden p-3">
                        {!expired ? (
                            <img src={`/api/qr?token=${token}`} alt="QR Code" width={200} height={200} className="rounded" />
                        ) : (
                            <div onClick={newToken} className="absolute inset-0 bg-white/95 dark:bg-[rgba(17,27,33,0.95)] flex flex-col items-center justify-center gap-3 cursor-pointer rounded-2xl">
                                <div className="size-12 rounded-full bg-[#25d366] flex items-center justify-center text-xl text-white font-bold">↻</div>
                                <p className="text-xs text-[#667781] dark:text-[#8696a0] text-center leading-snug">QR code expired<br />Click to refresh</p>
                            </div>
                        )}
                    </div>
                    {!expired && (
                        <div className="flex items-center gap-2 text-xs text-[#667781] dark:text-[#8696a0]">
                            <span className="size-1.5 rounded-full bg-[#25d366] animate-pulse" />
                            {status === "detected" && "Device detected…"}
                            {status === "connected" && "Connected ✓"}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ConnectQr