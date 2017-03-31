import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import {IndexLink, Link} from 'react-router';
import request from 'superagent';

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

constructor(props,context:any) {
   super(props,context:any);
   this.state = {
   expanded: false,
   welcomeMsg:'',
   discript:''
    };
  }
	static get contextTypes() {
	        return {
	          router: React.PropTypes.object.isRequired
	        };
	      }

  componentWillMount(){
    this.props.type("Welcome");

  }
componentDidMount(){
}
  handleWelcome(e) {

    this.props.getWelcome(e.target.value);

    this.setState({
			welcomeMsg:e.target.value
		})
    console.log("Sucess");
  }

  handleWelcomeDes(e) {
    this.props.getWelDes(e.target.value);
    this.setState({
			discript:e.target.value
		})
    console.log("Sucess");
  }

 handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

	updateDb(e){
		var sName=localStorage.getItem('sName');
		var welcomeScreen={
			"sName":localStorage.getItem('sName'),
			"type":'welcome',
			"welcomeMsg":this.state.welcomeMsg,
			"description":this.state.discript
		}

		request.post('http://10.201.174.234:9080/api/updateSurvey/'+sName)
						.set('Content-Type', 'application/json')
						.send(welcomeScreen)
						 .end((err,res)=>
						 {
							   this.context.router.push('Home/AddQuestion');
							 console.log("posted");
							})
	}

	render()
	{
		var url="Home/AddQuestion/"+localStorage.getItem("sName");
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
										<Link to={url} activeClassName="active">
											<RaisedButton label="Cancel" labelStyle={{fontWeight:'bold'}} />
											</Link>
											<Link to={url} activeClassName="active">
											<RaisedButton label="Submit" onClick={this.updateDb.bind(this)} backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}} />
											</Link>
								  </CardActions>
						</Card>
					</Paper>

				</div>

			);
	}
}
export default Welcome;
