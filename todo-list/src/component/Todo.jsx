import React from "react";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";


const Todo = () => {
    return (
            <div>
                <span>What to do ?</span>
                <TodoInsert/>
                <TodoItemList/>
            </div>
    );
};

export default Todo;