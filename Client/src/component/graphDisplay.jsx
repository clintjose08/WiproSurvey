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

     allData:""


   };
 }

  componentDidMount() {
  	Request
          .get('http://localhost:9080/api/getResult')
          .then((res,err)=>{
            if(err)
            console.log("error",err);

            this.setState({
              allData:res.body
            });

          });


  }


  render() {
    var Details;
    if(this.state.allData!="")
    {
     Details=this.state.allData.map((data)=>{
       var answer=[], obj,total=0,title="Overall response rate";
       answer.push(['Options','Count']);
       data.answer.map((opt)=>{
         obj=[];
         obj.push(opt.options+" ("+opt.count+")");
         obj.push(opt.count);
         if(data.questiontype!="Checkbox")
         {total+=opt.count;

           title="Total no of participants : "+total;
         }
         answer.push(obj);
       });

            return (
                     <Card>
                          <CardHeader
                          title={data.question}
                          actAsExpander={true}
                          />
                        <CardText expandable={true}>

                          <Col xs={12}>
                         <Chart
                              chartType="PieChart"
                              data={answer}
                              options={{title:title,pieHole:0.4,is3D:true}}

                              width="100%"
                              height="400px"
                              legend_toggle
                            />

                            </Col>

                          </CardText>

                      </Card>

                        );

                        });
                      }


    return(
    	    <div>
          {Details}
          </div>
    	);

    }
}

export default GraphDisplay;
