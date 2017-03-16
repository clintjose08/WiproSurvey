import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {IndexLink, Link} from 'react-router';
import { Grid,Col,Row} from 'react-flexbox-grid';

class SurveyDetails extends Component{
	render(){
		return(<Grid>
        <Row  middle="xs">
         
         <Col xs={12}>
      
          <TextField
            hintText="Name of the survey"
          />
        </Col>
        <Col xs={12}>
        <Row>
       
        <Col xsOffset={1}  xs={1}>
          <Link to="Home/AddQuestion" activeClassName="active">
            <RaisedButton label="Start" backgroundColor="#1C6D03" labelColor='white' labelStyle={{fontWeight:'bold'}} />
          </Link>
        </Col>
          </Row>
          
          </Col>
         
        </Row>
		</Grid>);
	}
 }
 export default SurveyDetails;
