import React from 'react'

function ConnectSuccess() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#111b21] flex items-center justify-center p-6">
            <div className="flex flex-col items-center text-center gap-4 max-w-sm w-full">
                <div className="size-16 rounded-full bg-[rgba(37,211,102,0.12)] border-2 border-[#25d366] flex items-center justify-center text-3xl">✓</div>
                <h2 className="text-xl font-semibold text-[#111b21] dark:text-[#e9edef]">Bot connected successfully</h2>
                <p className="text-sm text-[#667781] dark:text-[#8696a0]">WhatsApp bot is now active and ready.</p>
                <button className="mt-2 bg-[#25d366] hover:bg-[#1fbb57] text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors">
                    Okay
                </button>
            </div>
        </main>)
}

export default ConnectSuccess