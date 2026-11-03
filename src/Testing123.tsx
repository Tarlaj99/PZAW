import { useRef, useState, useEffect } from "react";
import Movie from './App.tsx'

export default function Testing(){
    const movies = [
    {
      title: "Matrix",
      date: 1999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10",
    },
    {
      title: "Star Wars I: The Phantom Menace",
      date: 1999,
      img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/250px-Star_Wars_Phantom_Menace_poster.jpg",
    },
    {
      title: "Taxi 3",
      date: 2003,
      img: "https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg",
    },
  ];

  return (
    <>
    {
        movies.map((element, index) => (
            <Movie title={element.title} date={element.date} img={element.img}/>
        ))
    }
    </>
  )
}