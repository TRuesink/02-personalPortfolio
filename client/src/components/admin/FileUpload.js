import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadPhoto } from "../../actions";

class App extends Component {
  // On file select (from the pop up)

  state = { photo: null };
  onFileChange = (event) => {
    // Update the state
    //this.setState({ selectedFile: event.target.files[0] });
    this.setState({ photo: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", this.state.photo, this.state.photo.name);

    // Details of the uploaded file
    console.log(this.state.photo);

    // Request made to the backend api
    // Send formData object
    this.props.uploadPhoto(this.props.postId, formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.photo) {
      return <p>File: {this.state.photo.name}</p>;
    } else {
      return <p>File: {this.props.currentPhoto}</p>;
    }
  };

  render() {
    return (
      <div className="is-loading">
        {this.props.isFetching ? (
          <>
            <div className="is-loading-spinner">
              <div className="ui active centered inline loader"></div>
            </div>
            <div className="is-loading-background"></div>
          </>
        ) : null}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div>
            <input
              className="form-control-file"
              type="file"
              onChange={this.onFileChange}
            />
          </div>
          {this.fileData()}
          <button className="btn btn-primary" onClick={this.onFileUpload}>
            Upload Photo
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.photo.isFetching,
  };
};

export default connect(mapStateToProps, { uploadPhoto })(App);
