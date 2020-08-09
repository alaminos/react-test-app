import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  handleIncrement = () => {
    console.log("Incremented.");
    this.setState({ value: this.state.count + 1 });
  };

  render() {
    //console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} //a reference to the method, not a call to the method; otherwise the method would be called at rendering
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && <p>There are not tags.</p>}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>hola</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
