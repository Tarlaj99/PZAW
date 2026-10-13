import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


interface props {
  img: string,
  title: string,
  date: number
}
function Movie({img, title, date} : props){
  return(
    <div className='container'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  )
}

function App() {
  return (
    <main>
      <Movie title='Matrix' date={1999} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10'/>
      <Movie title='Star Wars I: The Phantom Menace' date={1999} img='https://thumb.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/250px-Star_Wars_Phantom_Menace_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'/>
      <Movie title='Taxi 3' date={2003} img='https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg'/>
    </main>
  )
}

export default App
