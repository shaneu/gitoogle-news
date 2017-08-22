import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount = () => {
    this.button.focus();
  };

  copyToClipboard = () => {
    const textInput = document.createElement('input');
    textInput.value = this.props.linkText;
    if (document.body) {
      document.body.appendChild(textInput);
      textInput.select();
      document.execCommand('Copy');
    }

    if (document.body) {
      document.body.removeChild(textInput);
    }
    this.props.showModal();
  };

  closeModal = event => {
    if (event.target.id === 'outer-modal') {
      this.props.showModal();
    }
  };

  render() {
    return (
      <div
        id="outer-modal"
        className={`modal-backdrop ${this.props.hideModal ? 'is-hidden' : ''}`}
        role="button"
        tabIndex={0}
        onClick={this.closeModal}
      >
        <div id="inner-modal" role="dialog" className="modal-panel">
          <p>
            <a href={this.props.linkText} className="modal-text" target="_blank" rel="noopener noreferrer">
              {this.props.linkText}
            </a>
            <button
              onClick={this.copyToClipboard}
              className="button modal-button"
              ref={button => {
                this.button = button;
              }}
            >
              Copy
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
