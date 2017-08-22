import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    searchTerm: '',
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    let utilSpace;
    if (this.props.showLogo) {
      utilSpace = <h1 className="header-title">Gitoogle News</h1>;
    } else {
      utilSpace = (
        <Link to="/" className="back-button">
          <svg height="24px" width="24px" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Link>
      );
    }
    return (
      <header className="header">
        {utilSpace}
        <form className="search-form" action="/search" method="get">
          <button className="search-button" type="submit">
            <svg height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
          <input
            type="text"
            className="search-input"
            name="q"
            required
            value={this.state.searchTerm}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </form>
        <a href="https://github.com/shaneu" target="_blank" rel="noopener noreferrer" className="personal-picture-link">
          <img
            alt="Shane Unger"
            className="personal-picture"
            src="https://lh3.googleusercontent.com/-xlgSXthR9NU/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUpaOEY4oPYFLiNUd6TBD6pWI3D73g/s192-c-mo/photo.jpg"
          />
        </a>
      </header>
    );
  }
}

export default Header;
