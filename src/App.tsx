import React, { useEffect, useState } from "react";

import SearchBoxComponent from "./components/search-box/search-box.component.tsx";
import CardListComponent from "./components/card-list/card-list.component.tsx";

import "./App.css";

export type Monster = { name: string; id: string; email: string };

const App = () => {
  const [filteredMonsters, setFilteredMonsters] = useState<Array<Monster>>([]);
  const [monsters, setMonsters] = useState<Array<Monster>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        setMonsters(monsters);
        setFilteredMonsters(monsters);
      });
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMonsters: Array<Monster> = monsters.filter((monster) => {
      if (monster.name.toLowerCase().includes(searchString)) {
        return monster;
      }
    });
    setFilteredMonsters(filteredMonsters);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBoxComponent
        onChangeHandler={onSearchChange}
        placeholder={"Search monsters"}
        className={"search-input"}
      />
      <CardListComponent filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
