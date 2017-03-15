import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid,Col,Row} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import Request from 'superagent';
import { Chart } from 'react-google-charts';
import FlatButton from 'material-ui/FlatButton';

const cardStyle={
  width:'80%'
}
class MCQGraph extends Component
{
  constructor(props) {
        super(props);

      }
  componentWillMount()
  {

  }
  render()
  {
    var answer=[],obj,question=[];
    Request.get('http://localhost:9080/api/getResult').end((err,res)=>{

      question.push(res.body.question);
      console.log(question);
      answer.push(["Options","Count"]);
      res.body.answer.map((opt)=>{
        obj=[];
        obj.push(opt.options);
        obj.push(opt.count);
        answer.push(obj);
      });
    });
console.log("question",question);

    return(<Grid>
      <Row center="xs">
      <Card style={cardStyle}>
        <CardHeader
          title="sdfsdf"          actAsExpander={true}
      showExpandableButton={true}
        />
        <CardText expandable={true}>
        <Chart
                             chartType="PieChart"
                             data={answer}
                             options={{title:"Survey Report",pieHole:0.4,is3D:true}}

                             width="100%"
                             height="400px"
                             legend_toggle
                           />
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>

      </Row>
    </Grid>);
  }
}

export default MCQGraph;
