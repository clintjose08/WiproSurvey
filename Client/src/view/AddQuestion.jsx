import React, { Component } from 'react';
import Dragabble from '../component/Dragabble';
import Dropabble from '../component/Dropabble';
import { Grid,Row,Col } from 'react-flexbox-grid';
class AddQuestion  extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={4} style={{paddingTop:'6%'}}>
              <Dragabble />
            </Col>
            <Col xs={8}>
              <Dropabble />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default AddQuestion;
