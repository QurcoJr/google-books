import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CustomCard = ({ book, toggleFavorites, favorites }) => {
    const ids = favorites.map(book => book.id);

    return (
        <Col key={book.id} md={6} lg={4} className="mt-5">
            <article className="card mr-2">
                <Row className="no-gutters">
                    <Col xs={4}>
                        <Card.Img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} />
                    </Col>
                    <Col xs={8}>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <Card.Text className="mb-3">
                                {book.volumeInfo.description ? book.volumeInfo.description.split(' ').slice(0, 9).join(' ').replace(/(<([^>]+)>)/ig, '') + '...' : 'No description'}
                            </Card.Text>
                            <Row className="card-foot">
                                <Link
                                    to={`/books/${book.id}`}
                                    className="btn btn-outline-primary mx-3"
                                    title="Read More Information"
                                >Read More</Link>
                                <button
                                    onClick={() => toggleFavorites(book)}
                                    className={`btn btn-outline-${ids.includes(book.id) ? 'danger' : 'success'}`}
                                    title={ids.includes(book.id) ? 'Remove From Favorites' : 'Add To Favoites'}
                                >
                                    <i className="fab fa-gratipay"></i>

                                </button>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </article>
        </Col>
    );
}

export default CustomCard;