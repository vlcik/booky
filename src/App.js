import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddBook from './components/book/AddBook';
import Header from './components/Header'
import BookDashboard from './components/book/BookDashboard'
import BookDetail from './components/book/BookDetail'
import AuthorDashboard from './components/author/AuthorDashboard';
import Footer from './components/Footer'

const app = () => {
    return (
        <Router>
            <div className="container">
                <div className="row pb-3">
                    <Header /> 
                </div>

                <div className="row pb-3">
                    <Route exact path="/" component={ BookDashboard } />
                    <Route path={ '/books/:id' } component={ BookDetail } />
                    <Route path="/books/add" component={ AddBook } />
                    <Route path="/authors" component={ AuthorDashboard } />
                </div>

                <div className="row pb-3">
                    <Footer />
               </div>
            </div>
        </Router>
    );
}

export default app;