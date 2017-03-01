import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Star from 'material-ui/svg-icons/toggle/star';
import { Grid,Row,Col } from 'react-flexbox-grid';

const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
height:"5%",
margin:'auto'
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginTop:0,
marginBottom:0,
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

   var selOpt=[];
   var components=[];
   if(this.props.putQuestion.length<5){
     components.push(<h3 style={{marginTop:'10%',marginBottom:'10%',color:'#818181'}}>[Question comes here]</h3>)}
   else {
     components.pop()
     components.push(<h2 style={{marginTop:'10%',marginBottom:'10%'}}>{this.props.putQuestion}</h2>)
   }

   if(this.props.putQuestion.length>=5&&this.props.putType==="Checkbox"){

     this.props.putOptions.map((option)=>{
       components.push(<Checkbox label={option} disabled={true} iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%'}}/> );
       components.push(<br/>)
     })
   }

   else if(this.props.putQuestion.length>=5&&this.props.putType==="Textbox"){

     this.props.putOptions.map((option)=>{
      components.push(<TextField value={option} disabled={true} /> )

     })
   }
   else if (this.props.putQuestion.length>=5&&this.props.putType==="Dropdown") {

       var index=1;
       selOpt.push(<MenuItem value={index} primaryText="Select an option"/>)
       this.props.putOptions.map((option)=>{index++;
          selOpt.push(<MenuItem value={index} primaryText={option}/>);
       })
       components.push(<SelectField value={1}>{selOpt}</SelectField>);

   }

   else if(this.props.putQuestion>=5&&this.props.putType==="StarRatings")

   {

     this.props.putOptions.map((option)=>{
       components.push(<Star color="#FFFF00"/>)
       components.push(<TextField value={option} disabled={true} /> )
       components.push(<br/>)
     })
   }
   else if(this.props.putQuestion && this.props.putType=="Qgroup"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:'3%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      <RadioButtonGroup name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >

        <RadioButton
        value="Yes"
        label="Yes"
      />

      <RadioButton
        value="No"
        label="No"
      />


      </RadioButtonGroup>
    </div>);
   }


   return(

      <Paper  style={style}>
        <Card style={welcomeStyle}>
          <h3 style={{marginTop:'0%',marginBottom:'0%',color:'#FFFFFF',fontSize:'150%'}}> [Header]</h3>
        </Card>

        <Card style={questionStyle}>
        {components}
        </Card>

        <Card style={thanksStyle}>
          <h3 style={{marginTop:'18%',marginBottom:'0%',color:'#FFFFFF'}}> [Footer]</h3>
        </Card>
      </Paper>
  );
 }
}

export default TempDisplay;
