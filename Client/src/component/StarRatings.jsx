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
import { Grid,Col,Row} from 'react-flexbox-grid';
import {blueGrey500,white} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

const cardheadstyle={
  background:"#242323",
  textAlign:'center',
}

const style = {
marginTop:30
};

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

    return(
            <Paper>
        <Card style={{background:' #E5E4E2 '}}>
          <CardHeader title="Create Star Rate Questions"  style={cardheadstyle} titleColor='white' titleStyle={{fontWeight:'bold'}}/>
          <CardText style={{background:"#E5E4E2"}}>
          <Subheader style={{color:'#1C6D03 '}}>Select the question type</Subheader>
            <SelectField
              iconStyle={{background:'#607D8B'}}
              floatingLabelText="Question Type"
              value={this.state.value}
              onChange={this.handleChange}
              underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
            >
              <Link to="Home/StarRatings" activeClassName="active">
            <MenuItem value={1} primaryText="Star Ratings" />
            </Link>
            <Link to="Home/Dropdown" activeClassName="active">
               <MenuItem value={2} primaryText="Dropdown" />
            </Link>
            <Link to="Home/MultiChoice" activeClassName="active">
               <MenuItem value={3} primaryText="Multiple Choice" />
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

              <Subheader style={{color:'#1C6D03 '}}>Enter the question</Subheader>
              <TextField
                floatingLabelText="Question"
                value=" "
                underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
              /><br />
              <Divider style={{background:blueGrey500}}/>
              <Subheader style={{color:'#1C6D03 '}}>Select Scale</Subheader>
            <SelectField
              floatingLabelText="Select Scale"
              value={this.state.value}
              onChange={this.handleChange}
              maxHeight={200}
              underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
            >
              {items}
            </SelectField>
            <Checkbox label="Add Rating Value" iconStyle={{borderColor:blueGrey500}} labelStyle={{marginRight:1000,color:blueGrey500}} checked={this.state.addValue} onCheck={this.onChangeCheck.bind(this)}/>

            <List>
            {this.state.listOptions}
            </List>
            <br />
          </CardText>
          <Divider style={{background:blueGrey500}}/>
          <CardActions >
            <Link to="Home/AddQuestion" activeClassName="active">
          <RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
          </Link>
            <Link to="Home/AddQuestion" activeClassName="active">
          <RaisedButton label="Submit" backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
            </Link>
          </CardActions>
        </Card>
        </Paper>
      );
  }
}

export default StarRatings;
