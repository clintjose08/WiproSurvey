import React, { Component } from 'react';
import Dragabble from '../component/Dragabble';
import Dropabble from '../component/Dropabble';
import { Grid,Row,Col } from 'react-flexbox-grid';
  
class AddQuestion  extends Component {

  render() {
    console.log("local :",localStorage.getItem('sName'));
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} style={{paddingTop:'5.5%'}} sm={4}>
              <Dragabble />
            </Col>
            <Col xs={12} sm={8}>
              <Dropabble />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default AddQuestion;
