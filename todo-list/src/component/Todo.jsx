import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import "./Todo.css";

const Todo = ({isCompleted}) => {

    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState(null);

           
    const today = new Date();
    const now =today.toLocaleDateString('ko-KR', {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    });
    return (
            <div className="Home">
                <span className="titlename">What to do ?</span>
                <TodoInsert 
                    count={count} 
                    setCount={setCount}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                <TodoItemList
                    title={now}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    count={count}
                    setCount={setCount}
                    checkedList={false}
                />  
                <TodoItemList
                    title="Done"
                    todoList={todoList}
                    setTodoList={setTodoList}
                    count={count}
                    setCount={setCount}
                    checkedList={true}
                /> 
            </div>
                
    );
};

export default Todo;