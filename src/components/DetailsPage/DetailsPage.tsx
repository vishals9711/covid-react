import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import { OTT_PLATFORM_INFO } from '../../constants/constants';
import {
  MovieApiResponse,
  movieDetails,
  OTT,
} from '../../services/movieDetailsService';
import './DetailsPage.scss';

const DetailsPage = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<MovieApiResponse | null>(null);
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    movieDetails(id).then((data) => {
      setData(data.data);
    });
  }, [id]);
  const returnGenres = (
    genreObj: Array<{ id: number; name: string }>
  ): string => {
    const array = genreObj.map((genre) => genre.name);
    let genres = '';
    array.forEach((name, index) => {
      if (name) genres += index !== array.length - 1 ? name + ' | ' : name;
    });
    return genres;
  };

  const returnOTTPlatforms = (ott: Array<OTT>) => {
    const ottData = ott
      .map((elem) => {
        const ottDetails = OTT_PLATFORM_INFO.find(
          (obj) => obj.value === elem.platform
        );
        if (ottDetails)
          return {
            ...ottDetails,
            url: elem.url,
          };
        else return null;
      })
      .filter((elem) => elem)
      .sort((a, b) => {
        if (a && b) {
          if (a.display_priority > b.display_priority) return 1;
          else if (a.display_priority < b.display_priority) return -1;
          else return 0;
        } else return 0;
      })
      .slice(0, 4);
    return (
      <>
        <div className="ottSection">
          <div className="ottLogos">
            {ottData.map(
              (data) =>
                data && (
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ottAnchor"
                  >
                    <img
                      src={baseUrl + data.logo_path}
                      alt={data.provider_name}
                    />
                    <div>{data.provider_name}</div>
                  </a>
                )
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="detailsPage">
      {data && (
        <>
          <div className="detailsDiv">
            <Row>
              <Col lg={8}>
                <div
                  className="detailsPageBg"
                  style={{
                    background: `url(${baseUrl}${data?.backdrop_path})`,
                  }}
                ></div>
                <div className="titleDiv">
                  <div className="tagLine">{data.overview}</div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="rightCol">
                  <Row>
                    <Col>
                      <img
                        src={baseUrl + data.poster_path}
                        alt={'poster'}
                        className="posterImg"
                      />
                    </Col>
                    <Col>
                      {' '}
                      <div className="title">{data.title}</div>
                      <div className="genres">{returnGenres(data.genres)}</div>
                    </Col>
                  </Row>
                  <Row className="ottPlatformRow">
                    <Col>
                      <div className="ottPlatform">OTT Platforms</div>
                      <div className="platforms">
                        {data &&
                          data['ott-details'] &&
                          data['ott-details']['IN'] &&
                          returnOTTPlatforms(data['ott-details']['IN'])}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
