import React,{useEffect} from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import "./Todo.css";

const TodoItemList = ({title,todoList, setTodoList, onDelete, onCheckbox,onUpdate ,onSubmitEdit}) => {
    return (
    <div >
         <ul className="itemlist">
                {todoList&&
                        todoList.map((todoItem) => (
                    <TodoItem 
                        key={todoItem.id}
                        todoItem={todoItem}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        onCheckbox={onCheckbox}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onSubmitEdit={onSubmitEdit}
                    />
                ))}
        </ul>
    </div>
    );
}

export default TodoItemList;