import React from "react";
import { Row, Col, ArtWork } from '../../../rakutenUI/RakutenUI';
import './MoviesList.css';

const MovieList = (props) => {
  const { list } = props;
  return (
    <div>
      <Row>
        <Col>
          <h3>{list.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='artwork-list'>
            {list.contents.data.map((movie) => {
              return (<ArtWork key={movie.id} movie={movie} to={'/movie'}/>)
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;