import React, { Component } from "react";
import "./App.css";
import FileList from "./FileList";

class App extends Component {
    render() {
        return(
            <div className="app">
                <FileList />
            </div>
        )
    }
}

export default App;