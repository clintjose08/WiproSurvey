import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#649F4E',
textAlign:'center',
height:"20%"
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginTop:'10%',
marginBottom:'10%',
marginLeft:0,
marginRight:0,
height:'25%'
}

const thanksStyle={
background:'#649F4E',
textAlign:'center',
marginTop:'1%',
height:"35%"

}

const style = {
textAlign: 'center',
height:'80%',
width:'100%',
};



class Dropabble  extends Component {
 render() {
   return(
     <div style={{height:'90%'}}>
      <h2 style={{fontWeight:'bold',textAlign:'center'}}>Your Template</h2>
      <Paper  style={style}>
        <Card style={welcomeStyle}>
          <h3 style={{marginTop:'2%',marginBottom:'2%',fontSize:'150%'}}> Survey Title</h3>
          <Divider/>
          <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#283747',textAlign:'left'}}>Description </h4>
        </Card>
        <h3 style={{marginTop:'5%',marginBottom:'5%',color:'#818181',height:'50%'}}>Your Questions </h3>
        <Card style={thanksStyle}>
          <h3 style={{marginTop:'2%',marginBottom:'2%'}}> Thank You Message</h3>
          <Divider/>
          <h4 style={{marginTop:'1%',marginLeft:'1%',color:'',textAlign:'left',color:'#283747'}}> Creater Name </h4>
          <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}>Creater Contact Number </h4>
          <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}> Creater E-mail </h4>
        </Card>
      </Paper>
    </div>
  );
 }
}

export default Dropabble;
