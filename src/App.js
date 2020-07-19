import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Navbar';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookDetail from './components/BookDetail';

import Slider from './components/Slider';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Slider />
                <main className="container py-5 mt-5">
                    <Switch>
                        <Route path="/" exact component={BookList} />
                        <Route path="/books/favorites" exact component={Favorites} />
                        <Route path="/books/:id" exact component={BookDetail} />
                    </Switch>
                </main>
            </BrowserRouter>
        </>
    );
};

export default App;