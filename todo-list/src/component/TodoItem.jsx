import React from "react";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle} from "react-icons/ai";


const TodoItem = () => (
    <li className="item">
        <span type="checkbox" className="item-check"><AiOutlineCheckCircle size="21"/></span>
        <span className="item-todo">할 일</span>
        <span type="button" className="item-delete"> 
            <FcFullTrash size="21"/>
        </span>
    </li>
);

export default TodoItem;