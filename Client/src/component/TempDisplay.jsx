import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Star from 'material-ui/svg-icons/toggle/star';

const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
height:"5%",
margin:'auto'
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginTop:'10%',
marginBottom:'10%',
height:'80%'
}

const thanksStyle={
background:'#2F3A30',
textAlign:'center',
height:"7%"

}

const style = {
textAlign: 'center',
width:'100%',
};



class TempDisplay  extends Component {

 render() {
   var options=[];
   if(this.props.putType=="Checkbox")
   {
     this.props.putOptions.map((option)=>{
       options.push(<Checkbox label={option} disabled={true} /> );
       options.push(<br/>)
     });
   }
   else if(this.props.putType=="Textbox"){
     this.props.putOptions.map((option)=>{
       options.push(<TextField value={option} disabled={true} /> );
       options.push(<br/>)
     });
   }
   else if(this.props.putType=="StarRatings")
   {
     this.props.putOptions.map((option)=>{
       options.push(<Star color="#FFFF00"/>)
       options.push(<TextField value={option} disabled={true} /> );
       options.push(<br/>)
     });
   }

   return(
      <Paper  style={style}>
        <Card style={welcomeStyle}>
          <h3 style={{marginTop:'0%',marginBottom:'0%',color:'#FFFFFF',fontSize:'150%'}}> [Header]</h3>
        </Card>
        <h3 style={{marginTop:'10%',marginBottom:'10%',color:'#818181'}}>[ Questions comes Here ]</h3>
        <h2>{this.props.putQuestion}</h2><br />
        {options}
        <Card style={thanksStyle}>
          <h3 style={{marginTop:'18%',marginBottom:'0%',color:'#FFFFFF'}}> [Footer]</h3>
        </Card>
      </Paper>
  );
 }
}

export default TempDisplay;
