import React, { useState, useRef } from "react";
import "./ToDo.css";

// set static todo data
const data = [
    { id: 1, title: 'firstData', status: true },
    { id: 2, title: 'secondData', status: false },
]

// todo function code start 

const ToDo = () => {

    // set hook for change state
    const [todo, setTodos] = useState(data);

    // set hook for use reff.
    const labelInputRef = useRef();

   


    // function for add new todo 
    const onAddButtonClick = () => {
        const labelInput = labelInputRef.current;
        setTodos([
            ...todo,
            {
                id: Math.floor(Math.random() * Math.floor(100) * 100),
                title: labelInput.value,
                done: false
            }
        ]);
        labelInput.value = "";
    };

    // function for delete toDo by todo id
    const onDeleteButtonClick = (id) => {
        const newTodo = todo.filter((itm) => { return itm.id != id });
        setTodos(newTodo);
    }

    // function for done todo task  by todo id
    const onDoneButtonClick = (id) => {
       setTodos(todo.map(itm => (itm.id === id ? { ...itm, status: true } : itm)));
     }


    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="form-group">
                        <input type="text" className="form-control" ref={labelInputRef} placeholder="Enter Title" />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <button className="btn btn-info f-r" onClick={onAddButtonClick}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {
                            todo && todo.length > 0 && todo.map((itm, index) => {
                                return <li className="list-group-item" key={index}>
                                    {itm.title}
                                    <div className="btn-group f-r" role="group" >
                                        {
                                            !itm.status && <button type="button" onClick={() => onDoneButtonClick(itm.id)} className="btn-done btn btn-success">Done</button>
                                        }
                                        <button type="button" onClick={() => onDeleteButtonClick(itm.id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default ToDo;