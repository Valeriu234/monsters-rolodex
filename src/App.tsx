import React, { Component } from "react";

import "./App.css";

type Monster = { name: string; id: string };

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

  render() {
    const filterMonsters = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchString = e.target.value.toLowerCase();
      const filteredMonsters: Array<Monster> = this.state.monsters.filter(
        (monster) => {
          if (monster.name.toLowerCase().includes(searchString)) {
            return monster;
          }
        }
      );
      this.setState({ filteredMonsters: filteredMonsters });
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Search yuor monster"
          onChange={filterMonsters}
        />
        {this.state.filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}
