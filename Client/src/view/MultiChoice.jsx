import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddOptions from '../component/AddOptions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Divider from 'material-ui/Divider';
import { Grid,Col,Row} from 'react-flexbox-grid';
import {blueGrey500,white} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';


const compStyle={
marginTop:40,
width:'100%'
}

const cardStyle={

}

const textStyle={
marginRight:130
}
class MultiChoice extends Component {
 constructor() {
   	super();
   this.state = {
     optionArr: [' '],
		 value: 1
   }
 }

handleChange = (event, index, value) => this.setState({value});
 addOptions(e)
 {
  var arr=this.state.optionArr;
  arr.push(' ');
  this.setState({
    optionArr:arr
  })
 }
 removeOptions=(index)=>
 {
  var arr=this.state.optionArr;
  arr.splice(index,1);
  this.setState({
    optionArr:arr
  })
 }
changeOptions=(index,value)=>
{
  var arr=this.state.optionArr;
  arr[index]=value;
  this.setState({
  optionArr:arr
  })
}
 render() {
   const options=this.state.optionArr.map((value,index) => {
     return (
     <AddOptions addoptions={this.addOptions.bind(this)} index={index} value={value} removeoptions={this.removeOptions.bind(this)} changeoptions={this.changeOptions.bind(this)}/>
     );
   });
   return (

      <Grid>
          <Row>
            <Col xs={12}>
                <Paper style={compStyle}>
                <Card style={cardStyle} style={{background:"#E5E4E2"}}>
                <CardHeader
                  title="Create Multiple Choice Questions" style={{background:"#242323",}} titleStyle={{fontWeight:'bold',color:'#FFFFFF',marginLeft:'20%'}}
                />
                <CardText >
                <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Select the question type</Subheader>
					       <SelectField
    	           floatingLabelText="Question Type"
    	           value={this.state.value}
    	           onChange={this.handleChange}
                 underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
                 style={textStyle}
	               >
	                 <MenuItem value={1} primaryText="Multiple Choice" />
        	         <Link to="Home/MultiChoice" activeClassName="active">
        	            <MenuItem value={2} primaryText="Dropdown" />
        	         </Link>
        	         <Link to="Home/StarRatings" activeClassName="active">
        	            <MenuItem value={3} primaryText="Star Ratings" />
        	         </Link>
        	         <Link to="Home/Slider" activeClassName="active">
        	            <MenuItem value={4} primaryText="Slider" />
        	         </Link>
        	         <Link to="Home/SingleText" activeClassName="active">
        	            <MenuItem value={5} primaryText="Single Textbox" />
        	         </Link>
        					 <Link to="Home/Comments" activeClassName="active">
        	            <MenuItem value={5} primaryText="Comments" />
        					</Link>
                  <Link to="Home/Checkbox" activeClassName="active">
                     <MenuItem value={5} primaryText="Checkbox" />
                 </Link>
	              </SelectField>
	              <br /><br />
                <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Enter the question</Subheader>
                 <TextField
                  floatingLabelText="Type your question here" value=" " underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}} style={textStyle}/>
                <br /><br />
                <Divider style={{background:blueGrey500}}/>
                <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}>Add answer options</Subheader>
                {options}
                <br />
                </CardText>
                  <Divider style={{background:blueGrey500}}/>
                <CardActions>

  	           <Link to="Home/AddQuestion" activeClassName="active">
  	             <RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
  	           </Link>
               <Link to="Home/AddQuestion" activeClassName="active">
                 <RaisedButton label="Submit" backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}}/>
              </Link>
              </CardActions>
               </Card>
               </Paper>

             </Col>

             </Row>
             </Grid>

   );
 }
}

export default MultiChoice;
