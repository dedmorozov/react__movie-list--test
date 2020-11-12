import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
// import { Portal } from '../Portal/Portal';
import { getShow } from '../../components/api';

// const list = 'http://api.tvmaze.com/shows';
import televisor from '../../styles/images/televisor.png';

export class MovieList extends PureComponent {
  state = {
    date: '10 июля 2018',
  }

  render() {
    // const currentDay = .find(x => x.id === selectedDay);
    const { date } = this.state;

    return (
      // <>
        <div className="content">
          <div className="content__date date">
            <h1 className="date__text">{date}</h1>
          </div>
          <ul className="content__list">
            {/* {list.map(item => (
              <li key={item.id}>
                <MovieCard
                  title={item.show.name}
                  year={item.show.premiered.join('', 4)}
                  imgUrl={item.image.medium}
                />
              </li>
            ))} */}
            <li>
              <div className="card">
                <div className="card__img">
                  <figure>
                    {/* <img
                      src={televisor}
                      alt="Film logo"
                    /> */}
                  </figure>
                </div>

                <div className="card__description description">
                  <h5 className="description__title">Теория большого взрыва</h5>
                  <p className="description__year">2013</p>
                </div>
              </div>
            </li>
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
