import React,{Component} from 'react';
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'

class FourOptions extends Component {
render(){
  return(
   <Grid centered verticalAlign="middle">
  <Grid.Column textAlign="center">

    <Form size="tiny">

        <Form.Field>
        <Input label='Digital Skill 1' placeholder='Enter your skill....' />
        </Form.Field>
        <Form.Field>
        <Input label='Digital Skill 2' placeholder='Enter your skill....' />
        </Form.Field>
        <Form.Field>
        <Input label='Digital Skill 3' placeholder='Enter your skill....' />
        </Form.Field>
        <Form.Field>
        <Input label='Digital Skill 4' placeholder='Enter your skill....' />
        </Form.Field>


    </Form>
  </Grid.Column>
</Grid>);
  }
}
export default FourOptions
