import React from 'react'
import './quiz.css'
import Sidebar from '../../Component/Sidebar'
import Quizs from '../../Component/Quizs/Quizs'

export default function Quiz() {
  return (
    <div className='QuizContainer'>
        <Sidebar/>
        <Quizs/>
    </div>
  )
}
