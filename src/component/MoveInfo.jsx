import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MoveInfo = () => {
    const param = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // الحصول على تفاصيل الفيلم
    const getMovieDetails = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
            setMovie(res.data);
        } catch (err) {
            setError('حدث خطأ أثناء تحميل بيانات الفيلم.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, [param.id]);

    if (loading) {
        return <div>جاري التحميل...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <Row className="justify-content-center">
                <Col md="10"  xs="12" className="mt-4">
                    <div className="card-details d-flex flex-column flex-md-row align-items-center">
                        <img
                            className="img-movie  w-md-30 mb-3 mb-md-0"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="justify-content-center text-center mx-auto mt-3 mt-md-0">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين: {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="10" xs="12" className="mt-1">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-4">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col className="mt-2 text-center">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2"
                        >
                            عوده للرئيسيه
                        </button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default MoveInfo;
