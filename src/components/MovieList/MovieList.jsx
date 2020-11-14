/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

const openImage = url => window.open(
  url, '_blank', 'noopener, noreferrer',
);
const searchImage = seriesName => window.open(
  `https://google.com/search?q=${seriesName} series pictures`,
  '_blank', 'noopener, noreferrer',
);

export const MovieList = ({ preparedShows }) => (
  <div className="content">
    <ul className="content__list list">
      {preparedShows.map(item => (
        <li key={item.id} className="list__item">
          <MovieCard
            title={item._embedded.show.name}
            year={(item._embedded.show.premiered)
              .split('', 4)
              .join('')}
            imgUrl={
              item._embedded.show.image !== null
                ? item._embedded.show.image.medium
                : ''
            }
            episode={`Сезон: ${item.season} Эпизод: ${item.number}`}
            openInNewTab={
              item._embedded.show.image !== null
                ? () => openImage(item._embedded.show.image.original)
                : () => searchImage(item._embedded.show.name)
            }
          />
        </li>
      ))}
    </ul>
  </div>
);

MovieList.propTypes = {
  preparedShows: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  preparedShows: [],
};
