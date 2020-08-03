import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  handleIncrement = () => {
    console.log("Incremented.");
    //this.state.count++ <--this would work, but REact would not be aware of that change
    this.setState({ count: this.state.count + 1 });
  };

  render() {
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
