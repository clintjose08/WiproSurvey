import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const floatStyle={
  margin:10
}
class AddOptions extends Component {
  addClicked(e)
  {
    this.props.addoptions(e);
  }
  removeClicked(e)
  {
    this.props.removeoptions(e);
  }
  render()
  {
    return(<div>
      <TextField floatingLabelText="Add options"/>
      <FloatingActionButton mini={true} style={floatStyle} backgroundColor="green" onClick={this.addClicked.bind(this)}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={floatStyle} backgroundColor="red" onClick={this.removeClicked.bind(this)}>
    <ContentRemove />
  </FloatingActionButton>
    </div>);
  }
}

export default AddOptions;
