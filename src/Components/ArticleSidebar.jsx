import React from 'react';

function ArticleSidebar(props) {
  return (
    <aside className="article-sidebar">
      <a href={props.repoInfo.html_url} target="_blank" rel="noopener noreferrer">
        <img className="article-sidebar-image" alt={`${props.repoInfo.name}`} src={props.repoInfo.avatar_url} />
      </a>
      <ul className={`more-about target-hidden ${props.isHidden ? `is-hidden` : ''}`}>
        <p>MORE ABOUT</p>
        <li className="is-blue article-sidebar-buttons">
          <a
            href={`${props.repoInfo.html_url}/graphs/contributors`}
            target="_blank"
            className="article-button button"
            rel="noopener noreferrer"
          >
            Contributors
          </a>
        </li>
        <li className="is-blue article-sidebar-buttons">
          <a
            href={`${props.repoInfo.html_url}/releases`}
            className="article-button button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Releases
          </a>
        </li>
        <li className="is-blue article-sidebar-buttons">
          <a
            href={props.repoInfo.clone_url}
            target="_blank"
            rel="noopener noreferrer"
            className="article-button button"
          >
            Clone
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default ArticleSidebar;
