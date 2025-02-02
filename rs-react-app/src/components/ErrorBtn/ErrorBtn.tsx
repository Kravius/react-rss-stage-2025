import React, { Component, ReactNode } from 'react';
import style from './ErrorBtn.module.css';

type ButtonProps = {
  children?: ReactNode;
  click?: (ev?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type State = {
  error: boolean;
};

class ErrorBTN extends Component<ButtonProps, State> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  handleError = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Simulated error. You have some error');
    }
    return (
      <div>
        <button className={style['errorBtn']} onClick={this.handleError}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export { ErrorBTN };
