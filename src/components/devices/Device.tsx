"use client"

import { useState, useEffect } from "react"
import { AndroidMockup, AndroidMockupProps } from "react-device-mockup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Slider } from "../ui/slider"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Switch } from "../ui/switch"
import { Field } from "../ui/field"
import { Button } from "../ui/button"
import { Video } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"

function Device() {
    const [isRecording, setIsRecording] = useState(false)
    const [seconds, setSeconds] = useState(0)

    const [settings, setSettings] = useState<AndroidMockupProps>({
        screenWidth: 200,
        noRoundedScreen: false,
        isLandscape: false,
        frameColor: "#666666",
        frameOnly: false,
        statusbarColor: "#CCCCCC",
        hideStatusBar: false,
        navBar: "swipe",
        navBarColor: "#CCCCCC",
        transparentNavBar: false,
        hideNavBar: false,
        transparentCamArea: false,
    })

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isRecording) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isRecording])

    const formatTime = (sec: number) => {
        const h = String(Math.floor(sec / 3600)).padStart(2, "0")
        const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0")
        const s = String(sec % 60).padStart(2, "0")
        return `${h}:${m}:${s}`
    }

    const handleRecord = () => {
        if (isRecording) {
            setIsRecording(false)
        } else {
            setSeconds(0)
            setIsRecording(true)
        }
    }

    return (
        <section className="space-y-6">

            <div className="flex items-center justify-between pt-2 px-4">
                <h1 className="text-xl font-semibold">Device Preview</h1>

                <Button onClick={handleRecord} className="flex items-center gap-2">
                    <Video size={16} />
                    {isRecording ? (
                        <>
                            <span className="text-red-500">REC</span>
                            <span>{formatTime(seconds)}</span>
                        </>
                    ) : (
                        "Start Recording"
                    )}
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">

                <ScrollArea className="flex-1 p-4 max-h-125">
                    <div className="space-y-6 ">


                        <Field>
                            <Label>Screen Width</Label>
                            <Slider min={200} max={settings.isLandscape ? 480 : 250} step={1} value={[settings.screenWidth]} onValueChange={(value) => setSettings({ ...settings, screenWidth: value[0] })} />
                            <p className="text-xs text-muted-foreground">
                                {settings.screenWidth}px
                            </p>
                        </Field>

                        <Field>
                            <Label>Frame Color</Label>
                            <Input type="color" value={settings.frameColor} onChange={(e) => setSettings({ ...settings, frameColor: e.target.value })} className="w-16 h-8 p-0" />
                        </Field>

                        <div className="flex items-center justify-between">
                            <Label>Hide Status Bar</Label>
                            <Switch checked={settings.hideStatusBar} onCheckedChange={(checked) => setSettings({ ...settings, hideStatusBar: checked })} />
                        </div>

                        <Field>
                            <Label>Status Bar Color</Label>
                            <Input type="color" value={settings.statusbarColor} onChange={(e) => setSettings({ ...settings, statusbarColor: e.target.value })} className="w-16 h-8 p-0" />
                        </Field>

                        <Field>
                            <Label>Navigation Bar</Label>
                            <Select value={settings.navBar} onValueChange={(value: "swipe" | "bhr" | "rhb") => setSettings({ ...settings, navBar: value })}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="swipe">Swipe</SelectItem>
                                    <SelectItem value="buttons">Buttons</SelectItem>
                                    <SelectItem value="none">None</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>

                        <div className="space-y-2">
                            {[
                                ["No Rounded Screen", "noRoundedScreen"],
                                ["Frame Only", "frameOnly"],
                                ["Landscape Mode", "isLandscape"],
                                ["Transparent NavBar", "transparentNavBar"],
                                ["Hide NavBar", "hideNavBar"],
                                ["Transparent Cam Area", "transparentCamArea"],
                            ].map(([label, key]) => (
                                <div key={key} className="flex items-center justify-between">
                                    <Label>{label}</Label>
                                    <Switch checked={settings[key as keyof typeof settings] as boolean} onCheckedChange={(checked) => setSettings({ ...settings, [key]: checked })} />
                                </div>
                            ))}
                        </div>

                    </div>
                </ScrollArea>

                <div className="flex-1 flex items-center justify-center p-4">
                    <AndroidMockup {...settings}>
                        <video
                            src="/demo.mp4"
                            autoPlay
                            loop
                            controls
                            className="w-full h-full object-cover"
                        />
                    </AndroidMockup>
                </div>
            </div>
        </section>
    )
}

export default Device