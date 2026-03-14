"use client";
import { useState } from "react";
import ConnectPhoneNumber from "./ConnectPhoneNumber";
import ConnectQr from "./ConnectQr";
export type Mode = "qr" | "phone";

export default function ConnectDevice() {
    const [mode, setMode] = useState<Mode>("qr");
    return mode == "phone" ? <ConnectPhoneNumber setMode={setMode} /> : <ConnectQr setMode={setMode} />
}