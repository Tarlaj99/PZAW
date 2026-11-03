import { useRef, useState } from "react"
import Task from "./Task";

export default function ToDoList(){
    const [tasks, setTasks] = useState<{id: number,name: string, status: string}[]>([]);
    const [newID, setNewID] = useState<number>(0);
    const [edit, setEdit] = useState<number>(null);
    const input = useRef<HTMLInputElement>(null);

    function handleSubmit(event){
        event.preventDefault();
        setTasks([...tasks, {id: newID, name: input.current.value, status: 'unfinished'}]);
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
    function handleEdit(id){
        // setEdit(id);
        // current_editing_input.current.focus();
        window.alert('Edit nie działa');
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
                        <h2 onClick={() => handleEdit(e.id)}>Edit</h2>
                    </div>
                </div>
            ))
        }
        </div>
    </>
    )
}