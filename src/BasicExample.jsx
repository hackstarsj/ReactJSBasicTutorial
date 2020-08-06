import React from "react";

class BasicExample extends React.Component {
  state = {
    input: "Default Value",
    input2: "Default Value",
  };

  //   constructor() {
  //     super();
  //     this.showInputValue = this.showInputValue.bind(this);
  //   }

  style_input = { margin: 15, padding: 15 };

  //Run Only When You Declare Bind Method
  //   showInputValue = function () {
  //     console.log("Value 1 " + this.state.input);
  //     console.log("Value 2 " + this.state.input2);
  //   };

  showInputValue = () => {
    console.log("Value 1 " + this.state.input);
    console.log("Value 2 " + this.state.input2);
  };

  changeInput = (event) => {
    if (event.target.name === "input1") {
      //When Directly Setting Value then View Components of DOM Variable Object Didn't Get Updated
      //this.state.input = event.target.value;

      //When Use setState the View Component of DOM Variable Object get Updated and Change Live
      this.setState({ input: event.target.value });
    }
    if (event.target.name === "input2") {
      //this.state.input2 = event.target.value;
      this.setState({ input2: event.target.value });
    }
  };

  parameterFunction(value) {
    console.log("parameter Function Value : "+value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Input 1 Value : "
          className="input-box"
          style={this.style_input}
          name="input1"
          onChange={this.changeInput}
        />
        <br />
        <input
          type="text"
          placeholder="Input 2 Value : "
          className="input-box"
          name="input2"
          style={this.style_input}
          onChange={this.changeInput}
        />
        <br />
        <button style={this.style_input} onClick={this.showInputValue}>
          SHOW THE VALUE
        </button>
        <button style={this.style_input} onClick={() => this.parameterFunction(66)}>
          Parametet Function 1
        </button>
        <button style={this.style_input} onClick={() => this.parameterFunction(88)}>
          Parametet Function 2
        </button>

        <br />
        <div>
          <span style={this.style_input}>Value 1 : {this.state.input}</span>
          <br />
          <span style={this.style_input}>Value 2 : {this.state.input2}</span>
          <br />
        </div>
        <h1>React JS Basic Tutorial</h1>
      </div>
    );
  }
}

export default BasicExample;
