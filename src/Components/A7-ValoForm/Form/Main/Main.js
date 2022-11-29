import React, { useState } from 'react'
import './main.scss'
import '../../../../style.css'
const Main = () => {
    const [isActive, setActive] = useState("false");
    const handleChange = () => {
        setActive(!isActive);
    }
    return (
        <div>
            <div><h2>Sign in</h2></div>
            <div className='signIn_section'>
                <div className='inner'>
                    <label className={`${isActive ? '' : "activeInpt"}`}>USERNAME</label>
                    <input type='text' onClick={handleChange} />
                </div>
                <div className='inner'>
                    <label className={`${isActive ? '' : "activeInpt"}`}>PASSWORD</label>
                    <input type='password' onClick={handleChange} />
                </div>
                <div className='social_acc'>
                    <span className='fb_acc'><i className='icon-facebook'></i></span>
                    <span className='google_acc'><i className='icon-google'></i></span>
                    <span className='apple_acc'><i className='icon-appleinc'></i></span>
                </div>
                <div className='logSuggestion'>
                    <span><input type='checkbox' /></span>
                    <span>Stay signed in</span>
                </div>
            </div>
        </div>
    )
}

export default Main
