import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import {IndexLink, Link} from 'react-router';


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
  marginLeft:'30%',
  marginTop:'10%',
  width:'40%',
  height:'50%',
};

const textStyle={
  margin:15
}

class StarRatings extends Component
{
  state = {
    value: 0,
    listOptions:[],
    addValue: false
  };

  handleChange = (event, index, value) => {
    this.setState({value:value,
    addValue:false,
    listOptions:[]});

  };

  onChangeCheck=(e)=>
  {

    if(!e.target.checked)
    {
      this.setState({
        listOptions:[],
        addValue:false
      });
    }
    else
    {
      var list=[];
      var text=[];
      var value=this.state.value;
      for (let i = 1; i <= value; i++ )
      {
        text=[];
        var star=i+" Star";
        text.push(<TextField hintText={star}/>);
        list.push(<ListItem primaryText={text}/>);
      }
      this.setState({
        addValue:true,
        listOptions:list
      })
    }
  };

  render()
  {
    const items = [];
    for (let i = 3; i <= 10; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return(<div>
      <Paper style={style}>
        <Card>
          <CardHeader title="Create Star Rate Questions"  style={cardheadstyle} titleColor='white'/>
          <CardText>
            <TextField
              hintText="Question"
              style={textStyle}
            /><br />
            <Divider/>
            <SelectField
              floatingLabelText="Question Type"
              value={this.state.value}
              onChange={this.handleChange}
            >
            <MenuItem value={1} primaryText="Multiple Choice" />
            <Link to="Home/Dropdown" activeClassName="active">
               <MenuItem value={2} primaryText="Dropdown" />
            </Link>
            <Link to="Home/StarRatings" activeClassName="active">
               <MenuItem value={3} primaryText="Star Ratings" />
            </Link>
            <Link to="Home/Slider" activeClassName="active">
               <MenuItem value={4} primaryText="Slider" />
            </Link>
            <Link to="Home/SingleText" activeClassName="active">
               <MenuItem value={5} primaryText="Single Textbox" />
            </Link>
            <Link to="Home/Comments" activeClassName="active">
               <MenuItem value={5} primaryText="Comments" />
           </Link>
             </SelectField>
              <br /><br />
            <span><h3>Select scale</h3>
            <SelectField
              hintText="Select Scale"
              value={this.state.value}
              onChange={this.handleChange}
              maxHeight={200}
            >
              {items}
            </SelectField></span>
            <Checkbox label="Add Rating Value" checked={this.state.addValue} onCheck={this.onChangeCheck.bind(this)}/>
            <List>
            {this.state.listOptions}
            </List>
            <br />
            <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
            <RaisedButton label="Cancel" disabled={true} style={buttonStye}/>
          </CardText>
        </Card>
      </Paper>
    </div>);
  }
}

export default StarRatings;
