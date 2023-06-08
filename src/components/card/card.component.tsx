import { Component } from "react";

import type { Monster } from "../../App.tsx";
import "./card.styles.css";

interface CardComponentProps {
  monster: Monster;
}
class CardComponent extends Component<CardComponentProps, object> {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2 className="monster-name">{name}</h2>
        <p className="monster-email">{email}</p>
      </div>
    );
  }
}

export default CardComponent;
