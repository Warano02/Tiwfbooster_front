import Device from '@/components/devices/Device'
import { AllDevices } from '@/store/device-store'
import type { Metadata, } from 'next'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props,): Promise<Metadata> {
    const { id } = await params
    const device = AllDevices.find(e => e.id == id)

    return { title: `Preview ${device?.name || "phone"} - Stalker` }
}
function SingleDevice() {
    return (
        <Device/>
    )
}

export default SingleDevice