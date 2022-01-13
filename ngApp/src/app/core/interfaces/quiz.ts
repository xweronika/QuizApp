
export interface Quiz {
  id: number,
  category: string,
  description: string,
  created_at: Date
}

export interface NewQuiz {
  category: string,
  description: string,
  details: [{
      question: string,
      answers: Array<string>,
      correct: string
  }]
}