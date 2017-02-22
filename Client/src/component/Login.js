import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {IndexLink, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import survey from '../../images/survey.jpg';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  textAlign: 'center',
  display: 'inline-block',
  width:'40%',
  height:'50%',
};
const cardheadstyle={
  background:'black',
  textAlign:'center',

}
const buttonStye={
  color:'white',
}


class Login extends Component{
	render(){
		return(<div  style={{textAlign:'center',marginTop:"7%"}}>
      <img src= {survey} style={{postion:'fixed',margin:'auto',width:400,height:'auto'}}/>
      <h1 >Survey Test</h1>
      <Paper style={style}>
      
      <Card>
        <CardHeader title="Please sign in to your account" style={cardheadstyle} titleStyle={{fontWeight:'bold',fontSize:20,textAlign:'left'}} titleColor='white'/>
        <CardText>
          <TextField
            hintText="Username"
          /><br />
          <TextField
            hintText="Password"
          /><br />
          <Link to="Home/CreateSurvey" activeClassName="active">
            <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
          </Link>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default Login;
