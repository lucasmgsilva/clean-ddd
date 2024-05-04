import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test('crete an answer', async () => {
    const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository)
    const answer = await answerQuestionUseCase.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toBe('Nova resposta')
})