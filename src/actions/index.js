import bookApi from '../apis/bookApi';
import { FETCH_BOOKS, FETCH_BOOK, TOGGLE_FAVORITES, INPUT_CHANGE, SEARCH } from './type';

const KEY = 'AIzaSyAbkGeFfQDSyvjZbB7aK1YuZ-6cSs3G-VA';

export const inputChange = input => {
    return {
        type: INPUT_CHANGE,
        payload: input
    }
}

export const search = input => {
    return {
        type: SEARCH,
        payload: input
    }
}

export const fetchBook = id => async dispatch => {
    const response = await bookApi.get(`/volumes/${id}`, {
        params: {
            key: KEY
        }
    });

    dispatch({ type: FETCH_BOOK, payload: response.data });
};

export const fetchBooks = input => async dispatch => {
    const response = await bookApi.get('/volumes', {
        params: {
            key: KEY,
            q: input
        }
    });

    dispatch({ type: FETCH_BOOKS, payload: response.data.items });
};

export const toggleFavorites = book => {
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', '[]');
    }
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    let includes = false;
    let index;

    if (favorites.length !== 0) {
        favorites.forEach((el, idx) => {
            if (el.id === book.id) {
                includes = true;
                index = idx;
            }
        });
    }
    if (includes) {
        favorites.splice(index, 1);
    } else {
        favorites.push(book);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return {
        type: TOGGLE_FAVORITES,
        payload: favorites
    }
}