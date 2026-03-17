"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ChevronLeft, ChevronRight, Eye, Pen, ServerCrash, Trash } from "lucide-react";
import { Input } from "../ui/input";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AllDevices, TDevice } from "@/store/device-store";



export default function DevicesTable() {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(AllDevices.length / 5);

    const paginatedDevices = AllDevices.slice(
        (page - 1) * 5,
        page * 5
    );

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto border rounded-xl">
                <table className="min-w-full text-sm">
                    <thead className="bg-background/50 text-gray-600 text-xs uppercase">
                        <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody >
                        {paginatedDevices.map((device) => <SingleDevice key={device.id} {...device} />)}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center mt-auto">
                <div className="flex gap-2">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)} className="h-8 w-8 flex items-center justify-center border rounded-full disabled:opacity-50 cursor-pointer" >
                        <ChevronLeft size={18} />
                    </button>

                    {
                        totalPages <= 15 ? Array.from({ length: totalPages }, (_, i) => (
                            <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 border rounded-full cursor-pointer transition-colors ${page === i + 1 ? "bg-black text-white" : ""}`}>
                                {i + 1}
                            </button>
                        )) : (
                            <div className="flex gap-2">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 border rounded-full cursor-pointer transition-colors ${page === i + 1 ? "bg-black text-white" : ""}`}>
                                        {i + 1}
                                    </button>
                                ))
                                }
                                <div className="flex gap">
                                    ...
                                </div>
                                <button onClick={() => setPage(totalPages)} className={`px-3 py-1 border rounded-full cursor-pointer transition-colors ${page === totalPages ? "bg-black text-white" : ""}`}>
                                    {totalPages}
                                </button>
                            </div>
                        )
                    }

                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="h-8 w-8 flex items-center justify-center border rounded-full disabled:opacity-50 cursor-pointer" >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}


const SingleDevice = ({ id, date, name }: TDevice) => {
    const [ldg, setLdg] = useState(false)
    const [done, setDone] = useState(false)
    const [dlt, setDelete] = useState("")
    const [nm, setNm] = useState("")
    const handleDelete = () => {
        setLdg(true)
    }

    useEffect(() => {
        setDone(dlt.toLocaleLowerCase() == "delete" && nm.toLocaleLowerCase() == name.toLocaleLowerCase())
    }, [dlt, nm])
    return (
        <tr className="border-t ">
            <td className="px-4 py-3">#{id}</td>
            <td className="px-4 py-3">{name}</td>
            <td className="px-4 py-3 text-gray-500">
                {new Date(date).toLocaleDateString()}
            </td>
            <td className="px-4 py-3 flex gap-2">
                <Link href={`/devices/${id}`} className="p-2 text-white rounded-md transition cursor-pointer">
                    <Eye size={16} />
                </Link>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="px-3 py-1  text-white cursor-pointer">
                            <Pen size={18} />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-sm">
                        <DialogHeader>
                            <DialogTitle>Edit Phone Name</DialogTitle>
                            <DialogDescription>
                                Make changes to your this phone name. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <FieldGroup>
                            <Field>
                                <Label htmlFor="name-1">New Name</Label>
                                <Input id="name-1" name="name" defaultValue={name} />
                            </Field>
                        </FieldGroup>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" className="cursor-pointer">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-md transition cursor-pointer">
                            <Trash size={16} />
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-red-600">
                                Delete this device ?
                            </DialogTitle>

                            <DialogDescription className="text-gray-500">
                                This action is irreversible. This will permanently delete this device
                                and remove all associated data.
                            </DialogDescription>
                        </DialogHeader>

                        <FieldGroup>
                            <Field>
                                <Label htmlFor="confirm" className=" text-xs">
                                    To confirm that is this device you want to delete type <span className="font-semibold">'{name.toUpperCase()}' </span>
                                </Label>
                                <Input id="confirm" onChange={(e) => setNm(e.target.value)} placeholder={name.toLocaleUpperCase()} />
                            </Field>
                            <Field>
                                <Label htmlFor="confirm">
                                    Type <span className="font-semibold">DELETE</span> to confirm
                                </Label>
                                <Input id="delete" onChange={(e) => setDelete(e.target.value)} placeholder="DELETE" />
                            </Field>
                        </FieldGroup>


                        <DialogFooter className="mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>

                            <Button onClick={handleDelete} disabled={ldg || !done} className={cn("bg-red-600 hover:bg-red-700 text-white ")}>
                                {ldg ? <svg className="h-8 w-8 text-white animate-spin" xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> : "Delete device"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </td>
        </tr>
    )
}