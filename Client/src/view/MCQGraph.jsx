import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid,Col,Row} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';

class MCQGraph extends Component
{
  render()
  {
    return(<Grid>
      <Row center="xs">
        <Col xs={6}>[Pie graph here]</Col>
        <Col xs={6}>
          [Chart scale]
        </Col>
      </Row>
      <Row>
      </Row>
    </Grid>);
  }
}

export default MCQGraph;
