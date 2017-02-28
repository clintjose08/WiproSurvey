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
import SelectType from './SelectType';

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
class Comments extends Component{
 constructor(props) {
  super(props);
  this.state = {value: 5};
}

handleChange = (event, index, value) => this.setState({value});
    render(){
        return(<div><Paper >
     <Card style={{background:'#E5E4E2'}}>
       <CardHeader title="Comments" style={cardheadstyle} titleStyle={cardTitleStyle}/>

       <CardText style={{marginTop:0}}>
       <div>
       <Subheader style={{fontSize:'125%',color:'#1C6D03 '}}> Question Type </Subheader>


        <SelectType/>
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
        </div>);
    }
}
export default Comments;
