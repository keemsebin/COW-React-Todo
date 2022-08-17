import React,{useEffect} from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import "./Todo.css";
import { useState } from "react";

const TodoItemList = ({count,title,setCount,todoList,setTodoList,checkedList,todoItem,checked,isCompleted}) => {
    
    useEffect(()=>{ 
        axios.get("http://localhost:5000/todo")
        .then(function(response){ 
            setTodoList(response.data)
            console.log(response);
         })
        },[count]);
        return (
            <div >
                {todoList.length>0 &&
                    <div className="itemlist">
                        <span className="All">{title}</span>
                            {todoList.map((todoItem) => (
                                <TodoItem 
                                    key={todoItem.id}
                                    todoItem={todoItem}
                                    todoList={todoList}
                                    setTodoList={setTodoList}
                                    count={count}
                                    setCount={setCount}
                                />
                        ))}
                </div>
            }
            </div>
        );
}

export default TodoItemList;