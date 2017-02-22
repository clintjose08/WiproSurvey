import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import MultiChoice from 'material-ui/svg-icons/action/list';
import StarRate from 'material-ui/svg-icons/toggle/star-border';
import Comment from 'material-ui/svg-icons/communication/comment';
import DropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';
import Slide from 'material-ui/svg-icons/content/remove';
import { Grid,Col,Row} from 'react-flexbox-grid';

const cardheadstyle={
background:'black',
textAlign:'Left',
marginTop:'3%',
}
const title={
 fontWeight: 'bold',
 fontSize:25
}

const dialogStyle={
 width:'40%'
}

const cardStyle={

}

const buttonStyle={
 marginTop:'15%',
 marginBottom:'15%',
 width:'20%',

}

const buttonLabelStyle={
 fontWeight: 'bold',
 fontSize:18
}


const style = {
textAlign: 'center',
display: 'inline-block',
margin:'5%',

width:'90%',
};



class AddQuestion  extends Component {


state = {
   open: false,
};

handleOpen = () => {
   this.setState({open: true});
};

handleClose = () => {
   this.setState({open: false});
};

 render() {


const actions = [
     <RaisedButton
       label="Cancel"
       onTouchTap={this.handleClose}
     />
   ];

   return(

<div>
   <div>
   <Paper  style={style}>
   <Card style={cardStyle}>
        <div>
        <CardHeader title="Survey Title" subtitle="Description" style={cardheadstyle} titleStyle={title} titleColor='white' subtitleColor='white'/>
        </div>
         <div>
       <RaisedButton label="Add New Question" primary={true} style={buttonStyle} labelStyle={buttonLabelStyle} onTouchTap={this.handleOpen} />
       <Dialog
         title="Select Question Type"
         actions={actions}
         modal={true}
          contentStyle={dialogStyle}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
        <List style={{marginLeft: '10%'}}>
          <Link to="Home/MultiChoice" activeClassName="active">
            <MenuItem primaryText="Multiple Choice" leftIcon={<MultiChoice />}  />
          </Link>
          <Link to="Home/StarRatings" activeClassName="active">
            <MenuItem primaryText="Star Rating" leftIcon={<StarRate />} />
          </Link>
          <Link to="Home/Comments" activeClassName="active">
            <MenuItem primaryText="Comment" leftIcon={<Comment />}  />
          </Link>
          <Link to="Home/Dropdown" activeClassName="active">
            <MenuItem primaryText="Drop Down " leftIcon={<DropDown />} />
          </Link>
          <Link to="Home/Slider" activeClassName="active">
            <MenuItem primaryText="Slider" leftIcon={<Slide />} />
          </Link>
        </List>
       </Dialog>
     </div>
    </Card>
   </Paper>
   </div>



</div>


  );

   }
}

export default AddQuestion;
