import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid,Col,Row} from 'react-flexbox-grid';
import 'react-date-picker/index.css';
import { DateField,TransitionView, Calendar } from 'react-date-picker';
import Countdown from 'react-count-down';
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

const cb = () => {
  console.log('expired callback')
} 

const OPTIONS = { endDate: '03/01/2018 10:55 AM', prefix: 'until my birthday!', cb}
class Timer extends Component 
{
	
        
 constructor(props) {
      super(props);
    this.state = {
      day:'',
      month:'',
      year:''

    
  }}       
	render()
	{
		return(<Grid>
			<Row>
			<Col xs={12}>
			
                <DateField
                
                    dateFormat="YYYY-MM-DD hh:mm a"
                    onChange={onChange}

                >
                    <TransitionView>
                      <Calendar />                
                    </TransitionView>
                </DateField>
		
		</Col>
		<Col xs={12}>
            <span id="days" style={{fontSize:'250%', marginLeft:'2%'}}></span>days
            <span id="hours" style={{fontSize: '250%', marginLeft:'2%'}}></span>hours
            <span id="minutes" style={{fontSize: '250%', marginLeft:'2%'}}></span>minutes
            <span id="seconds" style={{fontSize: '250%', marginLeft:'2%'}}></span>seconds

		</Col>
		</Row>
		</Grid>);
	}	
}

export default Timer;