import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    gif: [],
    query: "earth from space"
  };

  componentDidMount() {
    this.getGif();
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getGif();
  };
  getGif = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${
          this.state.query
        }&api_key=W6j782MUgb8aXKhD289LHocpawNNNcaH&limit=10`,
        { crossdomain: true }
      )
      .then(res => {
        this.setState({
          gif: res.data.data
        });
        console.log(res.data.data);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form
            className="form-inline"
            style={{ paddingTop: "10px" }}
            onSubmit={this.handleSubmit}
          >
            <p>Gif Search: </p>
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only">Password</label>
              <input
                type="text"
                className="form-control"
                id="query"
                placeholder="Search Query"
                value={this.state.query}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </form>
        </header>
        {this.state.gif.map(g => {
          return (
            <div style={{ display: "inline" }}>
              <img src={g.images.fixed_height.url} alt="gif" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
