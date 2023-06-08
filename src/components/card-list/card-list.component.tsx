import CardComponent from "../card/card.component.tsx";
import type { Monster } from "../../App.tsx";

import "./card-list.styles.css";

interface CardListProps {
  filteredMonsters: Array<Monster>;
}
const CardListComponent = ({ filteredMonsters }: CardListProps) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster: Monster) => {
        return <CardComponent key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardListComponent;
