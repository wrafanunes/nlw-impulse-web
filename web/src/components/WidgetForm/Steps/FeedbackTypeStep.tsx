import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeecbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void
}
export function FeedbackTypeStep(props: FeecbackTypeStepProps) {
    return (
        <>
            <header>
                <span>Deixe seu parecer</span>
                <CloseButton></CloseButton>
            </header>
            <div className="divFeedbackTypes">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="buttonFeedbackTypes"
                            onClick={() => props.onFeedbackTypeChange(key as FeedbackType)}
                            type="button">
                            <img src={value.image.source} alt={value.image.alt}></img>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}