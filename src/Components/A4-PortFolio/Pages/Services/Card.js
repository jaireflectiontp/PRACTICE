import React from 'react'
import './service.scss'
const Card = (props) => {
    return (
        <div>
            <div className='project_card'>
                <div className='card_inner'>
                    <div className='card_front'><img src={props.img} alt='..'/></div>
                    <div className='card_back'><a href='#'/>{props.link}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
