export interface NewQuiz {
    category: string,
    description: string,
    details: [{
        question: string,
        answers: Array<string>,
        correct: number
    }]
}
