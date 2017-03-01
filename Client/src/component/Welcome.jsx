import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import {IndexLink, Link} from 'react-router';
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

class Welcome extends Component
{

constructor(props) {
   super(props);
   this.state = {
   expanded: false,
    };
  }

  componentWillMount(){
    this.props.type("Welcome");
  }

  handleWelcome(e) {
    
    this.props.getWelcome(e.target.value);
    console.log("Sucess");  
  }

  handleWelcomeDes(e) {

    this.props.getWelDes(e.target.value);
    console.log("Sucess"); 
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
								<TextField 
								hintText="Type Your Title Here"  
								hintStyle={{fontWeight:'bold'}} 
								required
								underlineStyle={{borderColor:'#37861E'}}
                                onChange={this.handleWelcome.bind(this)}   
                                multiLine={true}
								/>
							</CardActions>
							<Divider style={{background:'#000000'}}/>
							<CardActions style={{marginTop:'3%',marginLeft:'1%'}}>
							<Subheader style={{fontSize:'125%',color:'#1C6D03'}}>Description</Subheader>
							<Toggle
							 toggled={this.state.expanded}
							 onToggle={this.handleToggle}></Toggle>
							</CardActions>

							<CardActions expandable={true}>
         						<TextField 
         						hintText="Type Your Description Here" 
         						hintStyle={{fontWeight:'bold'}} 
         						underlineStyle={{borderColor:'#37861E'}} 
         						onChange={this.handleWelcomeDes.bind(this)}
         						multiLine={true}
         						fullWidth={true}/>
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

				</div>






			);
	}
}
export default Welcome;
