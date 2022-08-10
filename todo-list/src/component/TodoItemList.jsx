import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

const TodoItemList = ({todoList, setTodoList, onDelete, onCheckbox}) => (
    <div className="itemlist">
            {todoList && 
                todoList.map((todoItem) => (
                <TodoItem 
                    key={todoItem.id}
                    todoItem={todoItem}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    onCheckbox={onCheckbox}
                    onDelete={onDelete}
                />
            ))}
    </div>
);

export default TodoItemList;