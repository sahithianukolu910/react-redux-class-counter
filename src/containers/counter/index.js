import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
//  import "./App.css";

class Counter extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div>
            <button type="button" onClick={this.decrement}>
              -
            </button>
            <button type="button" onClick={this.increment}>
              +
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.sample.number,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(actions.increment());
    },
    decrement: () => {
      dispatch(actions.decrement());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
