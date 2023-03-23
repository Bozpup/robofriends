import React, { Component } from "react";
import { connect } from "react-redux";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBound from "../components/ErrorBound";
import { requestRobots, setSearchField } from "../Action";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchrobofriends.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filterR = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return isPending ? (
      <h1> LOADING</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBound>
            <Cardlist robots={filterR} />
          </ErrorBound>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
