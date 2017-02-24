import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const paperStyle={

	height:'100%'
};
const cardHeaderStyle={

	background:'#242323',
	textAlign:'center'
};
const cardTitleStyle={
   color:'#FFFFFF',
   fontSize:'125%',
   fontWeight:'bold'
}

class WelcomeScreen extends Component
{

constructor(props) {
   super(props);
   this.state = {
   expanded: false,
    };
  }

 handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };
	render()
	{
		return(
				<div >

					<Paper style={{paperStyle}}>
						<Card expanded={this.state.expanded} style={{background:'#E5E4E2'}}>
							<CardHeader title='Welcome Screen' subtitle='Design your welcome screen' subtitleColor='#FFFFFF' style={cardHeaderStyle} titleStyle={cardTitleStyle} >
							</CardHeader>
							<CardActions style={{marginTop:'3%',marginLeft:'1%'}}>
								<Subheader style={{fontSize:'125%',color:'#1C6D03'}}>Title of survey</Subheader>
								<TextField hintText="Type Your Title Here"  hintStyle={{fontWeight:'bold'}} underlineStyle={{borderColor:'#37861E'}}/>
							</CardActions>
							<Divider style={{background:'#000000'}}/>
							<CardActions style={{marginTop:'3%',marginLeft:'1%'}}>
							<Subheader style={{fontSize:'125%',color:'#1C6D03'}}>Description</Subheader>
							<Toggle  
							 toggled={this.state.expanded}
							 onToggle={this.handleToggle}></Toggle>
							</CardActions >

							<CardActions expandable={true}>
         						<TextField hintText="Type Your Description Here" hintStyle={{fontWeight:'bold'}} underlineStyle={{borderColor:'#37861E'}}  fullWidth={true}/>
        					</CardActions>
        					<Divider style={{background:'#000000'}}/>
        					<CardActions >
         						 <RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
         						 <RaisedButton label="Submit" backgroundColor='#1C6D03' labelStyle={{color:'#FFFFFF',fontWeight:'bold'}} />
        					</CardActions>
						</Card>
					</Paper>

				</div>






			);
	}
}
export default WelcomeScreen;