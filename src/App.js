import './App.css';
import List from "./components/List";
import {AlertAddTask} from "./components/AlertAdd";
import {useEffect, useState} from "react";
import {DeleteAll} from "./components/DeleteAll";

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let tasks_local = JSON.parse(localStorage.getItem("tasks"))
        setTasks(tasks_local)
    }, []);

    const Search = (event) => {
        console.log("search", event.target.value);
        let t = JSON.parse(localStorage.getItem("tasks")) == null ? [] : JSON.parse(localStorage.getItem("tasks"));
        console.log("Array", t)
        let f = t.filter((item => item.includes(`${event.target.value}`)))
        setTasks(f)
    }

     return (
         <div className="App">
            <div className="App-header">
                <h2>Список дел</h2>
                <AlertAddTask ></AlertAddTask>
                <input className={"search"} placeholder={"Поиск.."} style={{marginBottom: "5px"}} onChange={Search}/>
                <List tasks={tasks}></List>
            </div>
             <DeleteAll></DeleteAll>
         </div>
     );
}

export default App;
