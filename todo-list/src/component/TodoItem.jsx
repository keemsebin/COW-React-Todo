import React, { useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import axios from "axios";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle,AiFillCheckCircle,} from "react-icons/ai";


const TodoItem = ({count,setCount, todoItem}) => {
    
    const {id,content} = todoItem;
    const [edited, setEdited] = useState(false);
    const [newText, setNewText] = useState(todoItem.toDo);
    const [checked, setChecked] = useState(false);

    const onCheckbox = useCallback(() => {
        axios.patch("http://localhost:5000/todo/status/"+id)
        .then(function(response){
            console.log(response);
            if(checked==false){
                setChecked(true);
            }
            else{
                setChecked(false);
            }
        })
        .catch(function(error){
            console.log(error);
        })
        setCount(count+1);
        });
    
    const onDelete = useCallback( () =>{
        axios.delete("http://localhost:5000/todo/"+id)
        .then(function(response){
            console.log(response);
            setCount(count+1);
            console.log("삭제");
        })
        .catch(function(error){
            console.log(error);
        })
    });

    const onClickTodo = () => { 
        setEdited(true);
    };
    const onKeyInput = (e) => {
        if (e.key === 'Escape') {
            setEdited(false);
        }
    };
    const onChangeInput = (e) => {
        setNewText(e.target.value);
    };
    const onSubmitEdit = useCallback ((e) => {
        e.preventDefault();
        axios.patch("http://localhost:5000/todo/"+id,{"content":newText})
            .then(function(response){
                console.log(response);
                setCount(count+1);
            })
            .catch(function(error){
                console.log(error);
           })
           setEdited(false);
    });

    return(
        <li className="item" >
            <div className={cn('checkbox', {checked})} onClick={()=>onCheckbox(id)}>
                {checked ? <AiFillCheckCircle size="27"/> : <AiOutlineCheckCircle size="27"/>}
            </div>
            {edited? (
                <form onSubmit={onSubmitEdit}>
                    <input
                        type="text"
                        value={newText}
                        onChange={onChangeInput}
                        className="item-update"
                        onKeyUp={onKeyInput}
                    />
                </form>
                ) : (
                <span
                    className={`item-todo ${todoItem.checked ? 'item-todo' : ''}`}
                    onDoubleClick={onClickTodo}
                    >
                    {content}
                </span>
                )
            }
            <div className="item-delete" onClick={onDelete}> 
                <FcFullTrash size="27"/>
            </div>
        </li>
    );
};

export default TodoItem;