import React, {useState } from 'react'
import './que.css'
import '../../style.css'
const Que = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="ad-textbox">
            <input
                onChange={handleChange}
                className={`${value ? "has-value" : ""}`}
                id="textbox"
                type="text"
            />
            <span className="material-symbols-outlined icon-mail4"></span>
            <label htmlFor="textbox">Email Address</label>
            <div className="underline" />
        </div>
    );
};


export default Que