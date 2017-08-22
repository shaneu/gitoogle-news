import React, { Component } from 'react';

class Loading extends Component {
  state = {
    loadingText: 'Loading',
  };

  componentDidMount = () => {
    const stopper = `${this.state.loadingText}...`;
    this.interval = setInterval(() => {
      if (stopper === this.state.loadingText) {
        this.setState({ loadingText: 'Loading' });
      } else {
        this.setState(prevState => ({ loadingText: `${prevState.loadingText}.` }));
      }
    }, 200);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  interval: number;

  render() {
    return (
      <div className="loading repos">
        {this.state.loadingText}
      </div>
    );
  }
}

export default Loading;
