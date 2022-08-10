import React,{useState, useRef} from "react";
import "./Todo.css";

const TodoInsert = ({ todoList, setTodoList}) => {
    const [toDo, setToDo] = useState("");
    const addRef = useRef(null);

    const onChange = (event) => { setToDo(event.target.value)};

    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo ===""){
            return;
        }
        const newtodo = todoList.concat({
            id : addRef.current,
            toDo,
            checked : false,
        });
        setTodoList(newtodo);
        setToDo('')
        addRef.current +=1;
    }; 
    console.log(todoList);
    return (
        <div >
            <form className="Insert" onSubmit={onSubmit} >
                <input 
                    type="text"
                    name="todoItem"
                    value={toDo}
                    ref={addRef}
                    placeholder="Write to do"
                    className="Insert-in"
                    onChange={onChange}
                />
                <button type="submit" className="Insert-add">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default TodoInsert;