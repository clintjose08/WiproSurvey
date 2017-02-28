import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid,Row,Col } from 'react-flexbox-grid';
import MultiChoice from 'material-ui/svg-icons/action/list';
import StarRate from 'material-ui/svg-icons/toggle/star-border';
import Comment from 'material-ui/svg-icons/communication/comment';
import DropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';
import Slide from 'material-ui/svg-icons/editor/linear-scale';
import CheckBox from 'material-ui/svg-icons/toggle/check-box'
import ShortText from 'material-ui/svg-icons/editor/short-text';
import Welcome from 'material-ui/svg-icons/action/input';
import Group from 'material-ui/svg-icons/action/assignment';
import True from 'material-ui/svg-icons/maps/layers-clear';
import Thank from 'material-ui/svg-icons/action/thumb-up';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import {IndexLink, Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
  const buttonStyle={
    width:'100%',
    marginTop:'5%',
    marginBottom:'5%',
  }
class Qoption extends Component{
  constructor(props) {
   super(props);
   this.state = {
   expandedComments: false,
   expandedYesOrNo: false,
   questComments:'',
   questYesOrNo:'',
    };
  };

  expandToggle = (event, toggle) => {
    this.setState({expandedYesOrNo: toggle});
  };
  handleToggle = (event, toggle) => {
    this.setState({expandedComments: toggle});
  };
  questionCommentsChange(e){
    this.props.options([]);
    this.setState(
    {
      quest:e.target.value
    })
    this.props.getCommentsQuestion(e.target.value);
  }
  questionYesOrNoChange(e){
    this.props.options([]);
    this.setState(
    {
      quest:e.target.value
    })
    this.props.getYesOrNoQuestion(e.target.value);
  }
	render(){
		return(
        <div style={{backgroundColor:'#E0E0E0',marginTop:'5%'}}>

            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
             <Card expanded={this.state.expandedComments}>
             <CardActions style={{marginTop:'3%',marginLeft:'1%'}}>
              <Subheader style={{fontSize:'125%',color:'#1C6D03'}}>Comments</Subheader>
              <Toggle
               toggled={this.state.expandedComments}
               onToggle={this.handleToggle}></Toggle>
              </CardActions>

              <CardActions expandable={true}>
                    <TextField 
                    hintText="Type Your Description Here" 
                    hintStyle={{fontWeight:'bold'}} 
                    underlineStyle={{borderColor:'#37861E'}}  
                    fullWidth={true}
                    value={this.state.questComments}
                    onChange={this.questionCommentsChange.bind(this)}/>
                  
                  </CardActions>
              </Card>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
             <Card expanded={this.state.expandedYesOrNo}>
             <CardActions style={{marginTop:'3%',marginLeft:'1%'}}>
              <Subheader style={{fontSize:'125%',color:'#1C6D03'}}>Yes Or No</Subheader>
              <Toggle
               toggled={this.state.expandedYesOrNo}
               onToggle={this.expandToggle}></Toggle>
              </CardActions>

              <CardActions expandable={true}>
                    <TextField 
                    hintText="Type Your Description Here" 
                    hintStyle={{fontWeight:'bold'}} 
                    underlineStyle={{borderColor:'#37861E'}} 
                    fullWidth={true}
                    value={this.state.questYesOrNo}
                    onChange={this.questionYesOrNoChange.bind(this)}/>
                  </CardActions>
              </Card>
            </Row>
            
        </div>
    );
	}
 }
 export default Qoption;