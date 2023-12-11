import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ListDetail() {

    const listMovies=useSelector((state)=>state.list.listMovies)

    console.log(listMovies)
  return (
    <div>
      <nav>
        <h1>MOvies</h1>
        <div className='div1'>
        <button className='section1' > <Link to={'/'}>Home</Link> </button>
        <button className='section2'><Link to={'/details'}> </Link></button>
        <button className='section2'><Link to={'/ListDetail'}> </Link></button>
        </div>
      </nav>
      

     
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Type</th>
            <th>Year</th>
            <th>imdbID</th>
          </tr>
        </thead>
        <tbody>
        {
listMovies.map((item)=>(
<tr>
  <td>{item.Poster}</td>
  <td>{item.Title}</td>
  <td>{item.Type}</td>
  <td>{item.Year}</td>
  <td>{item.imdbID}</td>
</tr>
))
    }
        </tbody>
   

 
    </div>
  )
}

export default ListDetail
