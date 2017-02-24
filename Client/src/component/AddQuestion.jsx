import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
marginTop:0,
marginLeft:0,
marginRight:0,
height:"20%"
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginTop:'10%',
marginBottom:'10%',
marginLeft:0,
marginRight:0,

}

const thanksStyle={
background:'#2F3A30',
textAlign:'center',
marginTop:'1%',
marginBottom:0,
marginLeft:0,
marginRight:0,
height:"40%"

}

const style = {
textAlign: 'center',

};



class AddQuestion  extends Component {




 render() {


   return(

<div>

   <h2 style={{fontWeight:'bold',textAlign:'center'}}>Your Templete</h2>
   <Paper  style={style}>
   <Card style={welcomeStyle}>
      <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF',fontSize:'150%'}}> [Title comes Here]</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Description ]</h4>
   </Card>


      <h3 style={{marginTop:'5%',marginBottom:'5%',color:'#818181'}}>[ Questions comes Here ]</h3>

   <Card style={thanksStyle}>
      <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF'}}> [Thank You Mesage comes Here]</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter Name ]</h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter Contact Number ]</h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter E-mail ]</h4>
   </Card>
   </Paper>




</div>


  );

   }
}

export default AddQuestion;
