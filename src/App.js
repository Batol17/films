import { Container } from 'react-bootstrap';
import NavBar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './component/ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoveInfo from './component/MoveInfo';
function App() {
  
  const [movies,setMovie]=useState([])
  const [pageCount,setpageCount]=useState(0)

  // get all movies
  const getMovies=async()=>{
    const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5d508e59f988c22408600613701191e9&language=ar`)
        console.log(res)
        setMovie(res.data.results)
        setpageCount(res.data.total_pages)

     }
     useEffect(()=>{
      getMovies()
     },[])

     // to search in api
     const searchMovies=async (word)=>{
      if(word === ''){
        getMovies();
      }
      else{
        const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d508e59f988c22408600613701191e9&query=${word}&language=ar`)
      
        setMovie(res.data.results)
        setpageCount(res.data.total_pages)
      }

     }     
     
      //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5d508e59f988c22408600613701191e9&language=ar&page=${page}`)
    setMovie(res.data.results)
    setpageCount(res.data.total_pages)
   
  }

  return (
    <div className="App">
      <NavBar searchMovies={searchMovies} />
      <Container>
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<ItemList movies={movies}  getPage={getPage} pageCount={pageCount}/>}/>
           <Route path='/movies/:id' element={<MoveInfo />}/>
        </Routes>
        </BrowserRouter>
          
      </Container>
    </div>
  );
}

export default App;
