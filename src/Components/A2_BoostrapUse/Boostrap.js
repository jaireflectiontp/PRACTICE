import React from 'react'
import { useState } from 'react';
const Boostrap = () => {
    const [text, setText] = useState('Enter the text');
let newtext="";
    const UpCase = () => {
       newtext=text.toUpperCase();
       setText(newtext);
    }
    const LoCase=()=>{
        newtext=text.toLowerCase();
        setText(newtext);
    }
    const changeit = (event) => {
        setText(event.target.value);
    }
    return (
        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={changeit}></textarea>
            </div>
            <button onClick={UpCase}>Upper</button>
            <button onClick={LoCase}>Lower</button>
        </div>
    )
}

export default Boostrap
