import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const welcomeStyle={
background:'#2F3A30 ',
textAlign:'center',
marginTop:0,
marginLeft:0,
marginRight:0,
marginBottom:0,
height:"20%"
}

const questionStyle={
background:'#FFFFFF ',
textAlign:'center',
marginTop:0,
marginBottom:0,
marginLeft:0,
marginRight:0,
height:'160%'

}

const thanksStyle={
background:'#2F3A30 ',
textAlign:'center',
marginTop:0,
marginBottom:0,
marginLeft:0,
marginRight:0,
height:"20%"

}

const style = {
textAlign: 'center',
height:'90%'

};



class TempDisplay  extends Component {

componentDidMount() {
   this.setState({question: this.props.question})
  console.log(this.state.question);
 }


render() {


  return(

<div style={{height:'100%'}}>

  <h2 style={{fontWeight:'bold',textAlign:'center'}}>Question Look like this....</h2>
  <Paper  style={style}>

  <Card style={welcomeStyle}>
     <h3 style={{marginTop:0,marginBottom:0,color:'#E1E1E1 ',fontSize:'150%'}}>Header</h3>

  </Card>

    <Card style={questionStyle}>
     <h3 style={{marginTop:0,marginBottom:0,color:'#818181 '}}>[ Questions comes Here ]</h3>
     <h2>{this.state.question}</h2>
    </Card>
  <Card style={thanksStyle}>
     <h3 style={{marginTop:0,marginBottom:0,color:'#E1E1E1 '}}>Footer </h3>
     <Divider/>

  </Card>
  </Paper>




</div>


 );

  }
}

export default TempDisplay;
