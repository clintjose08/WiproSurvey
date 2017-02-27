import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';



const cardheadstyle={
background:'#242323 ',
textAlign:'center'
}
const cardTitleStyle={
  color:'#FFFFFF ',
  fontSize:'125%',
  fontWeight:'bold'
}
const buttonStye={
marginLeft:30,
}



class SingleText extends Component{
constructor(props) {
 super(props);
 this.state = {
     value: 5,
     question:""
 };
}

handleChange = (event, index, value) => this.setState({value});
   render(){
       return(
    <Paper style={{height:'100%'}} >
    <Card style={{background:'#E5E4E2 ',height:'100%'}}>
      <CardHeader title="Comments" style={cardheadstyle} titleStyle={cardTitleStyle}/>

      <CardText style={{marginTop:0}}>
      <div>
      <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}> Question Type </Subheader>

      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
      >
      <Link to="Home/MultiChoice" activeClassName="active">
         <MenuItem value={1} primaryText="Multiple Choice" />
      </Link>
      <Link to="Home/Dropdown" activeClassName="active">
         <MenuItem value={2} primaryText="Dropdown" />
      </Link>
      <Link to="Home/StarRatings" activeClassName="active">
         <MenuItem value={3} primaryText="Star Ratings" />
      </Link>
      <Link to="Home/Slider" activeClassName="active">
         <MenuItem value={4} primaryText="Slider" />
      </Link>
      <MenuItem value={5} primaryText="Single Textbox" />
               <Link to="Home/SingleText" activeClassName="active">
          <MenuItem value={6} primaryText="Comments" />
               </Link>
       </SelectField>

        </div>

      </CardText>
      <Divider style={{background:'#000000 '}}/>
        <CardActions style={{marginTop:'0px',marginLeft:'1%'}}>
         <Subheader style={{fontSize:'125%',color:'#1C6D03 ',marginTop:'3%'}}>Question</Subheader>
          <form >
        <TextField
          hintText="Enter your Question here."
          hintStyle={{fontWeight:'bold'}}
          underlineStyle={{borderColor:'#37861E '}}
          fullWidth={true}

          value={this.state.question}
        />
        </form>
       </CardActions>
       <Divider style={{background:'#000000 '}}/>
      <CardActions style={{marginTop:'0px',marginLeft:'1%'}}>
      <Link to="Home/AddQuestion" activeClassName="active">
        <RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
        </Link>
       <Link to="Home/AddQuestion" activeClassName="active">
        <RaisedButton label="Submit" backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
       </Link>
      </CardActions>

    </Card>
    </Paper>
       );
   }
}
export default SingleText;
