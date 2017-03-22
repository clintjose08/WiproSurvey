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

import Publish from 'material-ui/svg-icons/editor/publish';
import Preview from 'material-ui/svg-icons/action/pageview';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
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

   export default DraftDisplay; 