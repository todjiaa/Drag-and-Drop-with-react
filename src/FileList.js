import React, { Component } from 'react';
import DragAndDrop from "./DragAndDrop";
import "./FileList.css";

class FileList extends Component {
    state = {
        files: []
    }
    
    handleDropedFile = (files) => {
        let fileList = this.state.files;

        for(let i = 0; i < files.length; i++) {
            if (!files[i].name || fileList.includes(files[i].name)) continue;

            fileList.push(files[i].name);
        }
        this.setState({files: fileList});
    }

    render() {
        return(
            <DragAndDrop handleDropedFile={this.handleDropedFile}>
                <div className="file-list">
                    <h2>FILE LIST</h2>
                    <ul>
                        {this.state.files.map((file, i) => 
                            <li key={file}>{file}</li>
                        )}
                    </ul>
                </div>
            </DragAndDrop>
        )
    }
}

export default FileList;