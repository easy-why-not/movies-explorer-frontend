import imgNotfound from '../images/not-found-image.jpeg';

export const base_url = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
// export const base_url = 'https://api.movies-attachment.nomoredomains.icu';
// Если нет картинки, покажи эту катинку
export const getCardImage = (moviesCard) => {
    if (moviesCard.image && moviesCard.image.url) {
        return `https://api.nomoreparties.co${moviesCard.image.url}`
    }
    if(moviesCard.image) {
        return moviesCard.image;
    }
    return imgNotfound;
};

export const getMovieDuration = (moviesCard) => {
    return `${Math.floor(moviesCard.duration / 60)}ч ${moviesCard.duration % 60}м`;
};

export const getMovieNumber = () => {
    if (window.innerWidth >= 900) {
        return 12;
    }
    if (window.innerWidth >= 768) {
        return 8;
    }
    if (window.innerWidth >= 429) {
        return 5;
    }
}

export const loadMovies = () => {
    if (window.innerWidth >= 900) {
        return 4;
    }
    return 2;
}

export const getMovieKey = (card) => {
    if (card.id) return card.id;
    if (card.movieId) return card.movieId;
    return "key";
};

function isCyrillic(str) {
    return /[а-яё]/i.test(str);
}

export const handleFilterMovies = (movies, value) => {
    return movies.filter((movie) => {
        if(isCyrillic(value)) {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase());
        }
        if (movie.nameEN) {
            return  movie.nameEN.toLowerCase().includes(value.toLowerCase())
        }
    })
}

export const handleCheckSaved = (movies, savedMovies) => {
    savedMovies.forEach((savedMovie) => {
        const myMovies = movies.find((item) => item.nameRU === savedMovie.nameRU);
        myMovies.isSaved = true;
    })
    return movies;
}

