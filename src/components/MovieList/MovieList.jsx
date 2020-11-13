import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

import { getApi } from '../api'

export class MovieList extends PureComponent {
  state = {
    shows: [],
  }

  componentDidMount() {
    getApi('/schedule').then(result => this.setState({shows: result}))
  }

  render() {
    const { shows } = this.state;

    return (
      // <>
        <div className="content">
          <ul className="content__list list">
            {shows.map(item => (
              <li key={item.show.id} className="list__item">
                <MovieCard
                  title={item.show.name}
                  year={(item.show.premiered).split('', 4)}
                  // imgUrl={item.show.image.original}
                  imgUrl={"http://static.tvmaze.com/uploads/images/medium_portrait/214/535400.jpg"}
                />
              </li>
            ))}
          </ul>
        </div>
      // </>
    )
  }
  
}

// MovieList.propTypes = {
//   selectedDay: PropTypes.number.isRequired,
//   isSelected: PropTypes.bool,
// }

// MovieList.defaultProps = {
//   isSelected: false,
// }
