import React from 'react'
import './editquiz.css'
import Sidebar from '../../Component/Sidebar'
import EditQuizs from '../../Component/Quizs/EditQuizs'

export default function EditQuiz() {
  return (
    <div className='NavbarEditContainer'>
        <Sidebar/>
        <EditQuizs/>
    </div>
  )
}
