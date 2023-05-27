import {useState} from 'react'
import React from 'react'

 export const MyCustomCountingHook = () => {
    const[count,setCount] = useState<number>(0);

    const incrementCount =():void=>{
        setCount((preState)=>preState+1);
    };

    return {count,incrementCount};
}

//export default MyCustomHook
