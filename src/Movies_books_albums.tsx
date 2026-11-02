import { useState, useRef, type Key, use, type ReactElement } from 'react';
import { Voila_songs , Green_Day_songs} from './Album_songs.ts';
import './App.css'

interface movie_props {
  img: string,
  title: string,
  date: number
}
interface book_props {
  cover: string,
  title: string,
  year: number,
  pages: number
}
interface album_props {
  cover : string,
  title: string,
  artist : string,
  genre : string,
  year: number,
  songs : {name: string, duration: string}[]
}

function Movie({img, title, date} : movie_props){
  return(
    <div className='container'>
      <img src={img} alt={title} style={{width: '300px'}}/>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <button onClick={() => console.log(`Tytuł filmu: ${title}`)}>Pokaż szczegóły</button>
      </div>
    </div>
  )
}

function Book({cover, title, year, pages} : book_props){
  return(
    <div className='container'>
      <img src={cover} alt={title} />
      <h1>{title}</h1>
      <p>{year}</p>
      <p>Pages: {pages}</p>
    </div>
  )
}
function Album({cover, title, artist, genre, year, songs} : album_props){
  return(
    <div className="album">
      <img src={cover} />
      
      <div className="data">
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <h3>{genre}</h3>
        <p>{year}</p>
      </div>
      {
        songs.map((e,i) => (
          <li key={i} onClick={() => handleSongClick(title, e.name)}>{e.name} : {e.duration}</li>
        ))
      }
    </div>
  )
}
function handleSongClick(title, song){
  console.log(`Wybrano utwór: ${song} z ${title}`)
}

export default function Gallery() {

  const [movie_search, setMovie_search] =useState<string>('');
  const [book_search, setBook_search] = useState<string>('');
  const [album_search, setAlbum_search] = useState<string>('');

  const movies: movie_props[] = [
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
  const books: book_props[] = [
    {
      cover: "https://m.media-amazon.com/images/I/81k3bgJ2EhL.jpg",
      title: "A Court of Thorns and Roses",
      year: 2015,
      pages: 419,
    },
    {
      cover: "https://m.media-amazon.com/images/I/91dQRqjWTbL._AC_UF1000,1000_QL80_.jpg",
      title: "The Cruel Prince",
      year: 2018,
      pages: 384,
    },
    {
      cover: "https://m.media-amazon.com/images/I/81sRNRNMvQL.jpg",
      title: "Powerless",
      year: 2023,
      pages: 502,
    },
  ];
  const albums: album_props[] = [
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/95c2f4ac6743a0ba3ccea71e8f47c4e8/1900x1900-000000-80-0-0.jpg",
      title: "Happy Never After",
      artist: "VOILÀ",
      genre: "Pop/rock",
      year: 2022,
      songs: Voila_songs,
    },
    {
      cover: "https://m.media-amazon.com/images/I/71ISQcvY70L.jpg",
      title: "Revolution Radio",
      artist: "Green Day",
      genre: "Southern Pop Punk",
      year: 2016,
      songs: Green_Day_songs,
    },
  ];
  return (
  <>
    <label htmlFor="movie-search">movie-search</label>
    <input type="text" id={'movie-search'} onChange={(event) => setMovie_search(event.target.value)}/>
    <div className='grid appear'>
      {
        movies.filter((movie) => movie.title.toLowerCase().includes(movie_search.toLowerCase())).map((e) => (
          <Movie title={e.title} date={e.date} img={e.img}/>
        ))
      }
    </div>

    <label htmlFor="book-search">book-search</label>
    <input type="text" id={'book-search'} onChange={(event) => setBook_search(event.target.value)}/>
    <div className="grid appear">
      {
        books.filter((book) => book.title.toLowerCase().includes(book_search.toLowerCase())).map((e) => (
          <Book cover={e.cover} title={e.title} year={e.year} pages={e.pages}/>
        ))
      }
    </div>
    <label htmlFor="album-search">album-search</label>
    <input type="text" id={'album-search'} onChange={(event) => setAlbum_search(event.target.value)}/>
    <div className="grid appear">
      {
        albums.filter((album) => album.title.toLowerCase().includes(album_search.toLowerCase())).map((e) => (
          <Album cover={e.cover} title={e.title} artist={e.artist} genre={e.genre} year={e.year} songs={e.songs}/>
        ))
      }
    </div>
  </>
  )
}