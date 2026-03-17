import { AllDevices } from "@/store/device-store"
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata({ params }: Props,): Promise<Metadata> {
    const { id } = await params
    const device = AllDevices.find(e => e.id == id)

    return { title: `Record of ${device?.name || "phone"} - Stalker` }
}

function Record() {
    return (
        <div>Record</div>
    )
}

export default Record