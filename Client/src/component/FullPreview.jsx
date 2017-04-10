import React from 'react';
import request from 'superagent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import StarRating from 'star-rating-react';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
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
  state = {
    answer:[],
    allData:'',
    disable:true
  };
  componentWillMount()
  {
   var sName=this.props.params.sName;
  request.get('http://localhost:9080/api/getSurvey/'+sName).end((err,res)=>{
      this.setState({
        allData:res.body
      })
    });
  }

    valueChanged=(i,event) =>  {
      var ans=this.state.answer;
      ans[i]=event;
      this.setState({answer:ans,disable:false});

    }
    dropValueChanged=(i,event,index,value) =>  {
      var ans=this.state.answer;
      ans[i]=event;
      this.setState({answer:ans,disable:false});
    }
    singleTextValueChanged=(i,event) =>  {
      var ans=this.state.answer;
      ans[i]=event;
      this.setState({answer:ans,disable:false});
    }
    commentsValueChanged=(i,event) =>  {
      var ans=this.state.answer;
      ans[i]=event.target.value;
      this.setState({answer:ans,disable:false});
    }
    multiChoiceValueChange=(i,event)=>{
      var ans=this.state.answer;
      ans[i]=event.target.value;
      this.setState({answer:ans,disable:false});
    }
    yesOrNoValueChange=(i,event)=>{
      var ans=this.state.answer;
      ans[i]=event.target.value;
      this.setState({answer:ans,disable:false});
    }
    checkboxValueChange=(value,i,e,check) =>  {
      var ans=this.state.answer;
      var values=[];
      if(ans[i]!=null)
      values=ans[i];
      if(check)
      values.push(value);
      else {
        var index=values.indexOf(value);
        delete values[index];
      }
      ans[i]=values;
      this.setState({answer:ans,disable:false});
    }

      handleSlider = (i,event,value) => {
      var ans=this.state.answer;
      ans[i]=event.target.value;
      this.setState({answer:ans,disable:false});
      };


  render() {
    var getContent=[];

    if(this.state.allData.questions)
    {
    var data=this.state.allData.questions;
    data.map((obj,i)=>{
      if(obj.questionType=="Comments"){
  getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
    <h3 style={{marginTop:'1%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ}</h3>


    <TextField
    hintText="Your Option Here"
    hintStyle={{fontWeight:'bold'}}
    underlineStyle={{borderColor:'#37861E '}}
    onChange={this.commentsValueChanged.bind(this,i)}
    />

    </form>
    </Col>);
}
else if(obj.questionType=="Checkbox"){
   var options=[];
    obj.options.map((option)=>{
    options.push(<div>
       <Checkbox label={option} onCheck={this.checkboxValueChange.bind(this,option,i)} iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
       </div>);
     });
   getContent.push(<Col xs={12}>
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

getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<SelectField onChange={this.dropValueChanged.bind(this,i)} value={this.state.dropDown} floatingLabelText="--Select--" labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}>
{options}
</SelectField>
</form>
</Col>);
}
else if(obj.questionType=="StarRatings"){
var options=[];
options.push(
<StarRating
size={obj.options.length}
value={this.state.starRating}
onChange={this.valueChanged.bind(this,i)}
/>
);

getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

{options}
</form>
</Col>);
}
else if(obj.questionType=="SingleText"){

getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<TextField
hintText="Your Answer Here"
hintStyle={{fontWeight:'bold'}}
underlineStyle={{borderColor:'#37861E '}}
onChange={this.singleTextValueChanged.bind(this,i)}
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

getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<RadioButtonGroup onChange={this.multiChoiceValueChange.bind(this,i)} name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >
{options}
</RadioButtonGroup>
</form>
</Col>);
}
else if(obj.questionType=="Slider"){


getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<Slider
min={0}
max={obj.maxValue}
step={obj.scale}
defaultValue={0}
value={this.state.sliderChange}
onChange={this.handleSlider.bind(this,i)}
style={{marginLeft:'4%',marginRight:'4%'}}
/>

     <span style={{fontWeight:'bold'}}>{this.state.sliderChange}</span>
     <span style={{fontWeight:'bold'}}>{'/'}</span> <span style={{fontWeight:'bold'}}>{obj.maxValue}</span>
</form>
</Col>);
}
else if(obj.questionType=="YesOrNo"){


getContent.push(<Col xs={12}>
    <form
style={{marginTop:'5%',marginBottom:'2%',borderStyle:'solid',borderRadius:25,borderWidth:2,borderColor:'#212F3D', background:'#F4F6F6'}}>
<h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>

<RadioButtonGroup name="YesOrNo" onChange={this.yesOrNoValueChange.bind(this,i)}style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >

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

</Col>);
}

  });
}  return (
      <div>
      <Grid>
        <Row center="xs">
          <Paper style={{width:'100%',height:'100%'}} zDepth={1}>
          <Row middle="xs">
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
          </Paper>
        </Row>
        <Row center="xs">
          <Paper style={{width:'100%',height:'100%'}} zDepth={1}>
          {getContent}
          </Paper>
        </Row>
        <Row center="xs">
          <Paper style={{width:'100%',height:'100%'}} zDepth={1}>


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
            </Row>

          </Paper>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default TakeSurvey;
