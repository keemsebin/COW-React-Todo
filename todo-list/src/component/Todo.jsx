import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import "./Todo.css";



const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const today = new Date();
    const now =today.toLocaleDateString('ko-KR', {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    });
    return (
            <div className="Home">
                <span className="titlename">What to do ?</span>
                <span className="today">{now}</span>
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