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
import {IndexLink, Link} from 'react-router';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
  const buttonStyle={
    width:'100%',
    marginTop:'5%',
    marginBottom:'5%',
  }
class Qoption extends Component{
	render(){
		return(
        <div style={{backgroundColor:'#E0E0E0',marginTop:'5%'}}>

            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <RaisedButton label="Short Questions" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<ShortText />}/>
              </Col>
              <Col xs={6}>
                <RaisedButton label="Star Ratings" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<StarRate />}/>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <RaisedButton label="Multiple Choice" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<MultiChoice />}/>
              </Col>
              <Col xs={6}>
                <RaisedButton label="Dropdown" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<DropDown />}/>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <RaisedButton label="Checkbox" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<CheckBox />}/>
              </Col>
              <Col xs={6}>
                <RaisedButton label="Slider" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<Slide />}/>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <RaisedButton label="Comments" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<Group />}/>
              </Col>
              <Col xs={6}>
                <RaisedButton label="Yes/no" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<True />}/>
              </Col>
            </Row>

        </div>
    );
	}
 }
 export default Qoption;