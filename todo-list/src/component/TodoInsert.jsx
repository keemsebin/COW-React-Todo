import React from "react";
import "./Todo.css";

const TodoInsert = () => {
    return (
        <div >
        <form className="Insert">
            <input 
                type="text"
                placeholder="Write to do"
                className="Insert-in"
            />
            <button type="submit" className="Insert-add">
                ADD
            </button>
        </form>
    </div>
    );
};

export default TodoInsert;