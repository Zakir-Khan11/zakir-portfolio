import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export default function Todo () {
    const [ inputValue, setInputValue] = useState ("");
    const  [task, setTask] =useState([]);

    // Input value handling
    const handleInputValue  = (e) => {
        setInputValue(e.target.value);
    };
    // Function for creating task in array
    const handleTaskInput =(e) =>{
        e.preventDefault();
        // if(!inputValue) return;
        // setTask((prevTask) => [...prevTask, inputValue]);
        // setInputValue("");
        
        // Empty String
        if (!inputValue) return;

        // Duplicate entry
        if (task.some((t) => t.text === inputValue)) {
            setInputValue("");
            alert("Duplicate Entry");
            return;
        }
        // Task entry
        setTask((curTask) => [...curTask, { text:inputValue, completion: false}]);
        setInputValue("");
    };
    // Task deletion function
    const handleTaskDeletion = (value) => {
        const updatedTask = task.filter((curElem) => curElem.text !== value);
        setTask(updatedTask);
    };
    // Task Checked Entry Function
    const handleCheckedTask =(value) =>{
        const updatedTask = task.map((curTask)=> curTask.text === value ?{...curTask, completion: !curTask.completion} :curTask);
        setTask(updatedTask);
    };
    return (
        <div className="Todo-B">
            <div className="Todo-p">
            <header>
                <h1>TODO APP</h1>
            </header>
        <section className="todo-task">
            <form onSubmit={handleTaskInput}>
                <input type="text" value={inputValue} onChange={handleInputValue} />
                <button className="s-btn" type="submit">Add Task</button>
            </form>
        </section>
        <ul>
            {
                task.map((curElem, index)=>{
                    return (
                        <li className={""} key={index}>
                            <span className="list-entry">{curElem.text}</span>
                            <button className="check-btn" onClikck={() => handleCheckedTask(curElem.text)}>
                                <FaCheck />
                            </button>
                            <button className="delete-btn" onClick={() =>handleTaskDeletion(curElem.text)}>
                                <MdDeleteForever />
                            </button>
                        </li>
                        // <li key={index}>{curElem}</li>
                    );
                })}
        </ul>
        </div>
        </div>
    );
};

