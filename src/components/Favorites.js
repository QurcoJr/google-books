import React from 'react';
import { connect } from 'react-redux';

import { toggleFavorites } from '../actions';
import CustomCard from './CustomCard';
import NotFoundMessage from './NotFoundMessage';

import Row from 'react-bootstrap/Row';

const Favorites = ({ favorites, toggleFavorites }) => {
    let renderFavorites = <NotFoundMessage message="Favorites Is Empty..." />;

    if (favorites.length !== 0) {
        renderFavorites = favorites.map(book => <CustomCard
            key={book.id}
            book={book}
            toggleFavorites={toggleFavorites}
            favorites={favorites} />);
    }
    return (
        <>
            <div className="page mb-4">
                <span>Favorites</span>
            </div>
            <Row>
                {renderFavorites}
            </Row>
        </>
    );
}

const mapStateToProps = state => {
    return { favorites: state.favorites };
}

export default connect(mapStateToProps, { toggleFavorites })(Favorites);