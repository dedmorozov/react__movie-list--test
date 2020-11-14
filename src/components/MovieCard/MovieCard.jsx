// import React from 'react';
// import PropTypes from 'prop-types';

// export const MovieCard = ({
//   title,
//   year,
//   imgUrl,
// }) => (
//   <>
//     <div className="card">
//       <div>
//         <figure>
//           <img
//             className="card__img"
//             src={imgUrl}
//             alt="Film logo"
//           />
//         </figure>
//       </div>

//       <div className="card__description description">
//         <h1 className="description__title">{title}</h1>
//         <p className="description__year">{year}</p>
//       </div>
//     </div>
//   </>
// );

// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';

// const ;

export const MovieCard = ({
  title,
  year,
  imgUrl,
  episode,
  openInNewTab,
}) => (
  <>
    <div className="card">
      <div>
        <button
          onClick={openInNewTab}
          type="button"
          className="button__link"
        >
          <img
            className="card__img"
            src={imgUrl}
            alt="Film logo"
          />
        </button>
      </div>

      <div className="card__description description">
        <h1 className="description__title">{title}</h1>
        <p className="description__year">{year}</p>
        <div className="description__episode">{episode}</div>
      </div>
    </div>
  </>
);
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  openInNewTab: PropTypes.func.isRequired,
};
