import React, { useState } from "react";
import "./styles.css";

const Main =()=>{
    const [name,setname] = useState("");
    const [todo,setTodo] = useState([]);
    
    function Submit (d) {
        d.preventDefault();             //to prevent refreshing
        setTodo((s)=>[...s,{id:Math.random(),title:name}])
        setname("")
    }
    function dlt (id) {
        setTodo((prev)=>{
            return todo.filter((o)=>o.id!==id)
        }
    )
    }
    return(
        <div className="Contain" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <form onSubmit={Submit}>
            <input type="text" placeholder="Task" className="inputs" onChange={(e)=>setname(e.target.value)} value={name}/>
            <button > Add</button>
            </form>
            {todo.length===0 && "no todos"}
            {
            todo.map((o) => {
                return (
                    
                    <li key={o.id}>
                        {o.title}
                        
                        <button style={{marginLeft:'10px'}} onClick={()=>dlt(o.id)}>delete</button>
                        </li>
                    
                    
                )
            }
            )
            }
        </div>
    );
}

export default Main;

