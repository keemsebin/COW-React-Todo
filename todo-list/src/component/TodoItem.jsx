import React from "react";
import cn from "classnames";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle,AiFillCheckCircle} from "react-icons/ai";


const TodoItem = ({ todoItem, todoList, setTodoList}) => {
    const {id, checked} = todoItem;
    const onCheckbox = (id) =>{
       setTodoList(
            todoList.map(todo =>
                todo.id ===id ? {...todo, checked : !todo.checked} : todo,
                ),
            );
    };
    return(
        <li className="item" >
            <div className={cn('checkbox', {checked:checked})} 
            onClick={()=>onCheckbox(id)}>
                {checked ? <AiFillCheckCircle size="21"/>:<AiOutlineCheckCircle size="21"/> } 
            </div>
            <span className="item-todo">{todoItem.toDo}</span>
            <span type="button" className="item-delete"> 
                <FcFullTrash size="21"/>
            </span>
        </li>
    );
};

export default TodoItem;