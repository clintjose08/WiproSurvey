import React,{PropTypes} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import request from 'superagent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import StarRating from 'star-rating-react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid,Col,Row} from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import ReactStars from 'react-stars';
import DropDownMenu from 'material-ui/DropDownMenu';
import Person from 'material-ui/svg-icons/social/person';
import Phone from 'material-ui/svg-icons/communication/contact-phone';
import Mail from 'material-ui/svg-icons/communication/contact-mail';

import background from '../../images/Home.jpg';
import finish  from '../../images/finish.jpg';
import Request from 'superagent';
var starColor='#ffd700';
var starChange=0;
const thanksStyle={
background:'#649F4E',
textAlign:'center',
marginTop:'1%',
height:'35%'

}
var starArray=[];
var arr=[];
class TakeSurvey extends React.Component {
  constructor(props) {
       super(props);

       this.onUnload = this.onUnload.bind(this);
    this.state = {
       output:[],
       sliderChange:0,
       starRating: .5,
       dropDown:'null',
       singleTextValue:'',
       commentValue:[],
       checkboxValue:[],
       multiChoiceValue:'',
       yesOrNoValue:'',
       sliderValue:'',
       i:0,
       starval:0,
       stepIndex:0
    }
  }
  // componentWillMount()
  // {
  //
  //  var sName=this.props.params.sName;
  //
  //
  //
  //   request.get('http://10.201.174.205:9080/api/getSurvey/'+sName).end((err,res)=>{
  //
  //
  //     this.setState({
  //       output:res.body
  //     })
  //   });
  // }
  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };
  onUnload(event) { // the method that will be used for both add and remove event
       window.onbeforeunload=null;
       console.log("dshgahj");
       $(window).onUnload( function () { alert("Bye now!"); } );
   }

   componentDidMount() {
      window.addEventListener("beforeunload", this.onUnload)
   }

   componentWillUnmount() {
       window.removeEventListener("beforeunload", this.onUnload)
   }
  handleNext = () => {
var sName=this.props.params.sName;
    var options=this.state.commentValue;
    //options.push(this.state.commentValue);

var data1={};
    var data1={surveyName:sName,options:this.state.commentValue}
        request.put('http://10.201.174.205:9080/api/answerSurvey/'+sName)

                .set('Content-Type', 'application/json')
                .send(data1)
                 .end(function(err,res)
                 {
                   if(err){
                     console.log("err",err);
                   }
                   if(res){
                     console.log("posted",res);
                   }

                 });
                 this.setState({
                   disable:true
                 })
                 const {stepIndex} = this.state;
                 if (!this.state.loading) {
                   this.dummyAsync(() => this.setState({
                     loading: false,
                     stepIndex: stepIndex + 1
                   }));
                 }
  };

Welcome=()=>{
  const {stepIndex} = this.state;
  if (!this.state.loading) {
    this.dummyAsync(() => this.setState({
      loading: false,
      stepIndex: stepIndex + 1,
    }));
  }
}

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  componentWillMount() {

    var sName=this.props.params.sName;
      request
      .get('http://10.201.174.205:9080/api/getSurvey/'+sName)
      .end((err,res) => {
        this.setState({
          output:res.body
        });
      console.log("next",res.body.welcomeMsg);
      // console.log("quest",res.body.questions[1].questionQ);
      });

    }

  update(quest,i){
  var a=this.state.commentValue;
  a[i]={"quest":quest,"answer":starChange};
  console.log("starChange"+a);
  this.setState({commentValue:a});

  }
  valueChanged=(quest,i,newRating) =>  {
    starChange=newRating;
    starColor='#ffd700';
    var a=this.state.commentValue;
    a[i]={"quest":quest,"answer":starChange};
    console.log("starChange"+a);
    this.setState({commentValue:a});

    starArray.push({"quest":quest,"answer":newRating,"index":i})
    newRating=starChange;
    this.setState({starval:newRating});
      console.log("comment value set",starArray)

  }
  dropValueChanged=(quest,i,e,opt,newValue) =>  {
    var a=this.state.commentValue;
    a[i]={"quest":quest,"answer":newValue};
    this.setState({dropDown:newValue,commentValue:a});
      console.log("comment value set",this.state.commentValue)
      console.log(i,quest,newValue);
  }
  singleTextValueChanged=(i,quest,e,newValue) =>  {
    var a=this.state.commentValue;
    a[i]={"quest":quest,"answer":newValue};
    this.setState({singleTextValue:newValue,commentValue:a});
      console.log("comment value set",this.state.commentValue)
    console.log("singletext value set", newValue)
  }

  commentsValueChanged=(quest,i,e,newValue) =>  {
  var a=this.state.commentValue;
  a[i]={"quest":quest,"answer":newValue};
    // this.state.commentValue.push(newValue);
    this.setState({commentValue:a});
    console.log("comment value set",this.state.commentValue)
  }
  multiChoiceValueChange=(quest,i,e,value)=>{
    var a=this.state.commentValue;
    a[i]={"quest":quest,"answer":value};
    this.setState({multiChoiceValue:value,commentValue:a});
      console.log("comment value set",this.state.commentValue)
    console.log("multiChoiceValue",value,quest,i);
  }
  yesOrNoValueChange=(quest,i,e,value)=>{
    var a=this.state.commentValue;
    a[i]={"quest":quest,"answer":value};
    this.setState({yesOrNoValue:value,commentValue:a});
      console.log("comment value set",this.state.commentValue)
    console.log("yesOrNoValue",value);
  }
  checkboxValueChange=(value,quest,index,ansindex,e,status) =>  {
    var ans=this.state.commentValue;
    var a=this.state.checkboxValue;
    console.log("index value set", value)
    if(status){
    a.push(value)
    this.setState({checkboxValue:a});
    console.log("checkbox value set",value,quest,index,ansindex,e,status)}

    else
    {
      var x= a.indexOf(value)
      a.splice(x,1);
    this.setState({checkboxValue:a});
    console.log("checkbox value unsetset", a)}
    ans[index]={"quest":quest,"answer":a};
    this.setState({commentValue:ans});
    console.log("comment value set",this.state.commentValue)
  }
  saveData = () => {
  if(starArray.length!=0){
  for(let i=0;i<starArray.length;i++){
    var a=this.state.commentValue;
    a[starArray[i].index]={"quest":starArray[i].quest,"answer":starArray[i].answer};
    console.log("starChange"+a);
    this.setState({commentValue:a});
    console.log(starArray[i].index,starArray[i].quest,starArray[i].answer);
  }

  }
    var sName1=this.props.params.sName;
        var options=this.state.commentValue;
        //options.push(this.state.commentValue);

        var data1={};
          data1={surveyName:sName1,options:this.state.commentValue}
          request.post('http://10.201.174.205:9080/api/fullAnswers/'+sName1)
                  .set('Content-Type', 'application/json')
                  .send(options)
                   .end(function(err,res)
                   {
                     if(err){
                       console.log("err",err);
                     }
                     if(res){
                       console.log("posted",res);
                     }

                   });
  }

  getStepContent(stepIndex) {
    if(this.state.output.questions)
    {
    var data=this.state.output.questions;
    var length=data.length;

    if(stepIndex==0)
    {
      return (
        <div>
          <Grid>
            <Row center="xs">
              <Paper style={{width:'100%',height:'100%'}} zDepth={1}>
              <Row middle="xs">
              <Col xs={6}>
                <Row>
                <Col xs={12}>
                <section style={{marginLeft:'2%',background:'#28B463',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#F8F9F9'}}>
                  <h2 style={{color:'#F8F9F9',fontSize:'150%',paddingTop:"2%",paddingBottom:'2%',fontFamily: 'Fenix'}}>Tell Us What You Think....</h2>
                </section>
                </Col>
                </Row>
                 <Row >
                  <Col xs={12}>
                    <p style={{textAlign:'left',fontSize:'225%',fontFamily:'Doppio One',marginLeft:'2%',color:'#2E86C1'}}>{this.state.output.welcomeMsg}</p>
                    <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}>{this.state.output.description}</p>
                  </Col>
                </Row>
                </Col>
                <Col xs={5}>
                  <img src={background} style={{width:'auto',height:'20%'}} />
                </Col>
                </Row>
                <Col xsOffset={6} xs={6}>
                <Row>
                <h3>Your Name : </h3>  <TextField
                  hintText="Your Name Here"
                  hintStyle={{fontWeight:'bold'}}
                  underlineStyle={{borderColor:'#37861E '}}

                  />
                  </Row>
                  <Row>
                <h3>Emp ID : </h3>  <TextField
                  hintText="Your Emp ID Here"
                  hintStyle={{fontWeight:'bold'}}
                  underlineStyle={{borderColor:'#37861E '}}

                  />
                  </Row>
                  <Row>
                <h3>Your Current role : </h3>  <TextField
                  hintText="Your Role Here"
                  hintStyle={{fontWeight:'bold'}}
                  underlineStyle={{borderColor:'#37861E '}}

                  />
                </Row>
                </Col>
              </Paper>
            </Row>


          </Grid>
        </div>
      );
    }
    else if (stepIndex===2) {
      return (
        <div>
          <Grid>
            <Row center="xs">
              <Paper style={{width:'100%',height:'100%'}} zDepth={1}>

                <Row >
                    <Col xs={12}>
                        <img src={finish} style={{width:'auto',height:'70%'}} />
                        <Divider/>
                    </Col>
                </Row>

                <Row center="xs">
                  <Col xs={6}>
                     <p style={{textAlign:'left',fontSize:'225%',fontFamily:'Doppio One',marginLeft:'2%',color:'#2E86C1'}}>{this.state.output.thanksMessage}</p>
                  </Col>
                  <Col xs ={5}>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Person/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />
                                                                                                                    {this.state.output.createrName}</p>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Phone/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />
                                                                                                                    {this.state.output.createrContact}</p>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Mail/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />{this.state.output.creterEmail}</p>
                  </Col>
                  <RaisedButton
                        label={'Finish'}
                        primary={true}
                        onClick={$(window).bind("beforeunload", function() {
   return true || confirm("Do you really want to close?");
})}
                      />

                </Row>

              </Paper>
            </Row>
            <div style={{marginTop: 24, marginBottom: 12}}>
              <p>You can close your window now</p>
            </div>
          </Grid>
        </div>
      );
    }
    else {

        return(

          data.map((obj,i)=>{
            if(obj.questionType=="Comments"){

        return(<Col xs={12}>

          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
          <h3 style={{marginTop:'1%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ}</h3>

          <TextField
          hintText="Your Option Here"
          hintStyle={{fontWeight:'bold'}}
          underlineStyle={{borderColor:'#37861E '}}
          onChange={this.commentsValueChanged.bind(this,obj.questionQ,i)}
          />

          </form>
          </Col>);
      }
      else if(obj.questionType=="Checkbox"){
         var options=[];
          obj.options.map((option,j)=>{
          options.push(<div>
            <Checkbox label={option} onCheck={this.checkboxValueChange.bind(this,option,obj.questionQ,i,j)} iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
           </div>);
           });
         return(<Col xs={12}>

          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
     <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
   {options}
         </form>
         </Col>);
       }
else if(obj.questionType=="Dropdown"){
var options=[];
obj.options.map((option)=>{
options.push(
    <MenuItem value={option} primaryText={option} iconStyle={{marginLeft:'35%'}}/>
  );


});

return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<DropDownMenu onChange={this.dropValueChanged.bind(this,obj.questionQ,i)} value={this.state.dropDown} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}>
{options}
</DropDownMenu>
</form>

</Col>);
}
else if(obj.questionType=="StarRatings"){
var options=[];
options.push(
  <ReactStars
   count={obj.options.length}
   onChange={this.valueChanged.bind(this,obj.questionQ,i)}
   value={this.state.starval}
   size={35}
   color2={starColor}
   />
);

return(<Col xs={12}>


          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

{options}
</form>

</Col>);
}
else if(obj.questionType=="SingleText"){

return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<TextField
hintText="Your Answer Here"
hintStyle={{fontWeight:'bold'}}
underlineStyle={{borderColor:'#37861E '}}
onChange={this.commentsValueChanged.bind(this,obj.questionQ,i)}
/>
</form>
</Col>);
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

return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<RadioButtonGroup onChange={this.multiChoiceValueChange.bind(this,obj.questionQ,i)} name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >
{options}
</RadioButtonGroup>
</form>
</Col>);
}
else if(obj.questionType=="Slider"){


return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<Slider

      min={0}
      max={obj.maxValue}
      step={obj.scale}
      tooltip={true}
      value={arr[i]}
      orientation="horizontal"
      onChange={this.handleOnChange.bind(this,i)}
        />


           <span style={{fontWeight:'bold'}}>{this.state.sliderChangevalue}</span>
           <span style={{fontWeight:'bold'}}>{'/'}</span> <span style={{fontWeight:'bold'}}>{obj.maxValue}</span>
</form>
</Col>);
}
else if(obj.questionType=="YesOrNo"){


return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<RadioButtonGroup name="YesOrNo" onChange={this.yesOrNoValueChange.bind(this,obj.questionQ,i)}style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >

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
</form>
</Col>
);
}

        })




      );

      }

    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};


    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>

      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;
    const but=[];
  if(stepIndex==0)
    {

      but.push(<div style={{marginTop: 24, marginBottom: 12}}>
        <RaisedButton
          label={'Start'}
          primary={true}
          onTouchTap={this.Welcome}

        />
      </div>);
    }
    else if(stepIndex==1)
    {
      but.push(<div style={{marginTop: 24, marginBottom: 12}}>
        <RaisedButton
          label={'Finsish'}
          primary={true}
          onTouchTap={this.Welcome}

        />
      </div>);
    }
    return (
      <div style={{width: '100%', marginTop:'50'}}>
      <Paper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
          {but}
        </Paper>
      </div>
    );
  }
}

export default TakeSurvey;
