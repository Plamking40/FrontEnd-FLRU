import React from 'react'
import './Rank.css'
import Sidebar from '../../Component/Sidebar'
import Ranking from '../../Component/Ranking/Ranking'

export default function Rank() {
    return (
        <div className='RankContainer'>
            <Sidebar />
            <Ranking />
        </div>
    )
}
