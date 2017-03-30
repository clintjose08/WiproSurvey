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
import request from 'superagent';
class DisplayDetails extends Component{

    state = {
    value: 1,
    open: false,
    output:[],
    name:''
  };


  componentWillMount(){
    request
    .get('http://10.201.174.210:9080/api/getDetails/')
    .end((err,res) => {
      this.setState({
        output:res.body
      });
      console.log("result",res.body);
    });
  }
  handleOpen(name){
    console.log("name",name);
    this.setState({open: true,name:name});
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
    var details=[];
    details.push(this.state.output.map((obj)=>{
      return (<TableRow>
          <TableRowColumn>{obj.surveyname}</TableRowColumn>
          <TableRowColumn>26 Feb 2017</TableRowColumn>
          <TableRowColumn>30 Mar</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
          <TableRowColumn><RaisedButton label="Statistics" backgroundColor='#616A6B' labelColor='#FDFEFE' icon={<Analyze />} onTouchTap={this.handleOpen.bind(this,obj.surveyname)}/></TableRowColumn>
          <TableRowColumn>Running</TableRowColumn>
          <TableRowColumn><RaisedButton label="Reminder" backgroundColor='#3498DB' labelColor='#FDFEFE' icon={<Reminder />} /></TableRowColumn>
          <TableRowColumn><RaisedButton label="Cancel" backgroundColor='#EC7063' labelColor='#FDFEFE' icon={<Cancel />} /></TableRowColumn>
      </TableRow>)
    }));

		return(<Grid>

                <Row middle="xs">
                <Col xs={12}>
                <Row center="xs">
                    <Col xs={8}>
                      <SelectField
                        floatingLabelText="Select Status"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={{fontWeight:'bold',fontSize:'125%'}}
                        floatingLabelStyle={{color:'#FDFEFE'}}
                     >
                         <MenuItem value={1} primaryText="Running" />
                         <MenuItem value={2} primaryText="Closed" />
                         <MenuItem value={3} primaryText="All Surveys" />
                    </SelectField>
                    </Col>
                </Row>
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
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}>STATUS</TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                         <TableHeaderColumn style={{color:'#FDFEFE ',fontWeight:'bold'}}></TableHeaderColumn>
                     </TableRow>
                     </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                  {details}

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
                 {<GraphDisplay name={this.state.name}/>}
               </Dialog>
                </Col>
                </Row>
                </Col>
                </Row>
			</Grid>);
		}
	}

   export default DisplayDetails;
