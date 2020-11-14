/* eslint-disable no-underscore-dangle */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export class MovieList extends PureComponent {
  state = {

  }

  render() {
    const { preparedShows = [] } = this.props;

    return (
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
                    // eslint-disable-next-line
                    ? () => window.open(
                      item._embedded.show.image.original,
                      '_blank', 'noopener, noreferrer',
                    )
                    // eslint-disable-next-line
                    : () =>  window.open(`https://google.com/search?q=${item._embedded.show.name} series pictures`,
                      '_blank', 'noopener, noreferrer')
                }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MovieList.propTypes = {
  /* eslint-disable-next-line */
  preparedShows: PropTypes.array.isRequired,
};
