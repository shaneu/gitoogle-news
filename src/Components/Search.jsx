import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import Header from './Header';
import Loading from './Loading';
import Modal from './Modal';
import Repo from './Repo';
import githubApi from '../githubApi';

class Search extends Component {
  state = {
    repos: null,
    search: '',
  };

  componentDidMount = () => {
    const parsedQueryString = queryString.parse(this.props.location.search);
    if (parsedQueryString.q && parsedQueryString.q.length > 0) {
      this.setState({ search: parsedQueryString.q });
      githubApi.searchRepositories(parsedQueryString.q).then(response => this.setState({ results: response }));
    }
  };

  fetchPopularRepos = lang => {
    githubApi.fetchRepos(lang).then(response => {
      this.setState({ repos: response });
    });
  };

  render() {
    const results = this.state.results;
    let utilSpace;

    if (this.props.location.search.length === 0) {
      utilSpace = <Redirect to="/" />;
    } else if (!results) {
      utilSpace = <Loading />;
    } else if (results.length > 0) {
      utilSpace = results.map((repo, index) =>
        <Repo
          key={repo.id}
          repoInfo={repo}
          isHidden={index !== 0}
          hideModal={this.props.hideModal}
          showModal={this.props.showModal}
          grabLinkText={this.props.grabLinkText}
        />,
      );
    } else {
      utilSpace = (
        <p className="item-not-found">
          Your search for "{this.state.search}" did not return any results
        </p>
      );
    }

    return (
      <div className="grid">
        <Header />
        <main className="repos">
          {utilSpace}
        </main>
        {!this.props.hideModal &&
          <Modal hideModal={this.props.hideModal} showModal={this.props.showModal} linkText={this.props.linkText} />}
      </div>
    );
  }
}

export default Search;
