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
import SelectType from './SelectType';
import request from 'superagent';

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
    quest:" ",
    value: " ",
    listOptions:[],
    addValue: false,
    starValues:[],
  };
  componentWillMount(){
    this.props.type("StarRatings");
  }
  handleChange = (event, index, value) => {
    this.setState({value:value,
    addValue:false,
    listOptions:[],
    starValues:[]});
    var starValue= Array(value).fill(" ");
    this.props.options(starValue);
  }
  onChangeCheck=(e)=>
  {
    if(!e.target.checked)
    {
      this.setState({
        listOptions:[],
        addValue:false,
        starValues:[]
      });
        this.props.options([]);
    }
    else
    {
      var list=[];
      var text=[];
      var value=this.state.value;
      var starValue= Array(value).fill(" ");

      for (let i = 1; i <=value; i++ )
      {
        text=[];
        var star=i+1+" Star";
        text.push(<TextField hintText={star} underlineStyle={{borderColor:blueGrey500}} id={i} onChange={this.changeStarValue.bind(this)}/>);
        list.push(<ListItem primaryText={text}/>);
        this.props.options(starValue);
      }
      this.setState({
        addValue:true,
        listOptions:list,
        starValues:starValue
      })
    }
  };
  changeStarValue(e)
  {
    var starValue=this.state.starValues;
    starValue[e.target.id-1]=e.target.value;
    this.setState({
      starValues:starValue
    })
    this.props.options(starValue);
  }
  questionChange(e)
  {
    this.setState({
      quest:e.target.value
    })
    this.props.getQuestion(e.target.value);
  }
  updateDb(){
  var questionScreen={
    questions:[
      {
        questionno:1,
        questionQ:this.state.quest,
        options:this.state.optionArr
      }
    ]
  }
  request.post('http://localhost:9080/api/createSurvey')
          .set('Content-Type', 'application/json')
          .send(questionScreen)
           .end((err,res)=>
           {
             console.log("posted");
            })
}
  render()
  {
    const items = [];
    for (let i = 3; i <= 10; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return(<div>
            <Paper>
        <Card style={{background:' #E5E4E2 '}}>
          <CardHeader title="Create Star Rate Questions"  style={cardheadstyle} titleColor='white' titleStyle={{fontWeight:'bold'}}/>
          <CardText style={{background:"#E5E4E2"}}>
          <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Select the question type</Subheader>
            <SelectType/>
              <br /><br />
              <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Enter the question</Subheader>
               <TextField
                value={this.state.quest}
                underlineStyle={{borderColor:blueGrey500}}
                onChange={this.questionChange.bind(this)}
              /><br />
              <Divider style={{background:blueGrey500}}/>
              <Subheader style={{color:'#1C6D03 '}}>Select Scale</Subheader>
            <SelectField
              floatingLabelText="Select Scale"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              maxHeight={200}
              underlineStyle={{borderColor:blueGrey500}}
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
          <RaisedButton label="Submit" backgroundColor='#1C6D03 ' onClick={this.updateDb.bind(this)} labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
            </Link>
          </CardActions>
        </Card>
        </Paper>
        </div>
      );
  }
}

export default StarRatings;
