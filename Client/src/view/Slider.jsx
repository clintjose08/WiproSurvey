import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

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
class Slider extends Component{
  constructor(props) {
   super(props);
   this.state = {value: 4};
 }

 handleChange = (event, index, value) => this.setState({value});
	render(){
		return(<div><Paper >
      <Card style={{background:'#E5E4E2'}}>
        <CardHeader title="Slider" style={cardheadstyle} titleStyle={cardTitleStyle}/>
        <CardText >
        <SelectField
          floatingLabelText="Question Type"
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
       	<MenuItem value={4} primaryText="Slider" />
        <Link to="Home/SingleText" activeClassName="active">
           <MenuItem value={5} primaryText="Single Textbox" />
        </Link>
				<Link to="Home/Comments" activeClassName="active">
           <MenuItem value={6} primaryText="Comments" />
				</Link>
         </SelectField>
          </CardText>
          <Divider style={{background:'#000000'}}/>
          <CardActions>
          <Subheader style={{fontSize:'125%',color:'#1C6D03',marginTop:'3%'}}>Question</Subheader><br />
          <TextField
            hintText="Enter Your Question Here"
            hintStyle={{fontWeight:'bold'}}
            underlineStyle={{borderColor:'#37861E'}}
            fullWidth={true}
          />
          </CardActions>
					<Divider style={{background:'#000000'}}/>
					<CardActions>
					<Subheader style={{fontSize:'125%',color:'#1C6D03',marginTop:'3%'}}>Scale Range</Subheader><br />
					<TextField
            hintText="Left Side Value"
            hintStyle={{fontWeight:'bold'}}
            underlineStyle={{borderColor:'#37861E'}}
          /><br />
          <TextField
            hintText="Center Value"
            hintStyle={{fontWeight:'bold'}}
            underlineStyle={{borderColor:'#37861E'}}
          /><br />
					<TextField
            hintText="Right Side Value"
            hintStyle={{fontWeight:'bold'}}
            underlineStyle={{borderColor:'#37861E'}}
          /><br />
          </CardActions>
          <Divider style={{background:'#000000'}}/>
          <CardActions >
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
 export default Slider;
