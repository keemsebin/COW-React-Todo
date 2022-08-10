import React, { useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import "./Todo.css";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    return (

            <div className="Home">
                <span className="titlename">What to do ?</span>
                <TodoInsert todoList={todoList} setTodoList={setTodoList} />
                <TodoItemList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    checked= "<AiOutlineCheckCircle/>"
                />
            </div>
    );
};

export default Todo;