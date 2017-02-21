import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddOptions from './AddOptions';

const cardheadstyle={
  background:'black',
  textAlign:'center',
}
const buttonStye={
  marginLeft:30,
}

const style = {
  textAlign: 'center',
  display: 'inline-block',
  margin:'auto',
  marginTop:'10%',
  width:'40%',
  height:'50%',
};


class Mcq extends Component {
  constructor() {
    super();
    this.state = {
      optionArr: [' '],
    }
  }
  addOptions(e)
  {
   var arr=this.state.optionArr;
   arr.push(' ');
   this.setState({
     optionArr:arr
   })
  }
  removeOptions(e)
  {
   var arr=this.state.optionArr;
   arr.pop();
   this.setState({
     optionArr:arr
   })
  }

  render() {
    const options=this.state.optionArr.map((value,index) => {

      return (
      <AddOptions addoptions={this.addOptions.bind(this)} removeoptions={this.removeOptions.bind(this)}/>
      );
    });
    return (
      <div>
        <Paper style={style}>
          <Card>
            <CardHeader title="Create MCQ" style={cardheadstyle} titleColor='white'/>
            <CardText>
              <TextField
                hintText="Question"
              /><br />
              <h3>Answer Choices</h3><br />
              {options}
              <br />
              <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
              <RaisedButton label="Cancel" disabled={true} style={buttonStye}/>
            </CardText>
          </Card>
        </Paper>
      </div>
    );
  }
}

export default Mcq;
