import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Grid,Col,Row} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import request from 'superagent';


import CloseButton from 'material-ui/svg-icons/navigation/close';
import DuplicateButton from 'material-ui/svg-icons/content/content-copy';
import EditButton from 'material-ui/svg-icons/image/edit';

import {IndexLink, Link} from 'react-router';

import ReactStars from 'react-stars';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

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
const ratingChanged = (newRating) => {
  console.log(newRating)
}
class Dropabble  extends Component {

  constructor() {
     super();
    this.state = {
       output:[],
       sliderChange:0,
       starRating: 1,
       starComment:'',
       volume: 0
    }
  }

  componentWillMount() {

    var sName=localStorage.getItem('sName');
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

handleChange(i)
{
  var sName=localStorage.getItem('sName');
    request
    .put('http://localhost:9080/api/deleteQuest/'+sName+'/'+i)
    .end((err,res) => {

    console.log("next");
    // console.log("quest",res.body.questions[1].questionQ);
    });
window.location.reload()
 }

  updateUserSchema(){
    var qstn=[];
    var data={
      surveyname:localStorage.getItem('sName'),
      questions:qstn
      }
      this.state.output.questions.map((obj,i)=>{
        if(obj.questionType=='Slider'){
          qstn.push({question:obj.questionQ,
            questiontype:obj.questionType,
           maxValue:obj.maxValue,
            count:[]})
        }
        else{
          qstn.push({question:obj.questionQ,
            questiontype:obj.questionType,
            options:obj.options,
            count:[]})
              console.log("options",obj.options);
              }
        })

     request.post('http://localhost:9080/api/addResult')
            .set('Content-Type', 'application/json')
            .send(data)
             .then((err,res)=>
             {
               console.log("posted");
              })

  }

  valueChanged=(newValue) =>  {

    for(let i=0;i<this.props.putOptions.length;i++)
    {
      this.setState({starComment:this.props.putOptions[newValue-1]});
    }

    this.setState({starRating:newValue});
    console.log(newValue)
  }


  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
    console.log(value);
  }

  handleSliderChange(value,e) {
      console.log(typeof(value));
       console.log("Convert"+typeof(Number(value))+" value "+value);
    if(e.target.value <= (Number(value)) )
    {
      this.setState({volume:e.target.value});
      this.setState({errorText:''});
    }
    else
    {
      this.setState({errorText:'Max '+value});
      this.setState({volume:0});
    }
  }

render() {
   var welcomeTitle=[];
   var thanksMessage=[];
   var questions=[];
   welcomeTitle.push(
  <Col xs={12}>
      <h3 style={{marginTop:'2%',marginBottom:'2%',fontSize:'150%'}}> Survey Title</h3>
      <Divider/>
      <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#283747',textAlign:'left'}}>Description </h4>

</Col>
    );
    questions.push(
        <h3 style={{marginTop:'5%',marginBottom:'5%',color:'#818181',height:'50%'}}>Your Questions </h3>
      );
    thanksMessage.push(
<Col xs={12}>
       <h3 style={{marginTop:'2%',marginBottom:'2%'}}> Thank You Message</h3>
       <Divider/>
       <h4 style={{marginTop:'1%',marginLeft:'1%',color:'',textAlign:'left',color:'#283747'}}> Creater Name </h4>
       <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}>Creater Contact Number </h4>
       <h4 style={{marginTop:0,marginLeft:'1%',color:'#283747',textAlign:'left'}}> Creater E-mail </h4>
</Col>
      );
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
          if(obj.questionType=="Comments"){
            return(<Card>
              <CardText>
                  <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                     <DuplicateButton style={iconStyles}/>
                  </IconButton>
                  <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                        <EditButton style={iconStyles}/>
                  </IconButton>
                  <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                        <CloseButton style={iconStyles}/>
                  </IconButton>
              </CardText>
              <CardText>
              <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ}</h3>
              </CardText>
              <CardText>
              <TextField
              hintText="Your Option Here"
              hintStyle={{fontWeight:'bold'}}
              underlineStyle={{borderColor:'#37861E '}}
              />
              </CardText>
            </Card>);
          }
          else if(obj.questionType=="Checkbox"){
             var options=[];
              obj.options.map((option)=>{
              options.push(<div>
                 <Checkbox label={option}  iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
                 </div>);

               });

             return(<Card expanded='false'>
               <CardText>
                  <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                       <DuplicateButton style={iconStyles}/>
                  </IconButton>
                  <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                        <EditButton style={iconStyles}/>
                  </IconButton>
                  <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                        <CloseButton style={iconStyles}/>
                  </IconButton>
               </CardText>
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
   options.push(<div>
      <Checkbox label={option}  iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
      </div>);

    });

  return(<Card expanded='false'>
    <CardText>
      <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
             <DuplicateButton style={iconStyles}/>
      </IconButton>
      <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
             <EditButton style={iconStyles}/>
      </IconButton>
      <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
             <CloseButton style={iconStyles}/>
      </IconButton>
    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
  {options}
  </CardText>
  </Card>);
}
else if(obj.questionType=="StarRatings" ){
  var options=[];
   options.push(
     // <StarRating
     //  size={obj.options.length}
     //  value={this.state.starRating}
     //  onChange={this.valueChanged.bind(this)}
     //  />
     
      <ReactStars
        count={obj.options.length}
        onChange={ratingChanged}
        size={35}
        color2={'#ffd700'} />
          );

  return(<Card expanded='false'>
    <CardText>
          <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <DuplicateButton style={iconStyles}/>
          </IconButton>
          <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <EditButton style={iconStyles}/>
          </IconButton>
          <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                <CloseButton style={iconStyles}/>
          </IconButton>
    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
  {options}
  </CardText>
  </Card>);
}
else if(obj.questionType=="SingleText"){
  var options=[];
   obj.options.map((option)=>{
   options.push(<div>
      <Checkbox label={option}  iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
      </div>);

    });

  return(<Card expanded='false'>
    <CardText>
        
        <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <DuplicateButton style={iconStyles}/>
        </IconButton>
        <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <EditButton style={iconStyles}/>
        </IconButton>
        <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                <CloseButton style={iconStyles}/>
        </IconButton>
    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
  {options}
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
          <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <DuplicateButton style={iconStyles}/>
          </IconButton>
          <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                  <EditButton style={iconStyles}/>
          </IconButton>
          <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                  <CloseButton style={iconStyles}/>
          </IconButton>
    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
  <RadioButtonGroup name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >
  {options}
  </RadioButtonGroup>
  </CardText>
  </Card>);
}
else if(obj.questionType=="Slider"){


  return(<Card expanded='false'>
    <CardText>
          
          <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <DuplicateButton style={iconStyles}/>
          </IconButton>
          <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <EditButton style={iconStyles}/>
          </IconButton>
          <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                <CloseButton style={iconStyles}/>
          </IconButton>

    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
      
    <Slider
          min={0}
          max={obj.maxValue}
          step={obj.scale}
          tooltip={true}
          value={this.state.volume}
          orientation="horizontal"
          
          onChange={this.handleOnChange}
            />


          
          <span style={{fontWeight:'bold'}}>Your Score : </span>
          <span style={{fontWeight:'bold'}}> 
          <TextField

            value={this.state.volume}
            onChange={this.handleSliderChange.bind(this,obj.maxValue)}
            style={{width:"20%"}}
            inputStyle={{textAlign:'center'}}
            type = 'number'
            min={0} max={100}
            errorText= {this.state.errorText}
          />
          </span>
          <span style={{fontWeight:'bold',marginLeft:'2%'}}>{'/'}</span> 
          <span style={{fontWeight:'bold',marginLeft:'2%'}}>
                {obj.maxValue}
          </span>


     

  </CardText>
  </Card>);
}
else if(obj.questionType=="YesOrNo"){


  return(<Card expanded='false'>
    <CardText>
        <IconButton tooltip="Duplicate" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <DuplicateButton style={iconStyles}/>
        </IconButton>
        <IconButton tooltip="Edit Question" touch={true} tooltipPosition="bottom-right" style={{marginRight:'4%'}}>
                <EditButton style={iconStyles}/>
        </IconButton>
        <IconButton onTouchTap={this.handleChange.bind(this,obj.questionQ)} tooltip="Delete" touch={true} tooltipPosition="bottom-right"style={{marginRight:'4%'}}>
                <CloseButton style={iconStyles}/>
        </IconButton>
    </CardText>
    <CardText>
  <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{i+1}.{obj.questionQ} </h3>
  </CardText>
  <CardText>
  <RadioButtonGroup name="YesOrNo" style={{textAlign:'left',marginLeft:'5%',marginTop:'2%'}} >

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


var url='/Home/Preview/'+localStorage.getItem('sName');
  return(
    <div style={{height:'90%'}}>
     <Paper  style={style}>
       <Card style={welcomeStyle}>
         {welcomeTitle}
         </Card>

       {questions}
       <Link to={url}>
       <RaisedButton label="Submit" onClick={this.updateUserSchema.bind(this)} backgroundColor='#1C6D03 'labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
       </Link>
       <Card style={thanksStyle}>
           {thanksMessage}
       </Card>

     </Paper>
   </div>
 );
}
}

export default Dropabble;
