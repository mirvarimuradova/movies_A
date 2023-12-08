import { createSlice } from "@reduxjs/toolkit";


let initialState = {
      listMovies:[],
    };
const listSlice= createSlice({
    
    name:"list",
    initialState,
reducers:{
    addMovies:(state,action)=>{
        debugger;
const newMovie=action.payload;
if (!state.listMovies.length==0) {
    
    const existingItem = state.listMovies.find(
        (item) => item.Title==newMovie.Title);
        if (!existingItem){
    state.listMovies.push(
        {
            Poster:newMovie.Poster,
            Title:newMovie.Title,
            Type:newMovie.Type,
            Year:newMovie.Year,
            imdbID:newMovie.imdbID,
        },
        
    );
   
        }
}else{
    state.listMovies.push(
        {
            Poster:newMovie.Poster,
            Title:newMovie.Title,
            Type:newMovie.Type,
            Year:newMovie.Year,
            imdbID:newMovie.imdbID
        }
    )
   console.log(state.listMovies)
}
   
},
deletMovies:(state,action)=>{
    const deletedMovie= action.payload;
    const existingItem = state.cartItems.find(
        (item) => item.Title == deletedMovie.Title);
        if (existingItem) {
            state.listMovies=state.listMovies.filter(item=>item.Title!=deletedMovie.Title)
        }
        
}
}});
export const listActions=listSlice.actions;
export default listSlice.reducer;
    