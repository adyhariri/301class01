import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from './Cards.json';

class Main extends React.Component {
  render (){
    return (
      <main>
        <section>
          <CardGroup>
            {Cards.map(item=>(
              <HornedBeasts
                imageUrl={item.image_url}
                title={item.title}
                descrption={item.description}
              />
            ))}
          </CardGroup>
        </section>
      </main>
    );
  }
}
export default Main;
