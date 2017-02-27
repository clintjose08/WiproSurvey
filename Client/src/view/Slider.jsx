import React, { Component } from 'react';
import Slider from '../component/Slider';
import TempDisplay from '../component/TempDisplay';
import { Grid,Row,Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
class SliderEdit extends Component {
  constructor(props) {
   super(props);
   this.state = {open: true};
  }
 render() {

   return (<div >
            <Dialog autoScrollBodyContent={true} open={this.state.open} contentStyle={{height:'100%',width:'100%',maxHeight:'none',maxWidth: 'none'}}>
            <Grid>
              <Row style={{height:'40%'}}>
                <Col xs={4.5}>
                  <Slider />
                </Col>
                <Col xs={7.5}>
                  <TempDisplay />
                </Col>
              </Row>
            </Grid>
          </Dialog>
        </div>
   );
 }
}

export default SliderEdit;
