
import { useState } from "react";

export default function FormTodo({onAdd}){
    const [todo, setTodo] = useState('');
    function handelSubmit(event){
        event.preventDefault(); 
        onAdd(todo);
        setTodo('')
    }
    return (
        <div>
            <form onSubmit={handelSubmit} >
                <button>+</button>
                <input type="text" required  placeholder="Add Your Todo here" onChange={e=>{setTodo(e.target.value)}} value={todo}  />
            </form>
        </div>
    )
}