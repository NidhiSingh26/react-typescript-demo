import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react'

function FavoriteColor() {
    const[color,setColor]=useState('red');

    return(
        <>
            <h4>My FavoriteColor is {color}</h4>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("pink")}>Pink</button>
            <button type="button" onClick={()=>setColor("green")}>Green</button>
            <button type="button" onClick={()=>setColor("black")}>Black</button>

        </>
    )
}
export default FavoriteColor