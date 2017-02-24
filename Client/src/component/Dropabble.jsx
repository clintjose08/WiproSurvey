import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#C9FDC1 ',
textAlign:'center',
height:'15%',
textAlign: 'center',
marginTop:0,
marginTop:'3%',
}

const questionStyle={
background:'#E8E8E8 ',
textAlign:'center',
height:'70%',
textAlign: 'center',
marginTop:'3%',
}

const thanksStyle={
background:'#D0FEFE ',
textAlign:'center',
height:'15%',
textAlign:'center',
marginTop:'3%',
marginBottom:'3%'
}

const style = {
textAlign: 'center',
display: 'inline-block',
width:'100%',
height:'100%',

};



class Dropabble  extends Component {




render() {


  return(
  <Paper  style={style}>
  <Card style={welcomeStyle}>
  <CardHeader
    title="Your Welcome Mesage Comes Here..."
    titleColor='#818181'
  />

  </Card>
  <Divider />
  <Card style={questionStyle}>
  <CardHeader
    title="Your Questions Comes Here..."
    titleColor='#818181'
    titlePosition='center'
  />
  </Card>
  <Divider />
  <Card style={thanksStyle}>
  <CardHeader
    title="Your Thank You Mesage Comes Here..."
    titleColor='#818181'
  />
  </Card>
  </Paper>
 );

  }
}

export default Dropabble;
