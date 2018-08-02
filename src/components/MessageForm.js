import React, { Component } from "react";
import { connect } from "react-redux";
import { postMessage } from "../store";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: ""
    };
  }

  handleMessageChange = e => {
    // console.log("state.message : ", e.target.value);
    this.setState({ message: e.target.value });
  };

  handleUsernameChange = e => {
    // console.log("state.username : ", e.target.value);
    this.setState({ username: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { username, message } = this.state;
    this.props.postMessageNow(username, message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        show initial form
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleMessageChange}
            placeholder="Type a message..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return { ...state };
};

const mapDispatch = dispatch => {
  return {
    postMessageNow: function(username, message) {
      console.log("will be posteding the message", username, message);
      dispatch(postMessage({ username, message }));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(MessageForm);
