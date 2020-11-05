import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'

function Player() {
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
            </div>
        </div>
    )
}

export default Player
