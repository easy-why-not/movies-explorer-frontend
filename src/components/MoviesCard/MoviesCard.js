import React from 'react';
import { useLocation } from 'react-router-dom';

import { getCardImage, getMovieDuration } from '../../utils/utils';

function MoviesCard ({ moviesCard }) {

    const location = useLocation();

    const isSavedMoviesPage = location.pathname === "/saved-movies";

    return (
        <li className='movieCard'>
            <a className='movieCard__container' href={moviesCard.trailerLink} target="_blank" rel = "noreferrer">
                <img className='movieCard__image' src={getCardImage(moviesCard)} alt="Картинка"/>
            </a>
            <div className='movieCard__items'>
                <div className='movieCard__text'>
                    <h2 className='movieCard__title'>{moviesCard.nameRU}</h2>
                    <p className='movieCard__duration'>{getMovieDuration(moviesCard)}</p>
                </div>
                <button className={isSavedMoviesPage ? 'movieCard__button-delete ' : 'movieCard__button movieCard__button-active'} />
            </div>
        </li>
    );
}

export default MoviesCard;
