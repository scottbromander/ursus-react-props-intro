import React, { Component } from "react";

class CreatureOutput extends Component {
  render() {
    return (
      <p>
        The {this.props.name} originated in {this.props.origin}.
      </p>
    );
  }
}

export default CreatureOutput;
