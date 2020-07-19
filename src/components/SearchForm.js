import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ onSearch, onChange }) => {
    return (
        <section className="mb-3">
            <Form onSubmit={onSearch} className="input-group">
                <Form.Control
                    className="mr-1"
                    onChange={onChange}
                    placeholder="Search Book"
                />
                <div className="input-group-append">
                    <Button
                        variant="outline-primary"
                        type="submit">
                        Search
                    </Button>
                </div>
            </Form>
        </section >
    );
}

export default SearchForm;