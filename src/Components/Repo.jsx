import React, { Component } from 'react';
import ArticleSidebar from './ArticleSidebar';
import ArticleMain from './ArticleMain';

class Repo extends Component {
  state = {
    isHidden: true,
  };

  componentDidMount = () => {
    this.setState({ isHidden: this.props.isHidden });
  };

  collapseExpand = event => {
    if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
      return;
    }
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  };

  render() {
    return (
      <article>
        <div role="button" className="basic-container repo-article-grid" tabIndex={0} onClick={this.collapseExpand}>
          <ArticleSidebar repoInfo={this.props.repoInfo} isHidden={this.state.isHidden} />
          <ArticleMain
            repoInfo={this.props.repoInfo}
            isHidden={this.state.isHidden}
            grabLinkText={this.props.grabLinkText}
            showModal={this.props.showModal}
          />
          <footer className="article-footer">
            <a
              href={`${this.props.repoInfo.html_url}/issues`}
              target="_blank"
              className={`arrow is-blue ${this.state.isHidden ? `is-hidden` : ''}`}
            >
              View open issues
            </a>
            <button className={`collapse-arrow ${this.state.isHidden ? `down-arrow` : `up-arrow`}`} />
          </footer>
        </div>
      </article>
    );
  }
}

export default Repo;
