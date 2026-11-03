import { useState, useEffect, type ReactNode,  } from "react";
import Gallery from './Assignments/Movies_books_albums/Movies_books_albums.tsx';
import TicTacToe from "./Assignments/TicTacToe/TicTacToe.tsx";
import './App.css';
import ToDoList from "./Assignments/ToDoList/ToDoList.tsx";

const assignments: {name: string, comp: any, img?: string}[] = [
  {name: 'Movies, books and albums gallery', comp: <Gallery />, img: './assets/imgTicTacToe.png'},
  {name: 'Tic Tac Toe', comp: <TicTacToe />, img: './assets/imgTicTacToe.png'},
  {name: 'To Do list', comp: <ToDoList />}
]

function App() {
  const [currentAssignment, setCurrentAsignment] = useState<{comp: any, name: string}>(null);
  function Main(){
    if(currentAssignment){
      return(
        <div className='main'>
          {currentAssignment.comp}
        </div>
      );
    }
    else {
      return(
      <>
        <div className="main">
          <div className="assignments_list">
            {
              assignments.map((assignment) => (
                <div className="appear" onClick={() => setCurrentAsignment(assignment)}>
                  <h1>{assignment.name}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </>
      );
    }
  }
  function Nav(){
    if(currentAssignment){
      return(
        <nav>
          <div><h1 onClick={() => setCurrentAsignment(null)}>←</h1></div>
          <div><h1>{currentAssignment.name}</h1></div>
          <div></div>
        </nav>
      )
    }
    return(
      <nav>
        <div></div>
        <div><h1>Oliwier Boka's assignments</h1></div>
        <div></div>
      </nav>
    )
  }
  return (
    <>
      <Nav />
      <Main/>
    </>
  )
}
export default App
