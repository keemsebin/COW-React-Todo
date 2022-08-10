import React, { useCallback } from "react";
import cn from "classnames";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle,AiFillCheckCircle} from "react-icons/ai";


const TodoItem = ({ todoItem, todoList, setTodoList}) => {
    const {id, checked} = todoItem;
    const onCheckbox = useCallback(id => {
       setTodoList(
            todoList.map(todo =>
                todo.id ===id ? {...todo, checked : !todo.checked} : todo
                ),
            );
    },[todoList]);
    
    const onDelete = useCallback(id =>{
        setTodoList(todoList.filter(
            tododelete => tododelete.id !== id
            ));
    }, [todoList]);
    return(
        <li className="item" >
            <div className={cn('checkbox', {checked})} onClick={()=>onCheckbox(id)}>
                {checked ? <AiFillCheckCircle size="21"/>:<AiOutlineCheckCircle size="21"/> } 
            </div>
            <span className="item-todo">{todoItem.toDo}</span>
            <div className="item-delete" onClick={()=>onDelete(id)}> 
                <FcFullTrash size="21"/>
            </div>
        </li>
    );
};

export default TodoItem;