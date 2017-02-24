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
class Dragabble extends Component{
	render(){
		return(<div>
      <h2>TooLkit</h2>
        <div style={{backgroundColor:'#E0E0E0'}}>

            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={12} style={{marginTop:'10%'}}>
                <Link to="Home/Welcome" activeClassName="active">
                  <RaisedButton label="Welcome Screen" backgroundColor='#66BB6A' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} style={buttonStyle} icon={<Welcome />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <Link to="Home/SingleText" activeClassName="active">
                  <RaisedButton label="Short Questions" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<ShortText />}/>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="Home/StarRatings" activeClassName="active">
                  <RaisedButton label="Star Ratings" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<StarRate />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <Link to="Home/MultiChoice" activeClassName="active">
                  <RaisedButton label="Multiple Choice" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<MultiChoice />}/>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="Home/Dropdown" activeClassName="active">
                  <RaisedButton label="Dropdown" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<DropDown />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <Link to="Home/CheckBox" activeClassName="active">
                  <RaisedButton label="Checkbox" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<CheckBox />}/>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="Home/Slider" activeClassName="active">
                  <RaisedButton label="Slider" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<Slide />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <Link to="Home/Qgroup" activeClassName="active">
                  <RaisedButton label="Question Group" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<Group />}/>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="Home/YesOrNo" activeClassName="active">
                  <RaisedButton label="Yes/no" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<True />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={6}>
                <Link to="Home/Comments" activeClassName="active">
                  <RaisedButton label="Comments" backgroundColor='#BDBDBD' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} buttonStyle={{textAlign:'left'}} style={buttonStyle} icon={<Comment />}/>
                </Link>
              </Col>
            </Row>
            <Row style={{marginLeft:'1%',marginRight:'1%'}}>
              <Col xs={12} style={{marginBottom:'10%'}}>
                <Link to="Home/Thankyou" activeClassName="active">
                  <RaisedButton label="Thankyou" backgroundColor='#81D4FA' labelStyle={{fontWeight:'bold',textTransform:'capitalize'}} style={buttonStyle} icon={<Thank />}/>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
    );
	}
 }
 export default Dragabble;
