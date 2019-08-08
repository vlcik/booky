import React, { Component } from 'react';

class AddBook extends Component  {

  render () {
    return (
      <div>
        <h2>
          Add new Book
        </h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Author"/>
        </div>
        <div className="form-group">
        <label htmlFor="genre">Genre</label>
          <select className="custom-select">
            <option>Genre</option>
            <option value="1">Fantasy</option>
            <option value="2">Crimi</option>
            <option value="3">Love story</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    );
  }
}

export default AddBook;