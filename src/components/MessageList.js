import React, { Component } from "react";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    return <div>Show something</div>;
  }
}

export default connect()(MessageList);
