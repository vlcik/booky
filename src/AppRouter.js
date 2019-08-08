import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddBook from './components/book/AddBook';
import Header from './components/Header'
import BookDashboard from './components/book/BookDashboard'
import Footer from './components/Footer'

const appRouter = () => {
    return (
        <Router>
            <div className="container">
                <div className="row pb-3">
                    <Header /> 
                </div>

                <div className="row pb-3">
                    <Route exact path="/books/add" component={ AddBook } />
                    <Route exact path="/" component={ BookDashboard } />
                </div>

                <div className="row pb-3">
                    <Footer />
               </div>
            </div>
        </Router>
    );
}

export default appRouter;