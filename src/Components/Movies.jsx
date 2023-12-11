import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import { listActions } from './Redux/Slice/listSlice';
import ListDetailModal from "./ListDeatilModal"
import Foto from "../Components/images/exitIcon.png"

const Movies = () => {

    
  const listItems=useSelector((state)=>state.list.listMovies)
    let i = document.querySelector('input')
    const[film,setFilm] = useState("harry")
    const[ text,setText] = useState([])
    useEffect(() => {
      fetch(`https://www.omdbapi.com/?s=${film.split(" ").join("%20")}&apikey=3003361e`)
      .then(res =>{
        return res.json();
      })
      .then(data =>{ 
        console.log(data);
        setText(data.Search)
        console.log(text)
        
      })
    },[film])
    
    function searchMovies(){
      setFilm(document.querySelector('.inputt').value)
      console.log(text)
    }
    
    const dispatch=useDispatch();
    function addListMovie(id){
     
     const movie =text.find((movie)=>movie.imdbID==id)

      
dispatch(
  listActions.addMovies ({
  Poster:movie.Poster,
  Title:movie.Title,
  Type:movie.Type,
  Year:movie.Year,
  imdbID:movie.imdbID
})
)

    }
    var counter=0;
  function ModalActive() {
    const modal=document.querySelector(".listMoviesModal")
    console.log(modal.classList)
   
    if (counter==0) {
      modal.classList.add('display')
      counter++;
    }else  if (counter>0) {
      
      modal.classList.remove("display")
  
      counter=0
      
    }
    
  
  }
    return (
    <div>
      <nav>
        <h1>MOvies</h1>
        <div className='div1'>
        <button className='section1' > <Link to={'/'}>Home</Link> </button>
        
        <button className='section3' onClick={ModalActive}> List</button>
       
       <section className='listMoviesModal'>
       <img className='exit' onClick={ModalActive} src={Foto} alt="" width={20} height={20} />
       <ListDetailModal/>
      
       <button className='saxla' >yadda saxla</button>
        </section> 
        </div>
      </nav>
      <div className='div1'>
      <input  className="inputt" placeholder='   search...' type="text"  />

      <button  className='buttonSearch' onClick={searchMovies}  >search</button>
      </div>
     <main>
       
     { 
      
      text.map(e => (
       e.Title !=null &&
        <div className='card'>
         <img src={e.Poster}/> 
        <p> {e.Title}</p><span>({e.Year})</span>
        <button className='button' onClick={()=>addListMovie(e.imdbID)}  >Add list</button>
        {/* <div className='list'>{e.Title}</div> */}
         <button className='button'><Link  to={`/details/${e.imdbID}`}>details</Link></button>
        </div>
      ))
     
       
     }
     </main>
      
     
      <Details/>
      
      
    </div>
  )
}

export default Movies
