import React from 'react';
import { Container } from 'react-bootstrap';
import { myMessage } from 'data/my-message';

class Intro extends React.Component {
   render() {
      return (
         <div className="main">
            <Container>
               <div className="intro">
                  <img src="/stuff/me.jpg" />
                  <p>{myMessage}</p>
               </div>
            </Container>
         </div>
      );
   }
}

export default Intro;