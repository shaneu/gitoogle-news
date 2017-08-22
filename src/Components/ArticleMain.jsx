import React, { Component } from 'react';
import shareIcon from '../img/share.png';

function Header(props) {
  const date = new Date(props.repoInfo.created_at);
  return (
    <header className="hover-opacity">
      <h2 className="article-headline">
        <a
          href={props.repoInfo.html_url}
          target="_blank"
          className="link-underline is-uppercase is-blue"
          rel="noopener noreferrer"
        >
          {props.repoInfo.name}
        </a>
      </h2>
      <p className="details">
        <span className="dot">Created at</span>
        {date.toDateString()}
        <button type="button" className="hover-opacity-target" onClick={props.activateModal}>
          <img src={shareIcon} className="share-icon" alt="share icon" />
        </button>
      </p>
    </header>
  );
}

function RelatedInfo(props) {
  const date = new Date(props.repoInfo.updated_at);
  return (
    <div>
      <ul>
        <li className="hover-opacity is-blue">
          Current starcount: {props.repoInfo.stargazers_count}
        </li>
        <li className={`hover-opacity target-hidden ${props.isHidden ? `is-hidden` : ''}`}>
          <a
            href={props.repoInfo.html_url}
            target="_blank"
            className="link-underline is-blue"
            rel="noopener noreferrer"
          >
            {props.repoInfo.description}
          </a>
          <p className="details">
            <span className="dot">Last updated</span>
            {date.toDateString()}
            <button type="button" className="hover-opacity-target" onClick={props.activateModal}>
              <img src={shareIcon} className="share-icon" alt="share icon" />
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}

class ArticleMain extends Component {
  activateModal = () => {
    this.props.grabLinkText(this.props.repoInfo.html_url);
    this.props.showModal();
  };

  render() {
    return (
      <section className="article-main">
        <Header repoInfo={this.props.repoInfo} activateModal={this.activateModal} />
        <RelatedInfo repoInfo={this.props.repoInfo} isHidden={this.props.isHidden} activateModal={this.activateModal} />
      </section>
    );
  }
}

export default ArticleMain;
