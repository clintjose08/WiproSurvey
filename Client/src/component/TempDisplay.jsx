import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
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

  /* const components=[];
      components.push(<h3 style={{marginTop:0,marginBottom:0,color:'#818181'}}>[ Questions comes Here ] {this.state.recive}</h3>);
    if(this.props.question){
      components.pop();
      components.push(<div>
      <h2 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.question}</h2>
      <TextField hintText="Your Text Here"/>
    </div>);

    }*/
   var components=[]; 
   var options=[];
   components.push(<h3 style={{marginTop:0,marginBottom:0,color:'#818181'}}>[ Questions comes Here ] </h3>);
   if(this.props.putType=="Checkbox")
   {
     this.props.putOptions.map((option)=>{
       options.push(<Checkbox label={option} disabled={true} /> );
       options.push(<br/>)
     });
   }


   else if(this.props.putQuestion && this.props.putType=="Textbox"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      <TextField 
      hintText="Your Option Here"
      hintStyle={{fontWeight:'bold'}}
      underlineStyle={{borderColor:'#37861E '}}
      />
    </div>);
       
   }
    
   else if(this.props.putQuestion && this.props.putType=="Comments"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:'3%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      <TextField 
      hintText="Your Comments Here"
      hintStyle={{fontWeight:'bold'}}
      underlineStyle={{borderColor:'#37861E '}}
      fullWidth={true}
      />
    </div>);   
   } 

   else if(this.props.putQuestion && this.props.putType=="YesOrNo"){
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
