import React, { useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import axios from "axios";
import "./Todo.css";
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineCheckCircle,AiFillCheckCircle,} from "react-icons/ai";


const TodoItem = ({ todoItem, todoList, setTodoList}) => {
    
    const {id, checked} = todoItem;
    const [edited, setEdited] = useState(false);//isupate
    const [newText, setNewText] = useState(todoItem.toDo);//value
    const editRef = useRef(null);

    useEffect(()=> {
        if(edited) {
            editRef.current.focus();
        }
    },[edited]);

    const onCheckbox = useCallback(() => {
        setTodoList(
            todoList.map(todo =>
                todo.id ===id ? {...todo, checked : !todo.checked} : todo
                ),
            );
        },[todoList]);
    
    const onDelete = useCallback(id =>{
        setTodoList(todoList.filter(
            tododelete => tododelete.id !== id
            ));
        }, [todoList]);

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
        const nextTodoList = todoList.map((item) =>({
            ...item, toDo : item.id === todoItem.id ? newText : item.toDo,
        }));
        setTodoList(nextTodoList);
        setEdited(false);
    });
    return(
        <li className="item" >
            <div className={cn('checkbox', {checked})} onClick={()=>onCheckbox(id)}>
                {checked ? <AiFillCheckCircle size="27"/>:<AiOutlineCheckCircle size="27"/> } 
            </div>
            {edited? (
                <form onSubmit={onSubmitEdit} >
                    <input
                        type="text"
                        value={newText}
                        ref={editRef}
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
                    {todoItem.toDo}
                    </span>
                 )
            }
            <div className="item-delete" onClick={()=>{ onDelete(id)}}> 
                <FcFullTrash size="27"/>
            </div>
        </li>
    );
};

export default TodoItem;