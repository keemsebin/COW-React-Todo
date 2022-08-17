import React,{useState,  useCallback} from "react";
import axios, { Axios } from "axios";
import "./Todo.css";

const TodoInsert = ({count, setCount}) => {
    
    const [toDo,setToDo] = useState("");
    const onChange =useCallback((event) => {
         setToDo(event.target.value)
        });

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/todo",{"content":toDo})
        .then(function (respnonse) {
            console.log("성공");
            console.log(respnonse);
            setCount(count+1);
        })
        setToDo('');
    }); 
   
    return (
        <div >
            <form className="Insert" onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="todoItem"
                    value={toDo}
                    placeholder="Enter what to do today !"
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