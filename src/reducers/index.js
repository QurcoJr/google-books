import { FETCH_BOOK, FETCH_BOOKS, TOGGLE_FAVORITES, INPUT_CHANGE, SEARCH } from '../actions/type';

if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
}

const INITIAL_STATE = {
    books: [],
    bookDetail: {},
    favorites: JSON.parse(localStorage.getItem('favorites')),
    input: '',
    searchTerm: 'harry potter'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_BOOK: 
            return {...state, bookDetail: action.payload}
        case FETCH_BOOKS:
            return { ...state, books: action.payload }
        case INPUT_CHANGE:
            return { ...state, input: action.payload }
        case SEARCH: 
            return {...state, searchTerm: action.payload}
        case TOGGLE_FAVORITES:
            return { ...state, favorites: action.payload }
        default:
            return state;
    }
};