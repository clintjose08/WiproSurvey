import React, { Component } from 'react';
import { Grid,Col,Row} from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


import { Chart } from 'react-google-charts';

import Request from 'superagent';

class GraphDisplay extends Component {

  constructor() {
   super();
   this.state={
     
     allData:[]
     
     
   };
 }

  componentDidMount() {
  	Request
          .get('http://localhost:9080/api/result')
          .then((res)=>{
            console.log("Getting Value"+res.body);
            this.setState({
              allData:res.body
            });
            
          });


  }	
 

  render() {
    const Details=this.state.allData.map((data)=>{
            return (
                     <Card>
                     
                      
                          <CardHeader
                          title={data.welcomeMsg}
                          actAsExpander={true}
                          
                          />
                         
                     
                     
                          <CardText expandable={true}>
                          
                          <Col xs={12}>
                         <Chart
                              chartType="PieChart"
                              data={[["Option","Opinion"],["Excellent",11],["Very Good",2],["Good",2],["Average",2],["Bad",7]]}
                              options={{title:"Your Points",pieHole:0.4,is3D:true}}
                             
                              width="100%"
                              height="400px"
                              legend_toggle
                            />
                            
                            <h4>Item Name</h4>
                            </Col>
                            
                          </CardText>
                           
                      </Card>
                   
                        );
                        
                        });
    

    return(
    	    <div>
          {Details}
          </div>
    	);

    }
}

export default GraphDisplay;
