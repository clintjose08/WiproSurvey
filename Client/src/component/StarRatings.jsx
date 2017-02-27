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

const cardheadstyle={
  background:"#242323",
  textAlign:'center',
}

const style = {
marginTop:30
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
      <Grid>
          <Row>
            <Col xs={12}>
            <Paper style={{marginTop:'3%'}}>
        <Card style={{background:' #E5E4E2 '}}>
          <CardHeader title="Create Star Rate Questions"  style={cardheadstyle} titleColor='white' titleStyle={{fontWeight:'bold'}}/>
          <CardText style={{background:"#E5E4E2"}}>
          <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Select the question type</Subheader>
            <SelectType/>
              <br /><br />

              <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Enter the question</Subheader>
              <TextField
                floatingLabelText="Question"
                value=" "
                underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
              /><br />
              <Divider style={{background:blueGrey500}}/>
              <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Select Scale</Subheader>
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
          <RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
          <RaisedButton label="Submit" backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
          </CardActions>
        </Card>
        </Paper>
        </Col>
        </Row>
    </Grid>
    </div>);
  }
}

export default StarRatings;
