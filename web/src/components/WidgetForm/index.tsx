import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import '../../global.css'
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de uma nuvem de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackType(null)
        setFeedbackSent(false)
    }
    return (
        <div className="divWidgetForm">
            {feedbackSent ? 
            <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}></FeedbackSuccessStep> : 
            (<>
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}></FeedbackTypeStep>
            ) : (
                <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}></FeedbackContentStep>
            )}
            </>)} 

            <footer>Feito por <a className="a" href="https://github.com/wrafanunes">Wilson Rafael</a></footer>
        </div>
    )
}