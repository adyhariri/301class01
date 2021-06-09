import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }
    render() {
      return (
        <div>
          <Card className='cardImg' style={{ color: 'white', backgroundColor: 'black', width: '30.4rem', height: '40rem', borderColor: 'black', padding: '0.2rem' }}>
            <Card.Img style={{ width: '30rem', height: '25rem' }} onClick={this.increment} variant="top" src={this.props.imageUrl} />
            <Card.Title > <p>💓{this.state.count}</p></Card.Title>
            <Card.Text>
              <h2>{this.props.title}</h2>
              <p style={{color:'white'}}> {this.props.descrption}</p>
            </Card.Text>
          </Card>
          <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Custom select</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>wooow</option>
    </Form.Control>
  </Form.Group>
</Form>
        </div>
      );
    }
}
export default HornedBeasts;
