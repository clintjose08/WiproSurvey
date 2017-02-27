import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
height:"15%",
margin:'auto'
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginLeft:0,
marginRight:0,
height:'40%'
}

const thanksStyle={
background:'#2F3A30',
textAlign:'center',
height:"7%"

}

const style = {
textAlign: 'center',
height:'100%',
width:'100%',
};



class TempDisplay  extends Component {
 render() {
   return(
      <Paper  style={style}>
        <Card style={welcomeStyle}>
          <h3 style={{marginTop:'0%',marginBottom:'0%',color:'#FFFFFF',fontSize:'150%'}}> [Header]</h3>
        </Card>
        <h3 style={{marginTop:'0%',marginBottom:'0%',color:'#818181',height:'50%'}}>[ Questions comes Here ]</h3>
        <Card style={thanksStyle}>
          <h3 style={{marginTop:'18%',marginBottom:'0%',color:'#FFFFFF'}}> [Footer]</h3>
        </Card>
      </Paper>
  );
 }
}

export default TempDisplay;
