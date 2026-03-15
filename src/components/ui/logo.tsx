import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Image src={"/favicon.ico"} alt="" width="47" height="48" className={cn("object-cover", className)} />
    );
}