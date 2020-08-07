import React from "react";
import axios from "axios";

class AjaxPostExample extends React.Component {
  state = {
    input: {},
  };

  saveInputs = (event) => {
    var key = event.target.name;
    this.state.input[key] = event.target.value;
    this.setState({ [key]: event.target.value });
  };

  saveData = () => {
    console.log(this.state);
    var currentthis = this;

    //Use for JSON POST REQUEST
    // axios
    //   .post("http://localhost/js_ajax_tutorial/save_data.php", {
    //     name: this.state.name,
    //     age: this.state.age,
    //     email: this.state.email,
    //     qual: this.state.qual,
    //   })
    //   .then(function (response) {
    //     //Success Callback
    //     console.log(response);
    //   })
    //   .then(function (error) {
    //     //Error Callback
    //     console.log(error);
    //   })
    //   .then(function () {
    //     //Always Callback
    //     console.log("Always Running");
    //   });

    //Use for POST FORM REQUEST
    // var formData = new FormData();
    // formData.set("name", this.state.name);
    // formData.set("email", this.state.email);
    // formData.set("age", this.state.age);
    // formData.set("qual", this.state.qual);

    // axios
    //   .post("http://localhost/js_ajax_tutorial/save_data.php", formData, {
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   })
    //   .then(function (response) {
    //     //Success Callback
    //     console.log(response);
    //   })
    //   .then(function (error) {
    //     //Error Callback
    //     console.log(error);
    //   })
    //   .then(function () {
    //     //Always Callback
    //     console.log("Always Running");
    //   });

    console.log(this.state.input);
    var formData = new FormData();
    for (var data in this.state.input) {
      formData.set(data, this.state.input[data]);
    }

    axios
      .post("http://localhost/js_ajax_tutorial/save_data.php", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(function (response) {
        //Success Callback
        console.log(response);
      })
      .then(function (error) {
        //Error Callback
        console.log(error);
      })
      .then(function () {
        //Always Callback
        console.log("Always Running");
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1>AJAX POST EXAMPLE</h1>
        <input
          name="name"
          placeholder="Enter Name :"
          onChange={this.saveInputs}
        />
        <br />
        <input
          name="email"
          placeholder="Enter Email :"
          onChange={this.saveInputs}
        />
        <br />
        <input
          name="age"
          placeholder="Enter Age :"
          onChange={this.saveInputs}
        />
        <br />
        <input
          name="qual"
          placeholder="Enter Qualification :"
          onChange={this.saveInputs}
        />
        <br />
        <button id="save_data" onClick={this.saveData}>
          Save Data Using Ajax
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default AjaxPostExample;
