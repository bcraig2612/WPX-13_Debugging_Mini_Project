import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  changeHandler(event) {
    this.setState({
      friend: event.target.value
    });
  }

  addFriend() {
    //properly set state with copy of array
    let myUpdatedList = this.state.friendsList.slice();
    myUpdatedList.push(this.state.friend);
    this.setState({
      friendsList: myUpdatedList
    });
  }

  deleteFriend(index) {
    const myUpdatedList = this.state.friendsList.slice();
    myUpdatedList.splice(index, 1);
    this.setState({
      friendsList: myUpdatedList
    });
  }

  render() {
    const mappedFriends = this.state.friendsList.map((friend, index) => {
      // ADD RETURN [Line: 41]
      // PASS ARROW FUNCTION, INVOKE DELETE FRIEND AND PASS IN INDEX [Line: 44]
      return (
        <div key={index}>
          <span>{friend}</span>
          <button onClick={() => this.deleteFriend(index)}> Delete </button>
        </div>
      );
    });
    return (
      <div className="App">
        <div>{mappedFriends}</div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;
