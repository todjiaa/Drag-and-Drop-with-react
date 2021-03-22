import React, { Component } from "react";
import './DragAndDrop.css';

class DragAndDrop extends Component {
  dropRef = React.createRef();

  state = {
    dragging: false
  }

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log(e.dataTransfer.files, "drag")

  };

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.dragCounter++;

    if (e.dataTransfer.items && e.dataTransfer.length > 0) {
    }
    this.setState({dragging: true})

    console.log(e.dataTransfer.file, "drag in")

  };

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.dragCounter--;

    if (this.dragCounter > 0) return;
    
    this.setState({dragging: false})

    // console.log(e.dataTransfer, "drag out", this.dragCounter)

  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({dragging: false})

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }

    // console.log(e.dataTransfer.files[0].name, "drop")

  };


  componentDidMount() {
    this.dragCounter = 0;

    let div = this.dropRef.current;

    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;

    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);

  }


  render() {

    return (
      <div 
        className="drop-container"
        ref={this.dropRef}
      >
        {this.state.dragging && 
          <div className="drop-container__drop-area">
            <div className="drop-container__text">drop here</div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}

export default DragAndDrop;
