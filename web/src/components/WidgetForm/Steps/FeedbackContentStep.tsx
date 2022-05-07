import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

import '../../../global.css'
import { ArrowLeft, Camera } from "phosphor-react"
import { ScreenshotButton } from "../ScreenshotButton"
import { FormEvent, useState } from "react"
import { api } from "../../../lib/api"
import { Loading } from "../../Loading"

interface FeedBackContextStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequest: () => void
    onFeedbackSent: () => void
}
export function FeedbackContentStep({ feedbackType,
    onFeedbackRestartRequest, onFeedbackSent }: FeedBackContextStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        setIsSendingFeedback(true)
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })
        setIsSendingFeedback(false)
        onFeedbackSent()
    }
    const [comment, setComment] = useState('')
    return (
        <>
            <header>
                <button type="button" className="buttonArrowLeft">
                    <ArrowLeft weight="bold" className="x" onClick={onFeedbackRestartRequest}></ArrowLeft>
                </button>
                <span className="spanWidgetForm">{feedbackTypeInfo.title}
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}
                        className="chatTearDrops"></img>
                </span>
                <CloseButton></CloseButton>
            </header>
            <form className="form" onSubmit={handleSubmitFeedback}>
                <textarea className="textarea" placeholder="Conte o que está acontecendo"
                    onChange={event => setComment(event.target.value)}></textarea>

                <footer className="footerFeedbackContentStep">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}></ScreenshotButton>
                    <button type="submit" className="buttonForm"
                        disabled={comment.length === 0 || isSendingFeedback}>
                        {isSendingFeedback ? <Loading></Loading> : 'Enviar Parecer'}</button>
                </footer>
            </form>
        </>
    )
}