import React, { Component } from "react";

export default class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { photo: {} };
  }

  onChange(e) {
    const { onChange } = this.props;
    console.log(e.target.files[0]);
    onChange(e.target.files[0]);
    this.setState({ photo: e.target.files[0] });
  }

  render() {
    console.log(this.state);
    const { value, label } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
