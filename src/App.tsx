import { useState, useEffect,  } from "react";
import Zadanie1 from './Movies_books_albums.tsx';
import { Voila_songs , Green_Day_songs} from './Album_songs.ts';
import TicTacToe from "./TicTacToe.tsx";
import './App.css'


function App() {
  return (
    <div className='main'>
       <TicTacToe />
    </div>
  )
}
export default App
