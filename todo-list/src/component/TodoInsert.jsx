import React,{useState, useRef, useEffect, useCallback} from "react";
import axios, { Axios } from "axios";
import "./Todo.css";

const TodoInsert = ({ todoList, setTodoList}) => {
    
    const [toDo, setToDo] = useState("");
    const addRef = useRef(1);

    const onChange =useCallback( (event) => { setToDo(event.target.value)});

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        if (toDo ===""){
            return;
        }
        const newtodo ={
            id :addRef.current,
            toDo,
            checked : false,
        };
        setTodoList(todoList.concat(newtodo));
        addRef.current+=1;
        setToDo("");
    }); 
    console.log(todoList);
   
    return (
        <div >
            <form className="Insert" ref={addRef} onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="todoItem"
                    value={toDo}
                    placeholder="Enter what to do today !"
                    className="Insert-in"
                    onChange={onChange}
                />
                <button type="submit"className="Insert-add">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default TodoInsert;