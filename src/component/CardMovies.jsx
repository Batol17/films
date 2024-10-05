import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardMovies({move}) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
         <Link to={`/movies/${move.id}`}>
            <div className="card my-1" style={{height:' 400px'}}>
              <img src={`https://image.tmdb.org/t/p/w500/`+ move.poster_path} alt="" className="card-image" />
              <div className="card-overlay">
                <div className="overlay-text text-center w-100 p-2">
                  <p>اسم الفيلم :{move.original_title} </p>
                  <p> تاريخ الاصدار  : {move.release_date}</p>
                  <p> عدد المقيمين: {move.vote_count}</p>
                  <p>التقييم  :{move.vote_average} </p>
                </div>
              </div>
            </div>
       
         </Link>
     </Col>
  )
}

export default CardMovies