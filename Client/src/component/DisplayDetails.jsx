import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {IndexLink, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Grid,Col,Row} from 'react-flexbox-grid';
import GraphDisplay from './graphDisplay'; 
import Analyze from 'material-ui/svg-icons/action/assessment';
import Reminder from 'material-ui/svg-icons/navigation/refresh';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import $ from 'jquery';

class DisplayDetails extends Component{

    state = {
    value: 1,
    open: false,
  };
  componentWillMount() {
               var convertDate= new Date("2017-04-10 5:00 am");
               setInterval(function() {
              
                var now = new Date();
                var difference = convertDate.getTime() - now.getTime();

                if (difference <= 0) {

                    // Timer done
                    //clearInterval(timer);
                    alert("It is done");
                
                } 
                else {
                    
                    var seconds = Math.floor(difference / 1000);
                    var minutes = Math.floor(seconds / 60);
                    var hours = Math.floor(minutes / 60);
                    var days = Math.floor(hours / 24);

                    hours %= 24;
                    minutes %= 60;
                    seconds %= 60;

                    console.log("days-"+days+"hours-"+hours+"minutes-"+minutes+"seconds-"+seconds);
                    $("#days").text(days);
                    $("#hours").text(hours);
                    $("#minutes").text(minutes);
                    $("#seconds").text(seconds);

                 }
                 }, 1000); 
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event, index, value) => this.setState({value});

	render(){

         const actions = [
                <FlatButton
                     label="Cancel"
                     primary={true}
                     onTouchTap={this.handleClose}
                />,

                 ];

		return(<Grid>

                <Row middle="xs">
                <Col xs={12}>
                
                <Row>
                <Col xs={12}>
                <Paper>
                <Table >
                    <TableHeader style={{backgroundColor:'#283747'}} displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>TITTLE</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>CREATE DATE</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>END DATE</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>RESPONSES</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>ANALYZE</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>TIME REMAIN<br/>(DD:HH:MM:SS)</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                     </TableRow>
                     </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                     <TableRow>
                         <TableRowColumn>Feed Back</TableRowColumn>
                         <TableRowColumn>26 Feb 2017</TableRowColumn>
                         <TableRowColumn>30 Mar</TableRowColumn>
                         <TableRowColumn>100</TableRowColumn>
                         <TableRowColumn><RaisedButton label="Statistics" backgroundColor='#616A6B' labelColor='#FDFEFE' icon={<Analyze />} onTouchTap={this.handleOpen}/></TableRowColumn>
                         <TableRowColumn>
                             
                             <span id="days" style={{ fontSize:"110%",fontWeight:'bold'}}></span>:
                             <span id="hours" style={{ fontSize:"110%",fontWeight:'bold'}}></span>:
                             <span id="minutes" style={{fontSize:"110%",fontWeight:'bold'}}></span>:
                             <span id="seconds" style={{ fontSize:"110%",fontWeight:'bold'}}></span>
                         </TableRowColumn>
                         <TableRowColumn><RaisedButton label="Reminder" backgroundColor='#3498DB' labelColor='#FDFEFE' icon={<Reminder />} /></TableRowColumn>
                         <TableRowColumn><RaisedButton label="Cancel" backgroundColor='#EC7063' labelColor='#FDFEFE' icon={<Cancel />} /></TableRowColumn>
                     </TableRow>

                  </TableBody>
                </Table>
                </Paper>

                <Dialog
                 title="Results"
                 actions={actions}
                 modal={false}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
                 autoScrollBodyContent={true}
                 contentStyle={{height:'100%',width:'100%',maxHeight:'none',maxWidth: 'none'}}
                >
                 {<GraphDisplay />}
               </Dialog>
                </Col>
                </Row>
                </Col>
                </Row>
			</Grid>);
		}
	}

   export default DisplayDetails;
