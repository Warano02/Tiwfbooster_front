import Devices from "@/components/devices/Devices"

export const metadata = {
  title: "Hack Devices - Stalker",
  description: ""
}

function LandingPage() {
  return (
    <div className="w-full h-full p-2 space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full h-35 rounded-lg p-2 bg-black"></div>
        <div className="w-full h-35 rounded-lg p-2 bg-black"></div>
        <div className="w-full h-35 rounded-lg p-2 bg-black"></div>
      </div>
      <Devices />
    </div>
  )
}

export default LandingPage