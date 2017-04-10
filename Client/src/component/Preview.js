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

import Person from 'material-ui/svg-icons/social/person';
import Phone from 'material-ui/svg-icons/communication/contact-phone';
import Mail from 'material-ui/svg-icons/communication/contact-mail';

import background from '../../images/Home.jpg';
import finish  from '../../images/finish.jpg';
import Request from 'superagent';

class TakeSurvey extends React.Component {
  constructor(props) {
       super(props);

       this.onUnload = this.onUnload.bind(this);
   }
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    allData:'',
    sliderChangevalue:0,
    commentValue:[],
    checkboxValue:[],
    disable:true,
    dropDown:'',
    selectedValue:'',
    checkboxValue:[]
  };
  componentWillMount()
  {

   var sName=this.props.params.sName;

    request.get('http://10.201.174.234:9080/api/getSurvey/'+sName).end((err,res)=>{

      this.setState({
        allData:res.body
      })
    });
  }
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
      data1={surveyName:sName,options:this.state.commentValue}
    //  console.log("posted",data1);
        request.post('http://10.201.174.234:9080/api/answerSurvey/'+sName)
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

    valueChanged=(qstn,newValue) =>  {
      this.setState({commentValue:[]});
      console.log(newValue);
        this.setState({starRating:newValue})
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(newValue);
      this.setState({commentValue:a,disable:false,starRating:newValue});
    }

    dropValueChanged=(qstn,e,i,newValue) =>  {
      this.setState({commentValue:[]});
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(newValue);
      this.setState({commentValue:a,disable:false,dropDown:newValue});
      console.log("comment value set",a)
    }

    singleTextValueChanged=(qstn,e,newValue) =>  {
      this.setState({commentValue:[]});
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(newValue);
      this.setState({commentValue:a,disable:false});
      console.log("comment value set",a)
    }

    commentsValueChanged=(qstn,e,cmtValue) =>  {
      this.setState({commentValue:[]});
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(cmtValue);
      this.setState({commentValue:a,disable:false});
      console.log("comment value set",qstn, this.state.commentValue)
    }

    multiChoiceValueChange=(qstn,e,newValue)=>{
      this.setState({commentValue:[]});
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(newValue);
      this.setState({commentValue:a,disable:false,selectedValue:newValue});

    }

    yesOrNoValueChange=(qstn,e,newValue)=>{
      this.setState({commentValue:[]});
      var a=this.state.commentValue;
      a.pop();
      a.pop();
      a.push(qstn);
      a.push(newValue);
      this.setState({commentValue:a,disable:false});
    }

    checkboxValueChange=(e,i,quest,a,value) =>  {
      this.setState({commentValue:[]});
      var a=this.state.checkboxValue;
      var b=this.state.commentValue;
      console.log("index value set", e,i,a,value)
      console.log("question : ",quest);
      if(value){
      a.push(i)
      this.setState({checkboxValue:a,disable:false});
      console.log("checkbox value set", a)}
      else
      {
        var x= a.indexOf(i)
        a.splice(x,1);
      this.setState({checkboxValue:a,disable:false});
      console.log("checkbox value unsetset", a)}
      b.pop();
      b.pop();
      b.push(quest);
      b.push(a);
      this.setState({commentValue:b});
      console.log("database",this.state.commentValue);
    }

      handleSlider = (quest,event, value) => {
        this.setState({commentValue:[]});
        var a=this.state.commentValue;
        a.pop();
        a.pop();
        a.push(quest);
        a.push(value);
        this.setState({sliderChangevalue:value,disable:false,commentValue:a});
        console.log(value)
        console.log(this.state.sliderChangevalue);
      };

  getStepContent(stepIndex) {
    if(this.state.allData.questions)
    {
    var data=this.state.allData.questions;
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
                    <p style={{textAlign:'left',fontSize:'225%',fontFamily:'Doppio One',marginLeft:'2%',color:'#2E86C1'}}>{this.state.allData.welcomeMsg}</p>
                    <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}>{this.state.allData.description}</p>
                  </Col>
                </Row>
                </Col>
                <Col xs={5}>
                  <img src={background} style={{width:'auto',height:'20%'}} />
                </Col>
                </Row>

              </Paper>
            </Row>

            <div style={{marginTop: 24, marginBottom: 12}}>
              <RaisedButton
                label={'Start'}
                primary={true}
                onTouchTap={this.Welcome}

              />
            </div>
          </Grid>
        </div>
      );
    }
    else if (stepIndex===data.length+1) {
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
                     <p style={{textAlign:'left',fontSize:'225%',fontFamily:'Doppio One',marginLeft:'2%',color:'#2E86C1'}}>{this.state.allData.thanksMessage}</p>
                  </Col>
                  <Col xs ={5}>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Person/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />
                                                                                                                    {this.state.allData.createrName}</p>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Phone/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />
                                                                                                                    {this.state.allData.createrContact}</p>
                       <p style={{textAlign:'left',fontSize:'125%',fontFamily:'Doppio One',marginLeft:'2%'}}><Avatar icon= {<Mail/>}
                                                                                                                   backgroundColor={'#566573'}
                                                                                                                   style={{marginTop:'2%'}} />{this.state.allData.creterEmail}</p>
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
        return(data.map((obj,i)=>{
          if(stepIndex==i+1){
            if(obj.questionType=="Comments"){

        return(<Col xs={12}>

          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
          <h3 style={{marginTop:'1%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ}</h3>


          <TextField
          hintText="Your Option Here"
          hintStyle={{fontWeight:'bold'}}
          underlineStyle={{borderColor:'#37861E '}}
          onChange={this.commentsValueChanged.bind(this,obj.questionQ)}
          />

          </form>
          <section style={{marginTop: 24, marginBottom: 12}}>
           <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

          <RaisedButton
                label={'Next'}
                primary={true}
                disabled={this.state.disable}
                onTouchTap={this.handleNext}
                style={{marginBottom:'2%'}}
              />
              </section>
          </Col>);
      }
      else if(obj.questionType=="Checkbox"){
         var options=[];
          obj.options.map((option,i)=>{
          options.push(<div>
             <Checkbox label={option} onCheck={this.checkboxValueChange.bind(this,i,option,obj.questionQ)} iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
             </div>);
           });
         return(<Col xs={12}>

          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
         <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
         {options}
         </form>
          <section style={{marginTop: 24, marginBottom: 12}}>
         <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

         <RaisedButton
                label={'Next'}
                disabled={this.state.disable}
                primary={true}
                onTouchTap={this.handleNext}
              />
              </section>
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

<SelectField onChange={this.dropValueChanged.bind(this,obj.questionQ)} value={this.state.dropDown} floatingLabelText="--Select--"  floatingLabelStyle={{color:'#808b96'}} underlineStyle={{fill: '#000000'}} >
{options}
</SelectField>
</form>
 <section style={{marginTop: 24, marginBottom: 12}}>
<FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

<RaisedButton
                label={'Next'}
                primary={true}
                disabled={this.state.disable}
                onTouchTap={this.handleNext}
              />
  </section>
</Col>);
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

return(<Col xs={12}>


          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

{options}
</form>
  <section style={{marginTop: 24, marginBottom: 12}}>
<FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

<RaisedButton
                label={'Next'}
                primary={true}
                disabled={this.state.disable}
                onTouchTap={this.handleNext}
                disabled={this.state.disable}
              />

 </section>
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
onChange={this.singleTextValueChanged.bind(this,obj.questionQ)}
/>
</form>

  <section style={{marginTop: 24, marginBottom: 12}}>
<FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

<RaisedButton
                label={'Next'}
                primary={true}
                disabled={this.state.disable}
                onTouchTap={this.handleNext}
              />
  </section>
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

<RadioButtonGroup onChange={this.multiChoiceValueChange.bind(this,obj.questionQ)} name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}}  defaultSelected={this.state.selectedValue}>
{options}
</RadioButtonGroup>
</form>
  <section style={{marginTop: 24, marginBottom: 12}}>
<FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

<RaisedButton
                label={'Next'}
                disabled={this.state.disable}
                primary={true}
                onTouchTap={this.handleNext}
              />
  </section>
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
   defaultValue={0}
   value={this.state.sliderChangevalue}
   onChange={this.handleSlider.bind(this,obj.questionQ)}
   style={{marginLeft:'4%',marginRight:'4%'}}
 />

           <span style={{fontWeight:'bold'}}>{this.state.sliderChangevalue}</span>
           <span style={{fontWeight:'bold'}}>{'/'}</span> <span style={{fontWeight:'bold'}}>{obj.maxValue}</span>
</form>
   <section style={{marginTop: 24, marginBottom: 12}}>
        <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

           <RaisedButton
                           label={'Next'}
                           primary={true}
                           disabled={this.state.disable}
                           onTouchTap={this.handleNext}
                         />
    </section>
</Col>);
}
else if(obj.questionType=="YesOrNo"){


return(<Col xs={12}>
          <form
     style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>

<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

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
</form>

   <section style={{marginTop: 24, marginBottom: 12}}>
 <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />

<RaisedButton
                label={'Next'}
                primary={true}

                onTouchTap={this.handleNext}
                disabled={this.state.disable}
              />
  </section>
</Col>);
}
          }
        }));
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
    return (
      <div style={{width: '100%', marginTop:'50'}}>
      <Paper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
        </Paper>
      </div>
    );
  }
}

export default TakeSurvey;
