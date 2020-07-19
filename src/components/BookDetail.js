import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBook, toggleFavorites } from '../actions';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import NotFoundMessage from './NotFoundMessage';

import ReactHtmlParser from 'react-html-parser';

import noImage from '../images/no-image.png';

const BookDetail = (props) => {
    const { favorites, bookDetail, toggleFavorites, fetchBook } = props;
    const { id } = props.match.params;

    useEffect(() => {
        fetchBook(id);
    }, [fetchBook, id]);


    let renderBook = <NotFoundMessage message="Book Not Found" />;


    const renderDimension = () => {
        return (
            <>
                <span>Dimensions:</span>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Thickness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bookDetail.volumeInfo.dimensions.height}</td>
                            <td>{bookDetail.volumeInfo.dimensions.width}</td>
                            <td>{bookDetail.volumeInfo.dimensions.thickness}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }



    if (bookDetail.id !== undefined) {
        const ids = favorites.map(book => book.id);

        renderBook = (
            <section className="book-detail">
                <Row>
                    <Col md={6} lg={4}>
                        <Card.Img src={bookDetail.volumeInfo.imageLinks.large || noImage} />
                        <div className="mt-3" style={{ textAlign: 'center' }}>
                            <button
                                onClick={() => toggleFavorites(bookDetail)}
                                className={`btn btn-outline-${ids.includes(bookDetail.id) ? 'danger' : 'success'}`}
                                title={ids.includes(bookDetail.id) ? 'Remove From Favorites' : 'Add To Favoites'}
                            >
                                <i className="fab fa-gratipay"></i>
                            </button>
                        </div>
                    </Col>
                    <Col md={6} lg={8}>
                        <Card.Body className="d-flex flex-column">
                            <span>Title:</span>
                            <Card.Title>{bookDetail.volumeInfo.title}</Card.Title>
                            <Card.Text className="mb-3">
                                by {bookDetail.volumeInfo.authors ? bookDetail.volumeInfo.authors.map((author, idx) => <em key={idx}>{author} &nbsp;</em>) : null}
                            </Card.Text>
                            <span>Published on:</span>
                            <Card.Text>
                                {bookDetail.volumeInfo.publishedDate}
                            </Card.Text>
                            {bookDetail.volumeInfo.dimensions ? renderDimension() : null}

                            <span>Description:</span>
                            <div className="card-text mb-3">
                                {bookDetail.volumeInfo.description ? ReactHtmlParser(bookDetail.volumeInfo.description) : 'No description'}
                            </div>
                            <span>Average Rating:</span>
                            <Card.Text>
                                {bookDetail.volumeInfo.averageRating}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </section >
        );
    }


    return (
        <section>
            <div className="page mb-4">
                <span>Detailed Info</span>
            </div>
            <Row>
                {renderBook}
            </Row>
        </section>
    );
}

const mapStateToProps = state => {
    const { bookDetail, favorites } = state;

    return { bookDetail, favorites };
}

export default connect(mapStateToProps, { fetchBook, toggleFavorites })(BookDetail);