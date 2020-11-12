import React from 'react';
import Calendar from 'react-calendar';
import { MovieList } from './components/MovieList/MovieList';

import { request } from './components/api';

import televisor from './styles/images/televisor.png';

import './App.css';
import '../../app/node_modules/react-calendar/dist/Calendar.css';

class App extends React.Component {
  state = {
    selectedDay: null,
    isSelected: false,
  };

  onDaySelected = (selected) => {
    this.setState({
      selectedDay: new Date(selected),
      isSelected: true,
    });
  }

  getShow(date) {
    const show = request(`/schedule?country=US&date=${date}`);
  
    return show;
  }

  goBack = () => {
    this.setState({
      selectedDay: null,
      isSelected: false,
    });
  }

  render() {
    const { selectedDay, isSelected } = this.state;
    // const { showId } = this.props;
    const { onDaySelected } = this;

    return (
      <>
        <header className="container header">
          <div className="header__title">  
            <h1 className="header__title header__title--text">SUPER FILM</h1>
          </div>
        </header>
        {!isSelected
          ? (
            <>
              <section className="block">
                <div className="block__start start">
                  <div>
                    <img
                      className="start__img"
                      src={televisor}
                      alt="tv"
                      />
                  </div>
                  <p className="start__text">
                    Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день
                  </p>
                </div>
              </section>

              <Calendar onClickDay={onDaySelected} />
            </>
            )
          : (
            <>
              <div className="content__date date">
                <h1 className="date__text">{selectedDay.toLocaleString('ru', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }).slice(0, -3)}
                </h1>
              </div>
              
              <button
                type="button"
                onClick={this.goBack}
                className="header__button button"
                />
              {/* <MovieList /> */}

              <div className="content">
                <ul className="content__list">
                  {request(`/shows`)}
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

            </>
          )
        }
      </>
      );
  }
}

export default App;
