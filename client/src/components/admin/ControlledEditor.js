import React, { Component } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { stateFromHTML } from "draft-js-import-html";
import htmlToDraft from "html-to-draftjs";

import { unemojify } from "node-emoji";

export default class ControlledEditor extends Component {
  constructor(props) {
    super(props);

    const blocksFromHtml = htmlToDraft(this.props.init);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    this.state = {
      editorState: EditorState.createWithContent(contentState),
    };
    this.props.onChange(
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );
  }

  onEditorStateChange = (editorState) => {
    const { onChange, value } = this.props;

    const newValue = unemojify(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    if (value !== newValue) {
      onChange(newValue);
    }

    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="form-control custom-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    );
  }
}
