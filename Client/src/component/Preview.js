import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Grid,Col,Row} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import request from 'superagent';
import ActionInfo from 'material-ui/svg-icons/navigation/close';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';
import {IndexLink, Link} from 'react-router';
import StarRating from 'star-rating-react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const welcomeStyle={
background:'#649F4E',
textAlign:'center',
height:'20%'
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
height:'35%'

}

const style = {
textAlign: 'center',
height:'80%',
width:'100%',
};

const iconStyles = {
  textAlign:'left',
};


class Dropabble  extends Component {
  constructor() {
     super();
    this.state = {

       output:[],
       sliderChange:0,
       starRating: 1,
       dropDown:'null',
       singleTextValue:'',
       commentValue:[],
       checkboxValue:[],
       multiChoiceValue:'',
       yesOrNoValue:'',
       sliderValue:'',

       i:0
    }
  }
  componentWillMount() {

    var sName=this.props.params.sName;
      request
      .get('http://localhost:9080/api/getSurvey/'+sName)
      .end((err,res) => {
        this.setState({
          output:res.body
        });
      console.log("next",res.body.welcomeMsg);
      // console.log("quest",res.body.questions[1].questionQ);
      });

    }


  valueChanged=(qstn,newValue) =>  {
      this.setState({starRating:newValue})
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});

  }
  dropValueChanged=(qstn,e,i,newValue) =>  {
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});
    console.log("comment value set",a)
  }
  singleTextValueChanged=(qstn,e,newValue) =>  {
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});
    console.log("comment value set",a)
  }

  commentsValueChanged=(qstn,e,newValue) =>  {
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});
    console.log("comment value set",qstn, this.state.commentValue)
  }
  multiChoiceValueChange=(qstn,e,newValue)=>{
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});
  }
  yesOrNoValueChange=(qstn,e,newValue)=>{
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(qstn);
    a.push(newValue);
    this.setState({commentValue:a});
  }
  checkboxValueChange=(e,i,value) =>  {
    var a=this.state.checkboxValue;
    console.log("index value set", value)
    if(value){
    a.push(e)
    this.setState({checkboxValue:a});
    console.log("checkbox value set", a)}

    else
    {
      var x= a.indexOf(e)
      a.splice(x,1);
    this.setState({checkboxValue:a});
    console.log("checkbox value unsetset", a)}
  }
updateDb(e){
var options=this.state.commentValue;
//options.push(this.state.commentValue);
var data={surveyName:localStorage.getItem('sName'),options:this.state.commentValue}
    request.put('http://localhost:9080/api/answerSurvey')
            .set('Content-Type', 'application/json')
            .send(data)
             .then((err,res)=>
             {
               console.log("posted");
              })

console.log("options push : ",data.options[0]);
  }

  handleSlider = (quest,event, value) => {
    var a=this.state.commentValue;
    a.pop();
    a.pop();
    a.push(quest);
    a.push(value);
    this.setState({commentValue:a});
    this.setState({sliderChange:value});
    console.log(this.state.sliderChange,a);

  };
 render() {

   var welcomeTitle=[];
   var thanksMessage=[];
   var questions=[];

       if(this.state.output.welcomeMsg)
       {
         console.log("state", this.state.output.welcomeMsg);
         welcomeTitle.pop();
         welcomeTitle.push(<div>
         <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF',fontSize:'150%'}}>{this.state.output.welcomeMsg}</h3>
          <Divider/>
         <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>{this.state.output.description}</h4>
        </div>);
       }
       if(this.state.output.thanksMessage)
       {
         console.log("state", this.state.output.welcomeMsg);
         thanksMessage.pop();
         thanksMessage.push(<div>
           <h3 style={{marginTop:'2%',marginBottom:'2%'}}>{this.state.output.thanksMessage}</h3>
           <Divider/>
           <h4 style={{marginTop:'1%',marginLeft:'1%',color:'',textAlign:'left',color:'#283747'}}>{this.state.output.createrName}</h4>
           <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}>{this.state.output.createrContact}</h4>
           <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}>{this.state.output.creterEmail} </h4>
                 </div>);
       }
       if(this.state.output.questions)
       {

         questions.pop();
         questions.push(this.state.output.questions.map((obj,i)=>{
           // comments question
           if(obj.questionType=="Comments"){
             return(<Card>
               <CardText>
               <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ}</h3>
               </CardText>
               <CardText>
               <TextField
               hintText="Your Option Here"
               hintStyle={{fontWeight:'bold'}}
               underlineStyle={{borderColor:'#37861E '}}
               onChange={this.commentsValueChanged.bind(this,obj.questionQ)}
               />
               </CardText>
             </Card>);
           }
           else if(obj.questionType=="Checkbox"){
              var options=[];
               obj.options.map((option)=>{
               options.push(<div>
                  <Checkbox label={option} onCheck={this.checkboxValueChange.bind(this,option)} iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
                  </div>);
                });
              return(<Card expanded='false'>
                <CardText>
              <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
              </CardText>
              <CardText>
              {options}
              </CardText>
              </Card>);
            }
else if(obj.questionType=="Dropdown"){
   var options=[];
    obj.options.map((option)=>{
    options.push(
         <MenuItem value={option} primaryText={option} iconStyle={{marginLeft:'35%'}}/>
       );


     });

   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   <DropDownMenu onChange={this.dropValueChanged.bind(this,obj.questionQ)} value={this.state.dropDown} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}>
   {options}
   </DropDownMenu>
   </CardText>
   </Card>);
}
else if(obj.questionType=="StarRatings"){
   var options=[];
    options.push(
      <StarRating
       size={obj.options.length}
       value={this.state.starRating}
       onChange={this.valueChanged.bind(this,obj.questionQ)}
       />
     );

   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   {options}
   </CardText>
   </Card>);
}
else if(obj.questionType=="SingleText"){

   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   <TextField
   hintText="Your Answer Here"
   hintStyle={{fontWeight:'bold'}}
   underlineStyle={{borderColor:'#37861E '}}
   onChange={this.singleTextValueChanged.bind(this,obj.questionQ)}
   />
   </CardText>
   </Card>);
}
else if(obj.questionType=="MultiChoice"){
   var options=[];
    obj.options.map((option)=>{
    options.push(
      <RadioButton
      value={option}
      label={option}

      iconStyle={{marginLeft:'35%'}}
      labelStyle={ {marginLeft:'0'}}/>);

     });

   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   <RadioButtonGroup onChange={this.multiChoiceValueChange.bind(this,obj.questionQ)} name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >
   {options}
   </RadioButtonGroup>
   </CardText>
   </Card>);
}
else if(obj.questionType=="Slider"){


   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   <Slider
        min={0}
        max={obj.maxValue}
        step={obj.scale}
        defaultValue={0}
        value={this.state.sliderChange}
        onChange={this.handleSlider.bind(this,obj.questionQ)}
        style={{marginLeft:'4%',marginRight:'4%'}}
      />

                <span style={{fontWeight:'bold'}}>{this.state.sliderChange}</span>
                <span style={{fontWeight:'bold'}}>{'/'}</span> <span style={{fontWeight:'bold'}}>{obj.maxValue}</span>

   </CardText>
   </Card>);
}
else if(obj.questionType=="YesOrNo"){


   return(<Card expanded='false'>

     <CardText>
   <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   </CardText>
   <CardText>
   <RadioButtonGroup name="YesOrNo" onChange={this.yesOrNoValueChange.bind(this,obj.questionQ)}style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >

     <RadioButton
     value="Yes"
     label="Yes"
     labelStyle={{fontWeight:'bold'}}
   />

   <RadioButton
     value="No"
     label="No"
     labelStyle={{fontWeight:'bold'}}
   />
   </RadioButtonGroup>
   </CardText>
   </Card>);
}


      }
  ));
       }



   return(
     <div style={{height:'90%'}}>
      <h2 style={{fontWeight:'bold',textAlign:'center'}}>Your Template</h2>
      <Paper  style={style}>
        <Card style={welcomeStyle}>
          {welcomeTitle}
          </Card>

        {questions}

        <Card style={thanksStyle}>
            {thanksMessage}
            <RaisedButton label="Submit" backgroundColor='#1C6D03 ' onClick={this.updateDb.bind(this)} labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}}/>

        </Card>

      </Paper>
    </div>
  );
 }
}

export default Dropabble;
