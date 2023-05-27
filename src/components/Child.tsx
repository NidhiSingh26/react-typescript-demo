import React from 'react'
import {useState} from 'react'

interface handleSubmit{
    e:any;
} 

export const Child = (props:any) => {
    const [name,setName]=useState('');
    
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        props.getData(name);
    };
  
    return (
        <div>
            <form onSubmit={handleSubmit}>              
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e:any)=>setName(e.target.value)} 
                    />
                    <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
    
} 

export default Child
