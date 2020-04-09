import React, { Component } from "react";

class CreatureList extends Component {
  render() {
    return (
      <div>
        <h2>Creature List</h2>
        <ul>
          {this.props.creatureList.map((creature, index) => (
            <li key={index}>
              {creature.name} originated in {creature.origin}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CreatureList;
