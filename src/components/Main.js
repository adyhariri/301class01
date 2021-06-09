import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import cards from '../data/cards.json';
class Main extends React.Component {
  render() {
    return (
      <section>
        <CardGroup>
          {cards.map(item => (
            <HornedBeasts
              imageUrl={item.image_url}
              title={item.title}
              descrption={item.description}
            />
          ))}
        </CardGroup>
      </section>
    );
  }
}
export default Main;

