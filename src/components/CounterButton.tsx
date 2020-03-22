import React, { Component } from "react";

interface ICounterButtonProps {
  color: string;
}

interface ICounterButtonState {
  count: number;
}

class CounterButton extends Component<
  ICounterButtonProps,
  ICounterButtonState
> {
  constructor(props: ICounterButtonProps) {
    super(props);
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate(
    nextProps: ICounterButtonProps,
    nextState: ICounterButtonState
  ): boolean {
    if (this.state.count !== nextState.count) return true;
    return false;
  }

  updateCount = (): void => {
    this.setState(state => {
      return {
        count: this.state.count + 1
      };
    });
  };

  render(): JSX.Element {
    console.log("CounterButton");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
