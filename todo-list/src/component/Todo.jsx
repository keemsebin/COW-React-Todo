import React from "react";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import "./Todo.css";

const Todo = () => {
    return (
        <div className="Home">
                <span className="titlename">What to do ?</span>
                <TodoInsert/>
                <TodoItemList/>
            </div>
    );
};

export default Todo;