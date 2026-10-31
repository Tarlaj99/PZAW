import { Voila_songs , Green_Day_songs} from './Album_songs.ts';
import './App.css'
console.log(Voila_songs);
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
          <li key={i}>{e.name} : {e.duration}</li>
        ))
      }
    </div>
  )
}
function Zadanie1() {
  return (
  <>
    <div className='grid'>
      <Movie title='Matrix' date={1999} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10'/>
      <Movie title='Star Wars I: The Phantom Menace' date={1999} img='https://thumb.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/250px-Star_Wars_Phantom_Menace_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'/>
      <Movie title='Taxi 3' date={2003} img='https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg'/>
    </div>
    <div className="grid">
      <Book cover='https://m.media-amazon.com/images/I/81k3bgJ2EhL.jpg' title='A Court of Thorns and Roses' year={2015} pages={419}/>
      <Book cover='https://m.media-amazon.com/images/I/91dQRqjWTbL._AC_UF1000,1000_QL80_.jpg' title='The Cruel Prince' year={2018} pages={384}/>
      <Book cover='https://m.media-amazon.com/images/I/81sRNRNMvQL.jpg' title='Powerless' year={2023} pages={502} />
    </div>
    <div className="grid">
      <Album cover='https://cdn-images.dzcdn.net/images/cover/95c2f4ac6743a0ba3ccea71e8f47c4e8/1900x1900-000000-80-0-0.jpg' title='Happy Never After' artist='VOILÀ' genre='Pop/rock' year={2022} songs={Voila_songs} />
      <Album cover='https://m.media-amazon.com/images/I/71ISQcvY70L.jpg' title='Revolution Radio' artist='Green Day' genre='Souththern Pop Punk' year={2016} songs={Green_Day_songs} />
    </div>
  </>
  )
}
export default Zadanie1
