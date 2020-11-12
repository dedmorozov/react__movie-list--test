import React from 'react';
import Calendar from 'react-calendar';
import { MovieList } from './components/MovieList/MovieList';

import televisor from './styles/images/televisor.png';

import './App.css';
import '../../app/node_modules/react-calendar/dist/Calendar.css';

class App extends React.Component {
  state = {
    selectedDay: '',
    isSelected: false,
  };

  onDaySelected = (selected) => {
    this.setState({
      selectedDay: selected,
      isSelected: true,
    });
  }

  goBack = () => {
    this.setState({
      selectedDay: '',
      isSelected: false,
    });
  }

  render() {
    const { selectedDay, isSelected } = this.state;
    const { showId } = this.props;
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
            <div>
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
            </div>
            )
          : (
            <div>
              <button
                type="button"
                onClick={this.goBack}
                className="header__button button"
              />
              <MovieList />
            </div>
          )
        }
      </>
      );
  }
}

export default App;
