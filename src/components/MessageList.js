import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchAllMessages();
  }

  render() {
    const { messages } = this.props;
    console.log("messages", messages);
    return (
      <div>
        {messages.length === 0 ? "No messages to show" : "There are messages"}
        {messages.length !== 0 &&
          messages.map(message => {
            return (
              <div key={message.id}>
                {message.username} - {message.content}
              </div>
            );
          })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    messages: state.messages
  };
};

const mapDispatch = dispatch => {
  return {
    fetchAllMessages: function() {
      dispatch(fetchMessages());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(MessageList);
