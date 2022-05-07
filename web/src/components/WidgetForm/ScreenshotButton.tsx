import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null) => void
}
export function ScreenshotButton({
    screenshot,
    onScreenshotTook }
    : ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64img = canvas.toDataURL('image/png')

        onScreenshotTook(base64img)
        setIsTakingScreenshot(false)

        if (screenshot) {
            return (
                <button type="button" className="buttonScreenshot" style={
                    {
                        backgroundImage: `url(${screenshot})`,
                        backgroundPosition: 'right bottom',
                        backgroundSize: 180
                    }
                }
                onClick={() => onScreenshotTook(null)}>
                    <Trash weight="fill"></Trash>
                </button>
            )
        }
    }
    return (
        <button type="button" className="buttonCameraForm" onClick={handleTakeScreenshot}>
            {isTakingScreenshot ? <Loading></Loading> : <Camera className="chatTearDrops"></Camera>}
        </button>
    )
}