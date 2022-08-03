import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3" style={{fontStyle: 'italic',textDecoration:'underline', textShadow: '2px 2px #a4ccdf'}}>List of Items</h3>
            {props.todos.length===0? "All done! No work to display.":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
