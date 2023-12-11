import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Foto from "../Components/images/exitIcon.png"
import { listActions } from './Redux/Slice/listSlice';


const ListDeatilModal = () => {
    const listMovies=useSelector((state)=>state.list.listMovies)
    const dispatch=useDispatch();
  
  
function ItemDelet(id) {

  dispatch(
    listActions.deletMovies({
      imdbID:id
    })
  )
}
  return (
    <div className='parent'>


        {
listMovies.map((item)=>(

<div>
<p>{item.Title} <img  src={Foto} alt="exit" width={50}  className='exitClass' onClick={()=>ItemDelet(item.imdbID)} /></p>
</div>

))
    }
     
    </div>
  )
}

export default ListDeatilModal
