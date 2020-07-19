import React, { useEffect } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

import { fetchBooks, inputChange, toggleFavorites, search } from '../actions';
import CustomCard from './CustomCard';
import NotFoundMessage from './NotFoundMessage';

import Spinner from 'react-bootstrap/Spinner';


const BookList = (props) => {
    const { fetchBooks, searchTerm, inputChange, favorites, toggleFavorites, books, input, search } = props;

    useEffect(() => {
        fetchBooks(searchTerm);
    }, [searchTerm, fetchBooks]);

    const onChange = event => {
        inputChange(event.target.value);
    }

    const onSearch = event => {
        event.preventDefault();
        search(input);
    }

    let rendBooks = (
        <div className="spinner-container d-flex justify-content-center w-100">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );

    if (books !== undefined && books.length !== 0)
        rendBooks = books.map(book => <CustomCard
            key={book.id}
            book={book}
            toggleFavorites={toggleFavorites}
            favorites={favorites} />);


    if (books === undefined) {
        rendBooks = <NotFoundMessage message="Books Not Found" />;
    }
    return (
        <>
            <SearchForm onSearch={onSearch} onChange={onChange} />
            <div className="page mb-4">
                <span>Books</span>
            </div>
            <section className="row">{rendBooks}</section>
        </>
    );
}

const mapStateToProps = state => {
    const { books, favorites, input, searchTerm } = state;
    return { books, favorites, input, searchTerm };
};

export default connect(mapStateToProps, {
    fetchBooks,
    search,
    inputChange,
    toggleFavorites
})(BookList);