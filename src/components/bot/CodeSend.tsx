"use client";

type Mode = "qr" | "phone";

type Props = {
    phoneNumber: string;
    code: string;
    setMode: (mode: Mode) => void;
    resetNumber: () => void
};

function parseCode(code: string): string[] {
    return code.toUpperCase().split("");
}

function CodeSend({ phoneNumber, code, setMode, resetNumber }: Props) {
    const chars = parseCode(code);

    return (
        <main className=" bg-[#f0f2f5] dark:bg-[#111b21] flex items-center justify-center p-6">
            <div className="bg-white dark:bg-[#202c33] rounded-2xl border border-[#e9edef] dark:border-[#2a3942] w-full  p-6 flex flex-col gap-8">

                <div>
                    <h1 className="text-2xl font-semibold text-[#111b21] dark:text-[#e9edef] mb-1">
                        Enter code on phone
                    </h1>
                    <p className="text-sm text-[#667781] dark:text-[#8696a0]">
                        Linking WhatsApp account{" "}
                        <span className="font-semibold text-[#111b21] dark:text-[#e9edef]">
                            {phoneNumber}
                        </span>{" "}
                        (
                        <button onClick={() => resetNumber()} className="text-[#25d366] hover:underline cursor-pointer">
                            edit
                        </button>
                        )
                    </p>
                </div>

                <div className="bg-[#f0f2f5] dark:bg-[#111b21] rounded-xl py-6 flex justify-center">
                    <div className="flex items-center gap-2">
                        {chars.map((char, i) =>
                            <div key={i} className="flex gap-4">
                                <div className="w-11 h-13 min-h-13 flex items-center justify-center rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] bg-white dark:bg-[#202c33] text-[#111b21] dark:text-[#e9edef] text-xl font-semibold select-none">
                                    {char}
                                </div>
                                {i + 1 == 4 && <span className="text-xl font-semibold text-[#667781] dark:text-[#8696a0] mx-1 select-none flex items-center justify-center" >-</span>}
                            </div>
                        )}
                    </div>
                </div>

                <ol className="flex flex-col gap-5">
                    {[
                        <>
                            Open WhatsApp{" "}
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#25d366] mx-1">
                                <svg viewBox="0 0 24 24" fill="white" width="13" height="13">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.428a.5.5 0 0 0 .515.572l5.758-1.51A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.36-.214-3.733.979.996-3.648-.235-.374A9.9 9.9 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                                </svg>
                            </span>{" "}
                            on your phone
                        </>,
                        <>
                            On Android tap Menu{" "}
                            <kbd className="inline-flex items-center justify-center w-5 h-5 mx-1 rounded border border-[#d1d7db] dark:border-[#3b4a54] text-[10px] text-[#667781]">
                                ⋮
                            </kbd>
                            {" · "}On iPhone tap Settings{" "}
                            <kbd className="inline-flex items-center justify-center w-5 h-5 mx-1 rounded border border-[#d1d7db] dark:border-[#3b4a54] text-[10px] text-[#667781]">
                                ⚙
                            </kbd>
                        </>,
                        <>Tap <strong>Linked devices</strong>, then <strong>Link device</strong></>,
                        <>Tap <strong>Link with phone number instead</strong> and enter this code on your phone</>,
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <span className="shrink-0 w-7 h-7 rounded-full border border-[#d1d7db] dark:border-[#3b4a54] flex items-center justify-center text-xs font-medium text-[#667781] dark:text-[#8696a0]">
                                {i + 1}
                            </span>
                            <span className="text-sm text-[#111b21] dark:text-[#e9edef] leading-7">
                                {step}
                            </span>
                        </li>
                    ))}
                </ol>

                <button onClick={() => setMode("qr")} className="self-start flex items-center gap-1 text-sm text-[#111b21] dark:text-[#e9edef] border-b border-current hover:text-[#25d366] transition-colors pb-0.5">
                    Log in with QR code <span>›</span>
                </button>
            </div>
        </main>
    );
}

export default CodeSend;