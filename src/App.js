import './App.css'
import { useState, useRef, useEffect } from 'react'
import questions from './components/Questions'
import ProgressBar from './components/ProgressBar'
import CountdownTimer from './components/CountdownTimer'

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [highestScore, setHighestScore] = useState(0)
  const helpRef = useRef([...questions])
  const [currentQuestion, setCurrentQuestion] = useState({
    answerOptions: [],
    questionText: 'question',
  })
  const [bgNeutral, setBgNeutral] = useState('#243d97')
  const [answer, setAnswer] = useState()
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    getNewQuestion()
  }, [currentQuestionNumber])

  const getNewQuestion = () => {
    const questionIndex = Math.floor(Math.random() * helpRef.current.length)
    setCurrentQuestion(helpRef.current[questionIndex])
    helpRef.current.splice(questionIndex, 1)
    setIsDisabled(false)
  }

  if (highestScore < score) {
    setHighestScore(score)
  }

  const handleAnswerClick = (isCorrect, i) => {
    setAnswer(i)
    setIsDisabled(true)
    isCorrect ? setScore(score + 1) : setScore(score)
    setTimeout(() => findNextQuestion(), 1000)
  }
  const findNextQuestion = () => {
    setAnswer(null)
    const nextQuestion = currentQuestionNumber + 1
    if (nextQuestion === questions.length) {
      setShowScore(true)
    } else {
      setCurrentQuestionNumber(nextQuestion)
    }
  }

  const handleRestartClick = () => {
    helpRef.current = [...questions]
    setCurrentQuestionNumber(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <>
      <h1 className='appTitle'>Quiz me!</h1>
      <div>
        <p className='appDescription'>
          Quiz me! is my take on{' '}
          <a
            rel='noreferrer'
            href='https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/'
            target='_blank'
            className='descriptionLink'
          >
            freeCodeCamp's
          </a>{' '}
          quiz app tutorial with improved functionality.
          <ul className='descriptionList'>
            <li className='descriptionList'>
              Questions are given in a random order.
            </li>
            <li className='descriptionList'>Highest score shown.</li>
            <li className='descriptionList'>
              Answers are highlighted with color after click if they were
              correct or not.
            </li>
            <li className='descriptionList'>
              Answering the questions is time limited.
            </li>
          </ul>
        </p>
      </div>
      <div className='quiz-Box'>
        {showScore ? (
          <>
            <div className='score-Section'>
              <span className='score-Current'>
                Your score is {score} out of {questions.length}
              </span>
              <span className='score-Highest'>
                Your highest score is {highestScore}
              </span>
            </div>
            <button className='restart-Button' onClick={handleRestartClick}>
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            {' '}
            <div className='question-Section'>
              <div className='current-Question'>
                <div className='question-Count'>
                  <span>
                    Question {currentQuestionNumber + 1}/{questions.length}
                  </span>
                </div>
                <div className='question-Text'>
                  {currentQuestion.questionText}
                </div>
              </div>
            </div>
            <div className='answer-Section'>
              {currentQuestion.answerOptions.map((elem, i) => (
                <button
                  className='answer-Button'
                  onClick={() => handleAnswerClick(elem.isCorrect, i)}
                  style={{
                    backgroundColor:
                      answer === i
                        ? elem.isCorrect
                          ? 'green'
                          : 'red'
                        : bgNeutral,
                  }}
                  disabled={isDisabled}
                >
                  {elem.answerText}
                </button>
              ))}
            </div>
            <ProgressBar isDisabled={isDisabled} answer={answer} />
            <CountdownTimer />
          </>
        )}
      </div>
    </>
  )
}

export default App
