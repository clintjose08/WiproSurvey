import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import request from 'superagent';
import {IndexLink, Link} from 'react-router';
import { Grid,Row,Col } from 'react-flexbox-grid';

import FileIcon from 'material-ui/svg-icons/editor/attach-file';
import Upload from 'material-ui/svg-icons/file/file-upload';

const styles = {
	
	button:{
		background:'C4BBBB',
	},
	buttonLabel:{
		fontWeight:'bold',
		color:'#FFFFFF'
	},
	fileUpload:{
		cursor: 'pointer',
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		width: '100%',
		opacity: 0
	}
};


class UploadCSV extends Component
{

constructor(props) {
   super(props);
   this.state = {
   	files: [{name: 'Choose CSV file from your system'}],
    uploadDialogState: false,
    };
  }

 handleFileChange(event) {
		this.setState({ files: event.target.files });
	}

handleFormSubmit(event) {
		event.preventDefault();
		let reader = new FileReader();
	  reader.readAsText(this.state.files[0]);
	  reader.onload = (content) => {
	  	this.covertForInsert(content.target.result);
	 	};
	  reader.onloadstart = (content) => this.setState({ uploadDialogState: true });
	}	

covertForInsert(data) {

	let rows = data.split('\n');
	const headers = rows[0].split(',');
	let stringedColumns;
    var questions=[];

	let finalArray = [];
	var tempObj={};
	for(let i=1; i< rows.length; i++) {

        let singleData=rows[i].split(",");
        stringedColumns = rows[i].split('"');
        
		 if(singleData[0]=="Welcome"){tempObj["welcomeMsg"]=singleData[1]}
	     if(singleData[0]=="Description"){ tempObj["description"]=singleData[1]}
	     if(singleData[0]=="ThanksMessage"){tempObj["thanksMessage"]=singleData[1]}	
	     if(singleData[0]=="Name"){tempObj["createrName"]=singleData[1]}
	     if(singleData[0]=="Contact"){tempObj["createrContact"]=singleData[1]}
	     if(singleData[0]=="Email"){tempObj["creterEmail"]=singleData[1]}	
            
	    if(singleData[0]=="StarRating")	{
         questions.push({"questionType":singleData[0],"questionQ":singleData[1],"scale":singleData[4],"options":singleData[2].split('/')});
	      
	    }
	     if(singleData[0]=="Slider")	{
         questions.push({"questionType":singleData[0],"questionQ":singleData[1],"maxValue":singleData[3],"scale":singleData[4],"options":singleData[2]});
	      
	    }
	     if((singleData[0]=="Comments")||(singleData[0]=="SingleText"))
	     {
	     	questions.push({"questionType":singleData[0],"questionQ":singleData[1],"options":singleData[2]});
	     }
	     if((singleData[0]=="MultiChoice")||(singleData[0]=="DropDown")||(singleData[0]=="Checkbox")||(singleData[0]=="YesOrNo"))
	     {
	     	questions.push({"questionType":singleData[0],"questionQ":singleData[1],"options":singleData[2].split('/')});
	     }

	 //    if(singleData[0]=="Comments"){
	    	
	 //    }
	 //console.log("data  "+JSON.stringify(tempObj));
	  console.log("array  "+JSON.stringify(questions));
	}


	
	tempObj["questions"]=questions;
	console.log("array  "+JSON.stringify(tempObj));	
	}

	render()
	{

		return(<Grid>
			    <Paper style={{marginTop:'3%'}}>
			    <Row>
			        <Col xs={12}>
			            <form style={{marginBottom:'3%'}} 
			                  id='submitForm'
							  encType='multipart/form-data'
							  onSubmit={ this.handleFormSubmit.bind(this)}>

				            <h2 style={styles.headline}>
					            Upload Your Excel File
			                </h2>
				            <p>
					            { this.state.files[0]['name'] }
				            </p>
					        <RaisedButton
						        icon={<FileIcon/>}
						        label="Choose Excel file....."
						        style={ styles.button }
						        buttonStyle={{background:'#207D0A'}}
						        labelStyle={ styles.buttonLabel }
						        containerElement="label"
					        >
						        <input type="file" required accept='.csv' style={styles.fileUpload} onChange={ this.handleFileChange.bind(this) }/>
					        </RaisedButton>
					        <RaisedButton
					            icon={<Upload/>}
						        label='Uplaod File'
						        primary={ true }
						        type='submit'
						        style={{marginLeft: 20}}
					        />


                        </form>
                      </Col>  
                    </Row>
                </Paper>    
            </Grid>

			);
	}
}
export default UploadCSV;
