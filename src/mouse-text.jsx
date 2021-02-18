import reactDom from "react-dom";
import React from 'react'
import './mouse.css'
import {useState} from 'react'

function MouseText(){
    const [text, changeText]= useState('');
    function onMouse(){
        changeText('text on mouseover');
    }
    function outMouse(){
        changeText('');
    }
    return <div><div className='mouse' onMouseOver={onMouse} onMouseOut={outMouse}>MOUSEOVER MY DIV </div>
            <div className='mouse'style={{border:'none'}}>{text}</div>
    </div>

}

export default MouseText