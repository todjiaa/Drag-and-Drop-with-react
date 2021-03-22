import React, { Component } from "react";
import "./App.css";
import FileList from "./FileList";
import logo from "./thsound.png"


class App extends Component {
    dragImage = React.createRef();

    onDragStart = (e) => {
        // e.preventDefault();
        e.stopPropagation()
        console.log("drag started", e.dataTransfer)
    }



    componentDidMount() {
        let img = this.dragImage.current;

        img.addEventListener("dragstart", this.onDragStart);
    }

    componentWillUnmount() {
        let img = this.dragImage.current;

        img.removeEventListener("dragstart", this.onDragStart);
    }

    render() {
        return(
            <div className="app">
                <FileList />
                <div className="image-container" >
                    <img ref={this.dragImage} draggable="true" src={logo} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default App;