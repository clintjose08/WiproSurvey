import React, { Component } from 'react';
import CheckBox from '../component/CheckBox';
import TempDisplay from '../component/TempDisplay';
import { Grid,Row,Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
class CheckBoxEdit extends Component {
  constructor(props) {
   super(props);
   this.state = {open: true};
  }
 render() {

   return (<div style={{height:'100%'}}>
            <Dialog autoScrollBodyContent={true} open={this.state.open} contentStyle={{height:'100%',width:'100%',maxHeight:'none',maxWidth: 'none'}}>
            <Grid>
              <Row>
                <Col xs={4.5}>
                  <CheckBox />
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

export default CheckBoxEdit;
