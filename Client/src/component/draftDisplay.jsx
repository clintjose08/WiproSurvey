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

import { DateField,TransitionView, Calendar } from 'react-date-picker';

import Publish from 'material-ui/svg-icons/editor/publish';
import Preview from 'material-ui/svg-icons/action/pageview';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import $ from 'jquery';


var todayDate = new Date();
  var curDay=todayDate.getDate();
  var curMonth = todayDate.getMonth();
  var curYear = todayDate.getFullYear(); 

const onChange = (dateString, { dateMoment, timestamp }) => {
        
         var inputDate = dateString.split(/[-, ]+/);

         
         console.log("day"+curDay+"month"+curMonth+"year"+curYear+"inputDay"+inputDate[0]+"inputmonth"+inputDate[1]+"inputYear"+inputDate[2]);

            if(inputDate!=null && inputDate[0]<curYear)
            {
               alert("Select Atleast Current Year"); 
            }
            else if(inputDate!=null && (inputDate[0]>=curYear) && (inputDate[1]<(curMonth+1)) ) 
            {
                alert("Some  Problem with Month");  
            }  
            else if(inputDate!=null && (inputDate[0]>=curYear) && (inputDate[1]==(curMonth+1)) && (inputDate[2]<curDay) ) 
            {
                alert("Day should be equl or higher than current");  
            } 
            else
            {
                alert("fine");
                var convertDate= new Date(dateString);
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
 }
class DraftDisplay extends Component{

    state = {
    value: 1,
    open: false,
  };
   
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
                          <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                           <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                            <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                         
                     </TableRow>
                     </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                     <TableRow>
                         <TableRowColumn>Feed Back</TableRowColumn>
                         <TableRowColumn>26 Feb 2017</TableRowColumn>
                         <TableRowColumn><RaisedButton label="Publish" backgroundColor='#1E8449' labelColor='#FDFEFE' icon={<Publish />} onTouchTap={this.handleOpen}/></TableRowColumn>
                         <TableRowColumn><RaisedButton label="Preview" backgroundColor='#3498DB' labelColor='#FDFEFE' icon={<Preview />} /></TableRowColumn>
                         <TableRowColumn><RaisedButton label="Delete" backgroundColor='#EC7063' labelColor='#FDFEFE' icon={<Cancel />} /></TableRowColumn>
                     </TableRow>
                    
                  </TableBody>
                </Table>
                </Paper>

                <Dialog
                 title="Select The Options to Complete"
                 actions={actions}
                 modal={false}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
                 autoScrollBodyContent={true}
                 contentStyle={{height:'100%'}} 
                
                >
                
            
                <DateField
                
                    dateFormat="YYYY-MM-DD hh:mm a"
                    onChange={onChange}

                >
                    <TransitionView>
                      <Calendar />                
                    </TransitionView>
                </DateField>
        
        
               </Dialog>
                </Col>
                </Row>
                </Col>
                </Row>
			</Grid>);
		}
	}	

   export default DraftDisplay; 