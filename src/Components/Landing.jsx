import React, { Component } from 'react';
import Header from './Header';
import Loading from './Loading';
import Modal from './Modal';
import Repo from './Repo';
import Sidebar from './Sidebar';
import githubApi from '../githubApi';

class Landing extends Component {
  state = {
    repos: [],
    selectedLanguage: 'All',
  };

  componentDidMount = () => {
    this.fetchPopularRepos(this.state.selectedLanguage);
  };

  fetchPopularRepos = lang => {
    githubApi.fetchRepos(lang).then(response => {
      this.setState({ repos: response });
    });
  };

  render() {
    const repos = this.state.repos;
    let utilSpace;

    if (repos.length === 0) {
      utilSpace = <Loading />;
    } else {
      utilSpace = repos.map((repo, index) =>
        <Repo
          key={repo.id}
          repoInfo={repo}
          isHidden={index !== 0}
          grabLinkText={this.props.grabLinkText}
          showModal={this.props.showModal}
        />,
      );
    }

    return (
      <div className="grid">
        <Header showLogo />
        <main className="repos">
          {utilSpace}
        </main>
        <Sidebar updateLanguage={this.fetchPopularRepos} />
        {!this.props.hideModal &&
          <Modal hideModal={this.props.hideModal} showModal={this.props.showModal} linkText={this.props.linkText} />}
      </div>
    );
  }
}

export default Landing;
