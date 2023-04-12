import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "dinh", title: "developer", salary: "500" },
      { id: "dinh2", title: "tester", salary: "400" },
      { id: "dinh3", title: "PM", salary: "1000" },
    ],
  };
  handleChangFirtName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleChangLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input: ", this.state);
  };
  render() {
    return (
      <>
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.handleChangFirtName(e)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(e) => this.handleChangLastName(e)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
        <ChildComponent
          name={this.state.firstName}
          age={this.state.lastName}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default MyComponent;
