import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {IndexLink, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  textAlign: 'center',
  display: 'inline-block',
  marginLeft:'30%',
  marginTop:'10%',
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
		return(<div><Paper style={style}>
      <Card>
        <CardHeader title="Sign in to your account" style={cardheadstyle} titleColor='white'/>
        <CardText>
          <TextField
            hintText="Username"
          /><br />
          <TextField
            hintText="Password"
          /><br />
          <Link to="/CreateSurvey" activeClassName="active">
            <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
          </Link>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default Login;
