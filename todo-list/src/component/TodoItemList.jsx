import React,{useEffect} from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import "./Todo.css";

const TodoItemList = ({count,title,length,setCount,todoList,setTodoList,checkedList}) => {
 
    useEffect(()=>{ 
        axios.get("http://localhost:5000/todo")
        .then(function(response){ 
            setTodoList(response.data)
            console.log(response);
         })
        },[count])
    return (
        <div>
            {todoList.length>0 &&
                <div className="itemlist">
                    <span className="All">{title}{checkedList.length}</span>
                        {todoList.map((todoItem) => {
                            if(checkedList !== todoItem.isCompleted) return null;
                                return (
                                    <TodoItem 
                                        key={todoItem.id}
                                        todoItem={todoItem}
                                        todoList={todoList}
                                        setTodoList={setTodoList}
                                        count={count}
                                        setCount={setCount}
                                    />
                            );
                            })}
                        <div className="footer">
                        </div>
                    </div>  
                  }
            </div>
        );
    };


export default TodoItemList;