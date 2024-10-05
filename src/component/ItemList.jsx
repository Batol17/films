import {  Row } from 'react-bootstrap';
import Pagination from './Pagination';
import CardMovies from './CardMovies';
function ItemList({movies,getPage,pageCount}) {

  return (
 
   
   <Row className="mt-3">
   {movies.length >= 1 ? (movies.map((mov) => {
     return (<CardMovies key={mov.id} move={mov}   />)
   })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

   {movies.length >= 1 ? (<Pagination pageCount={pageCount} getPage={getPage}/>) : null}

 </Row>
  );
}

export default ItemList;