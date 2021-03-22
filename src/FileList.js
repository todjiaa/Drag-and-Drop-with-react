import React, { Component } from 'react';
import DragAndDrop from "./DragAndDrop";
import "./FileList.css";

class FileList extends Component {
    state = {
        files: []
    }
    
    handleDrop = (files) => {
        let fileList = this.state.files;

        for(let i = 0; i < files.length; i++) {
            if (!files[i].name) return
            fileList.push(files[i].name)
        }
        this.setState({files: fileList});
    }

    render() {
        return(
            <DragAndDrop handleDrop={this.handleDrop}>
                <div className="file-list">File List
                    {this.state.files.map((file, i) => 
                        <div key={i}>{file}</div>
                        )}
                </div>
            </DragAndDrop>
        )
    }
}

export default FileList;