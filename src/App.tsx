import React, { Component } from "react";

import SearchBoxComponent from "./components/search-box/search-box.component.tsx";
import CardListComponent from "./components/card-list/card-list.component.tsx";

import "./App.css";

export type Monster = { name: string; id: string; email: string };

interface AppState {
  monsters: Array<Monster>;
  filteredMonsters: Array<Monster>;
}

export default class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        })
      );
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMonsters: Array<Monster> = this.state.monsters.filter(
      (monster) => {
        if (monster.name.toLowerCase().includes(searchString)) {
          return monster;
        }
      }
    );
    this.setState({ filteredMonsters });
  };

  render() {
    const { filteredMonsters } = this.state;
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBoxComponent
          onChangeHandler={this.onSearchChange}
          placeholder={"Search monsters"}
          className={"search-input"}
        />
        <CardListComponent filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}
