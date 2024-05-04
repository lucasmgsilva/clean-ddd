import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('crete an answer', () => {
    const answerQuestionUseCase = new AnswerQuestionUseCase()
    const answer = answerQuestionUseCase.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toBe('Nova resposta')
})