import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      author: "",
    };
  }

  handleClick = () => {
    axios.get("https://type.fit/api/quotes").then((response) => {
      let number = Math.floor(Math.random() * 1644);
      this.setState({
        joke: response.data[number].text,
        author: response.data[number].author,
      });
    });
  };

    handleTweet() {

    }

  render() {
    return (
      <div className="App">
        <h1 className="text-blue-light text-6xl pt-32">QUOTE MACHINE</h1>
        <div className="flex justify-center gap-6 mt-12">
          <button
            className="text-yellow-400 font-bold bg-blue p-6 rounded-md hover:bg-blue-dark duration-200 text-2xl "
            onClick={this.handleClick}
          >
            show me random quotes
          </button>
            <a href="https://twitter.com/login" target='_blank'><button className="text-yellow-400 font-bold bg-blue p-6 rounded-md hover:bg-blue-dark duration-200 text-2xl" >
                tweet random quotes
            </button></a>
        </div>
        <div className="mt-12 flex justify-center">
          <p className=" py-16 px-2 w-8/12 bg-blue-dark rounded-2xl text-center text-red-700 text-2xl font-semibold">
            {this.state.joke} <br /><br /> {this.state.author}
          </p>
        </div>
      </div>
    );
  }


}

export default App;
