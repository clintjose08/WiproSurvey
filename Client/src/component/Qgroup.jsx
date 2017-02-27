import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Qoption from '../component/Qoption';
import { Grid,Row,Col } from 'react-flexbox-grid';
const styles={
  block: {
    maxWidth: 250,
  },

  checkbox: {
    marginBottom: 16,
  },

  check: {
    marginLeft: 20,
  },
};

const stylepap={

height: 'auto',

marginLeft: '20px',
width: 440,
height: 250,
padding: 0,
paddingBottom: 10,
textAlign: 'center',
display: 'inline-block',

};


const cardheadstyle={
 background:'#242323',
 textAlign:'center'
}
const cardTitleStyle={
   color:'#FFFFFF',
   fontSize:'125%',
   fontWeight:'bold'
}
const buttonStye={
 marginLeft:30,
}
class Qgroup extends Component{


handleChange = (event, index, value) => this.setState({value});
    constructor() {
    super();
    this.state = {
        showQuery: 0,
        showiQuery: 0,
        showiiQuery: 0,
          checked:false,
          checked1: false,
          value: 5,
    }
    this.checkYes = this.checkYes.bind(this);
    this.checkNo = this.checkNo.bind(this);
  }

checkYes() {
       this.setState({showQuery: 1,
         checked: !this.state.checked});
   };

checkNo()
 {
  this.setState({showiQuery: 1,
         checked1: !this.state.checked1});

 };
    render(){
    let showNo = '';
    let showYes = '';

    if(this.state.showiQuery == 1 && this.state.checked1==true)
      {
      showNo=<Grid style={stylepap}>
               <Qoption />
        </Grid>
      }

    if(this.state.showQuery == 1 && this.state.checked==true)
    {
      showYes=<Grid style={stylepap} >
               <Qoption />
          </Grid>
    }
        return(

     <Paper style={{height:'100%'}} >
     <Card style={{background:'#E5E4E2',height:'100%'}}>
       <CardHeader title="Question Group" style={cardheadstyle} titleStyle={cardTitleStyle}/>

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
       <Divider style={{background:'#000000'}}/>
         <CardActions style={{marginTop:'0px',marginLeft:'1%'}}>
          <Subheader style={{fontSize:'125%',color:'#1C6D03 ',marginTop:'3%'}}>Question</Subheader>
         <TextField
           hintText="Enter your Question here."
           hintStyle={{fontWeight:'bold'}}
           underlineStyle={{borderColor:'#37861E'}}
           fullWidth={true}
         />
         <div>
       <h4>your question here</h4>
       <div>
      <Checkbox
      label="Yes"
      style={styles.checkbox}
      value="checked"
      checked={this.state.checked}
      onCheck={this.checkYes}
      />
      {showYes}
      </div>
    <div>
      <Checkbox
        label="No"
        style={styles.checkbox}
        value1="checked"
        checked1={this.state.checked1}
        onCheck={this.checkNo}
      />
       {showNo}
    </div>
   </div>

        </CardActions>

        <Divider style={{background:'#000000'}}/>
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
export default Qgroup;
