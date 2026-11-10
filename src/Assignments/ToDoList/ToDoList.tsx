import { useRef, useState } from "react"
import Task from "./Task";

export default function ToDoList(){
    const [tasks, setTasks] = useState<{id: number,name: string, status: string}[]>([]);
    const [newID, setNewID] = useState<number>(0);
    const input = useRef<HTMLInputElement>(null);

    function handleSubmit(event){
        event.preventDefault();
        const newTask = {id: newID, name: input.current.value, status: 'unfinished'};
        setTasks([...tasks, newTask]);
        setNewID(prev => prev + 1);
        input.current.value = '';
    }
    function HandleFinished(event,id){
        const NewTasks = [...tasks];
        NewTasks.forEach((task, index) => {
            if(task.id == id){
                task.status = event.target.checked ? 'finished' : 'unfinished';
            }
        })
        setTasks(NewTasks);
    }
    function DeleteTask(id){
        setTasks(tasks.filter((e) => e.id != id));
    }
    function handleEdit(element) {
        const newName = window.prompt("New name:");

        if (newName === null) 
            return;

        setTasks(tasks.map((e) => {
            if (e.name === element.name) {
                return { ...e, name: newName };
            } 
            else {
                return e;
            }
        }));
    }
    return(
    <>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="add-task">Add Task:</label><br />
            <input ref={input} name="add-task" type="text"/>
        </form>
        
        <h1>Tasks:</h1>
        <div>
        {
            tasks.sort((a,b) => Number(b.status == 'finished') - Number(a.status == 'finished')).map((e) => (
                <div className={e.status == 'finished' ? 'appear task finished' : 'appear task unfinished'}>
                    <h1>{e.name}</h1> 

                    <input name="check" type="checkbox" checked={e.status == 'finished'}  onChange={(event) => HandleFinished(event, e.id)}/>
                    <label htmlFor="check">Finished?</label>
                    <div>
                        <h1 onClick={() => DeleteTask(e.id)}>&times;</h1>
                        <h2 onClick={() => handleEdit(e)}>Edit</h2>
                    </div>
                </div>
            ))
        }
        </div>
    </>
    )
}