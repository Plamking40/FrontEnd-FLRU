import React from 'react'
import './SingIn_Out.css'
import Sidebar from '../../Component/Sidebar'
import SingIn_outs from '../../Component/SingIn-outs/SingIn_outs'

export default function SingIn_Out() {
  return (
    <div className='SingInOutContainer'>
        <Sidebar/>
        <SingIn_outs/>
    </div>
  )
}
