import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SearchAPI, SearchAPIResponse } from '../../services/SearchAPI';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import './PageLayout.scss';
const PageLayout = (): React.ReactElement => {
  const [
    searchResponse,
    setSearchResponse,
  ] = useState<SearchAPIResponse | null>(null);

  const getMovies = (search: string) => {
    SearchAPI(search).then((data) => {
      setSearchResponse(data.data);
    });
  };

  return (
    <Container>
      <Row>
        <Col className="searchBarColumn" lg={12}>
          <SearchBar searchButtonClick={getMovies} />
        </Col>
        {searchResponse &&
          searchResponse.results.map((data, index) => (
            <Col key={index} lg={4}>
              <MovieCard {...data} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PageLayout;
