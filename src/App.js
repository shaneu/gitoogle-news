/* eslint react/jsx-filename-extension: 0*/
/* eslint no-console: 0 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Search from './Components/Search';
import PageNotFound from './Components/PageNotFound';

class App extends Component {
  state = {
    hideModal: true,
    linkText: '',
  };

  showModal = () => {
    if (document.body) {
      document.body.classList.toggle('modal-open');
    }

    this.setState((prevState: { hideModal: boolean }) => ({ hideModal: !prevState.hideModal }));
  };

  grabLinkText = (text: string) => {
    if (this.state.hideModal) {
      this.setState({ linkText: text });
    } else {
      this.setState({ linkText: '' });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <Landing
                hideModal={this.state.hideModal}
                showModal={this.showModal}
                linkText={this.state.linkText}
                grabLinkText={this.grabLinkText}
              />}
          />
          <Route
            path="/search"
            render={props =>
              <Search
                hideModal={this.state.hideModal}
                showModal={this.showModal}
                location={props.location}
                linkText={this.state.linkText}
                grabLinkText={this.grabLinkText}
              />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
