import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
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
            <Card.Img style={{ width: '30rem', height: '25rem' }} onClick={this.inecrement} variant="top" src={this.props.imageUrl} />
            <Card.body>
              <Card.Title > <p>💓{this.state.count}</p></Card.Title>
              <Card.Text>
                <h2>{this.props.title}</h2>
                <p> {this.props.description}</p>
              </Card.Text>
            </Card.body>

          </Card>
        </div>
      );
    }
}
export default HornedBeasts;
