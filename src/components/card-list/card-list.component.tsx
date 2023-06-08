import { Component } from "react";

import CardComponent from "../card/card.component.tsx";
import type { Monster } from "../../App.tsx";

import "./card-list.styles.css";

interface CardListProps {
  filteredMonsters: Array<Monster>;
}
class CardListComponent extends Component<CardListProps, object> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster: Monster) => {
          return <CardComponent monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardListComponent;
