import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Grid,Col,Row} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
height:"20%"
}

const questionStyle={
background:'#FFFFFF',
textAlign:'center',
marginTop:'10%',
marginBottom:'10%',
marginLeft:0,
marginRight:0,
height:'25%'
}

const thanksStyle={
background:'#2F3A30',
textAlign:'center',
marginTop:'1%',
height:"35%"

}

const style = {
textAlign: 'center',
height:'80%',
width:'100%',
};



class Dropabble  extends Component {
 render() {
   return(
     <div style={{height:'90%'}}>
      <h2 style={{fontWeight:'bold',textAlign:'center'}}>Your Template</h2>
      <Paper  style={style}>
        <Card style={welcomeStyle}>
          <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF',fontSize:'150%'}}> [Title Comes Here]</h3>
          <Divider/>
          <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Description ]</h4>
        </Card>
        <h3 style={{marginTop:'5%',marginBottom:'5%',color:'#818181',height:'50%'}}>[ Questions Comes Here ]</h3>
        <Card style={thanksStyle}>
          <h3 style={{marginTop:'2%',marginBottom:'2%',color:'#FFFFFF'}}> [Thankyou Mesage Comes Here]</h3>
          <Divider/>
          <h4 style={{marginTop:'1%',marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Create Name ]</h4>
          <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Create Contact Number ]</h4>
          <h4 style={{marginTop:0,marginLeft:'1%',color:'#DAF7A6  ',textAlign:'left'}}>[ Create E-mail ]</h4>
        </Card>
      </Paper>
    </div>
  );
 }
}

export default Dropabble;
