import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import image from '../images/logo.png';

const Navbar = ({ searchMovies }) => {
  const onSearch = (word) => {
    searchMovies(word);
  };

  return (
    <div className="nav-style w-100 py-1">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} sm={4} md={2} lg={1}>
            <a href="/">
              <img className="logo" src={image} alt="logo" />
            </a>
          </Col>
          <Col xs={6} sm={8} md={10} lg={11} className="d-flex align-items-center">
            <div className="search w-100 d-flex align-items-center">
              <i className="fa fa-search me-2"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
