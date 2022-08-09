import React from "react";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle} from "react-icons/ai";


const TodoItem = ({ todoItem, todoList, setTodoList}) => (
    <li className="item">
        <span type="checkbox" className="item-check"><AiOutlineCheckCircle size="21"/></span>
        <span className="item-todo">{todoItem.toDo}</span>
        <span type="button" className="item-delete"> 
            <FcFullTrash size="21"/>
        </span>
    </li>
);

export default TodoItem;