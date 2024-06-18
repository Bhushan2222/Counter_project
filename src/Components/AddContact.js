import React, { Component } from "react";

class AddContact extends Component {
  render() {
    return (
      <div className="ui main">
        <h1>Add contact </h1>
        <form className="ui form ">

          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label>Name</label>
            <input type="text" name="email" placeholder="Email" />
          </div>

        </form>
        <button className="ui button blue">Add</button>
      </div>
    );
  }
}

export default AddContact;
