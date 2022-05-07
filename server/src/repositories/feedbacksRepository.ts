export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    //Promise é equivalente à Task do .Net
    create: (data: FeedbackCreateData) => Promise<void>
}