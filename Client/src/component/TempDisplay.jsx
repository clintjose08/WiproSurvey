import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
<<<<<<< HEAD
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
=======

import Rate from 'rc-rate';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider';

>>>>>>> d34de23cbd92d47d8ca2eb7828c0c80095b4689b
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
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

const ratingChanged = (newRating) => {
  console.log(newRating)
  }


class TempDisplay  extends Component {

  state = {
    sliderChange: 0,
    starRating: 1

  };
 componentWillMount() {
   this.setState({starRating:this.props.putOptions.length});
 }

  handleSlider = (event, value) => {
    this.setState({sliderChange: value});
  };



 render() {



    var welcome=[];
   var components=[];
   var thanks=[];
   var options=[];
   var selOpt=[];
   let starValue=this.props.putOptions.length;

     components.push(<h3 style={{marginTop:'10%',marginBottom:'10%',color:'#818181'}}>[Question comes here]</h3>);


   welcome.push( <div>
    <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF',fontSize:'150%'}}> [Title comes Here]</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Description ]</h4>
     </div>);
   thanks.push(<div>
     <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF'}}> [Thank You Mesage comes Here]</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter Name ]</h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter Contact Number ]</h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Craeter E-mail ]</h4>
   </div>);

   if(this.props.putWelMsg && this.props.putType=="Welcome")
   {
     welcome.pop();
     welcome.push(<div>
     <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF',fontSize:'150%'}}>{this.props.putWelMsg}</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>{this.props.putWelDes}</h4>
    </div>);
   }




   else if(this.props.putQuestion&&this.props.putType==="Checkbox"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      </div>);
    this.props.putOptions.map((option)=>{
     components.push(<div>
       <Checkbox label={option}  iconStyle={{marginLeft:'35%'}} labelStyle={{marginRight:'50%',color:'#000000',marginLeft:'2%'}}/>
       </div>);

     })

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
   else if (this.props.putQuestion && this.props.putType==="Dropdown") {

       components.pop();
       components.push(<div>
      <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      </div>);

       var index=1;
       selOpt.push(<MenuItem value={index} primaryText="Select an option"/>)
       this.props.putOptions.map((option)=>{index++;
          selOpt.push(<MenuItem value={index} primaryText={option}/>);
       })
       components.push(<SelectField value={1}>{selOpt}</SelectField>);

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
        labelStyle={{fontWeight:'bold'}}
      />

      <RadioButton
        value="No"
        label="No"
        labelStyle={{fontWeight:'bold'}}
      />


      </RadioButtonGroup>
    </div>);
   }


   else if(this.props.putQuestion &&this.props.putType==="StarRatings")

   {

       components.pop();
       components.push(<div>
      <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      </div>);


       components.push( <div style={{display:'inline-block',marginLeft:'2%',marginTop:'1%',height:'50%'}}>
                {this.props.putOptions.length}

                      <Rate
                        count={5}
                        defaultValue={0}
                      />
                    </div> );

   }

  else if (this.props.putQuestion && this.props.putType=="MultiChoice") {

       components.pop();
       components.push(<div>
      <h3 style={{marginTop:0,marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
      </div>);

    this.props.putOptions.map((option)=>{
      selOpt.push(<RadioButton
      value={option}
      label={option}
      style={{width:'auto', marginRight:'20'}}
      labelStyle={ {marginLeft:'0'}}
    />);
  });
  components.push(<div><RadioButtonGroup name="MultiChoice" style={{ display: 'flex', textAlign:'left'}}>
   {selOpt}
   </RadioButtonGroup>
 </div>);
  }


   else if(this.props.putQuestion && this.props.putType=="Slider"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:'3%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
     <Slider
          min={0}
          max={this.props.putMaxValue}
          step={this.props.putScaleValue}
          defaultValue={0}
          value={this.state.sliderChange}
          onChange={this.handleSlider}
          style={{marginLeft:'4%',marginRight:'4%'}}
        />


          <span style={{fontWeight:'bold'}}>{this.state.sliderChange}</span>
          <span style={{fontWeight:'bold'}}>{'/'}</span> <span style={{fontWeight:'bold'}}>{this.props.putMaxValue}</span>
    </div>);
   }

  else if(this.props.putThanks && this.props.putType=="Thanks")
   {
    thanks.pop();
    thanks.push(<div>
     <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF'}}>{this.props.putThanks}</h3>
      <Divider/>
     <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>{this.props.putName}</h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>Contact Number:{this.props.putContact} </h4>
     <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>E-mail ID:{this.props.putEmail}</h4>
     </div>);
  }
   else if(this.props.putQuestion && this.props.putType=="Qgroup"){
       components.pop();
       components.push(<div>
      <h3 style={{marginTop:'3%',marginLeft:'2%',marginBottom:0,color:'#000000',textAlign:'left'}}>{this.props.putQuestion}</h3>
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
    </div>);
   }
   else if (this.props.putType=="MultiChoice") {
     this.props.putOptions.map((option)=>{
       selOpt.push(<RadioButton
       value={option}
       label={option}
       style={{width:'auto', marginRight:'20'}}
       labelStyle={ {marginLeft:'0'}}
     />);
   });
   components.push(<div><RadioButtonGroup name="MultiChoice" style={{ display: 'flex', textAlign:'left'}}>
    {selOpt}
    </RadioButtonGroup>
  </div>);
   }


   return(

      <Paper  style={style}>
        <Card style={welcomeStyle}>
          {welcome}
        </Card>

        <Card style={questionStyle}>
        {components}
        </Card>

        <Card style={thanksStyle}>
          {thanks}
        </Card>
      </Paper>
  );
 }
}

export default TempDisplay;
