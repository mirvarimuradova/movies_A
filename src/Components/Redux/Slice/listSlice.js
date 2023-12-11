import { createSlice } from "@reduxjs/toolkit";


let initialState = {
      listMovies:[],
    };
const listSlice= createSlice({
    
    name:"list",
    initialState,
reducers:{
    addMovies:(state,action)=>{
     
const newMovie=action.payload;

if (state.listMovies.length!=0) {
    
    const existingItem = state.listMovies.find(
        (item) => item.imdbID==newMovie.imdbID);
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
}}
   
},
deletMovies:(state,action)=>{
    const deletedMovie= action.payload;
    const existingItem = state.listMovies.find(
        (item) => item.imdbID == deletedMovie.imdbID);
        if (existingItem) {
            state.listMovies=state.listMovies.filter(item=>item.imdbID!=deletedMovie.imdbID)
        }
        
}
});
export const listActions=listSlice.actions;
export default listSlice.reducer;
    