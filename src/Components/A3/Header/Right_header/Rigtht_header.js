import React from 'react'
import '../header.css'
const Rigtht_header = () => {
    return (
        <div className='right__header'>
            <div className="right__header__nav">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="right__header__helpline">
                Need help? 989-879-0847
            </div>
            <div className="right__header__social">
                <ul>
                    <li>fb</li>
                    <li>tw</li>
                    <li>ig</li>
                </ul>
            </div>
        </div>
    )
}

export default Rigtht_header
