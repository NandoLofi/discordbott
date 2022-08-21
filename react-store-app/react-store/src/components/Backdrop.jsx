import React from 'react'
import "./Backdrop.css"

export default function Backdrop({show, click}) {
    if(show === true){
    return (
     <div className='backdrop' onClick={click}>Backdrop</div>
    )}
}