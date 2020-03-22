import React, { ChangeEvent } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {}

interface IAppState {
  robots: Array<IRobot>;
  searchField: String;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value });
  };

  render(): JSX.Element {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
