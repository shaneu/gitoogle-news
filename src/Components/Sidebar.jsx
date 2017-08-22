import React, { Component } from 'react';

class Sidebar extends Component {
  getLanguage = language => {
    this.props.updateLanguage(language);
  };

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <aside className="sidebar basic-container">
        <ul>
          {languages.map(language =>
            <li key={language} className="is-blue">
              <button className="button sidebar-button" onClick={() => this.getLanguage(language)}>
                {language}
              </button>
            </li>,
          )}
        </ul>
      </aside>
    );
  }
}
export default Sidebar;
