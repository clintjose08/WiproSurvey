import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import background from '../../images/banner.png';
import {IndexLink, Link} from 'react-router';

class CreateSurvey extends Component {


  render() {
    return(

<div>
    <div>
    <Paper  style={{width: '98%', marginTop: 0,marginLeft:15,textAlign:'center'}}>

         <Card>

            <CardMedia
              overlay={<CardTitle title="All Survey Details" subtitle="subtitle" />}

            >
             <img src={background} style={{width:'auto',height:'15%'}} />
            </CardMedia>
            <CardActions>
            <Link to="Home/SurveyDetails" activeClassName="active">
              <RaisedButton label="Create New Survey"
               backgroundColor="#41C80A"
               labelStyle={{color:'white',fontSize:15,fontWeight: 'bold'}}
              style={{textAlign:'center',width:'25%',marginTop:'2%',marginBottom:'1%',padding:'0px'}} />
              </Link>
            </CardActions>
  </Card>

    </Paper>
    </div>

    <div>
    <Paper  style={{width: '98%', marginTop: 0,marginLeft:15}}>
         <div>
         <h1 style={{textAlign: 'center', margin:'10',padding:'10'}}>Your All Surveys</h1>
         <Divider/>
         </div>
         <div  >
         <TableRowColumn>
         <Card >

         <CardText>
         <h1 style={{fontSize:200,color:'#2C9707',textAlign: 'center',marginTop:'0px',marginBottom:'0px'}}>0</h1>
          <h5 style={{fontSize:15,marginTop:'0px',marginBottom:'0px'}}>Your active surveys are here Click below to get details</h5>
          </CardText >
           <CardActions>
            <FlatButton
            backgroundColor="C4C4C4"
            style={{width:'100%' ,textAlign: 'center',fontWeight: 'bold',marginTop:'0px',marginBottom:'0px'}}
            label="Running" />
           </CardActions>

         </Card>
         </TableRowColumn>

         <TableRowColumn>
         <Card >

         <CardText>
         <h1 style={{fontSize:200,color:'#D80202',textAlign: 'center',marginTop:'0px',marginBottom:'0px',}}>2</h1>
          <h5 style={{fontSize:15,marginTop:'0px',marginBottom:'0px'}}>Already closed surveys are here Click below to get details</h5>
          </CardText >
           <CardActions>
            <FlatButton
            backgroundColor="C4C4C4"
            style={{width:'100%' ,textAlign: 'center',marginTop:'0px',fontWeight: 'bold',marginBottom:'0px'}}
            label="Closed" />
           </CardActions>

         </Card>
         </TableRowColumn>

          <TableRowColumn>
         <Card >

         <CardText>
         <h1 style={{fontSize:200,color:'#C1D100',textAlign: 'center',marginTop:'0px',marginBottom:'0px',}}>2</h1>
          <h5 style={{fontSize:15,marginTop:'0px',marginBottom:'0px'}}>Your all draft surveys are here Click below to get details</h5>
          </CardText >
           <CardActions>
            <FlatButton
            backgroundColor="C4C4C4"
            style={{width:'100%' ,textAlign: 'center',fontWeight: 'bold',marginTop:'0px',marginBottom:'0px'}}
            label="Drafts" />
           </CardActions>

         </Card>
         </TableRowColumn>

         </div>
         </Paper>
         </div>

</div>


   );

    }
}

export default CreateSurvey;
