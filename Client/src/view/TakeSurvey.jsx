import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid,Col,Row} from 'react-flexbox-grid';
import image from '../../images/welcome.png';
import Request from 'superagent';

class TakeSurvey extends React.Component {

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    allData:''
  };
  componentWillMount()
  {
    Request.get('http://localhost:9080/api/getDetails').end((err,res)=>{

      this.setState({
        allData:res.body[0]
      })
    });
  }
  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {

    if(this.state.allData.questions)
    {
    var data=this.state.allData.questions;
    var length=data.length;
    console.log("data",data);
    if(stepIndex==0)
    {
      return (
        <div>
          <Grid>
            <Row center="xs">
              <Paper style={{background:'#90EE90',width:'100%',height:'100%',padding:20,margin:20}} zDepth={1}>
                <Row center="xs">
                  <Col xs={6}>
                    <h2 style={{color:"#FFFFFF"}}>Hi there...</h2>
                    <p>{this.state.allData.welcomeMsg}</p>
                  </Col>
                  <Col xs={6}>
                    <img src="" />
                  </Col>
                </Row>
              </Paper>
            </Row>

            <div style={{marginTop: 24, marginBottom: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={'Next'}
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          </Grid>
        </div>
      );
    }
    else if (stepIndex===data.length+1) {
      return (
        <div>
          <Grid>
            <Row center="xs">
              <Paper style={{background:'#90EE90',width:'100%',height:'100%',padding:20,margin:20}} zDepth={1}>
                <Row center="xs">
                  <Col xs={12}>
                    <h1>{this.state.allData.thanksmessage}</h1>
                  </Col>
                </Row>
              </Paper>
            </Row>
            <div style={{marginTop: 24, marginBottom: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={'Finish'}
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          </Grid>
        </div>
      );
    }
    else {
        return(data.map((obj,i)=>{
          if(stepIndex==i+1)
          return(<div><p>{obj.questionno} {obj.questionQ}</p>
            <div style={{marginTop: 24, marginBottom: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={'Next'}
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div></div>);
        }));
      }
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};


    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', marginTop:'50'}}>
      <Paper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
        </Paper>
      </div>
    );
  }
}

export default TakeSurvey;
