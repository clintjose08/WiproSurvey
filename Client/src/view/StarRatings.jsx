import React, { Component } from 'react';
import StarRatings from '../component/StarRatings';
import TempDisplay from '../component/TempDisplay';
import { Grid,Row,Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
class StarRatingsEdit extends Component {
  constructor(props) {
   super(props);
   this.state = {open: true,
   quest:" ",
    options:[],
    type:" "};
  }
  onChangeQuest(quest)
  {
    this.setState({
      quest:quest
    })
  }
  
  getType(type)
  {

    this.setState({
      type:type
    })
  }
  onChangeOptions(options)
  {
    this.setState({
      options:options
    })
  }
 render() {

   return (<div >
            <Dialog  autoScrollBodyContent={true} open={this.state.open} contentStyle={{height:'100%',width:'100%',maxHeight:'none',maxWidth: 'none'}}>
            <Grid>
              <Row style={{height:'40%'}}>
                <Col xs={4}>
                  <StarRatings getQuestion={this.onChangeQuest.bind(this)} options={this.onChangeOptions.bind(this)} type={this.getType.bind(this)}/>
                </Col>
                <Col xs={8}>
                  <TempDisplay putQuestion={this.state.quest} putOptions={this.state.options} putType={this.state.type}/>
                </Col>
              </Row>
            </Grid>
          </Dialog>
        </div>
   );
 }
}

export default StarRatingsEdit;
