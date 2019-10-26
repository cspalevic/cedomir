import React from 'react';
import { Container } from 'react-bootstrap';
import { myMessage, altText } from 'data/messages';

class Intro extends React.Component {
   render() {
      return (
         <div className="main">
            <Container>
               <div className="intro">
                  <img alt={altText} title={altText} src="/stuff/me.jpg" />
                  <p>{myMessage}</p>
               </div>
            </Container>
         </div>
      );
   }
}

export default Intro;