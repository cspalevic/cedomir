import React from 'react';
import { Container } from 'react-bootstrap';

/// TODO: Add animation for text
interface Props { }
interface State {
   index: number;
   text: string;
}

class Console extends React.Component<Props, State> {
   interval?: number;
   message: string;

   constructor(props: Props) {
      super(props);
      this.state = {
         index: 0,
         text: ''
      };
      this.interval = undefined;
      this.message = "Hey, I'm Cedomir Charlie Spalevic!";
   }

   componentDidMount() {
      if (this.state.index < this.message.length) {
         this.interval = window.setInterval(() => {
            this.setState({
               text: this.message.substring(0, this.state.index),
               index: this.state.index + 1
            });
         }, 75);
      }
      else {
         clearInterval(this.interval);
      }
   }

   render() {
      return (
         <div className="main">
            <Container>
               <div className="console-container">
                  <div className="console-header">Cedomir -- bash</div>
                  <div className="console-body">
                     <div>>>>{this.state.text}</div>
                  </div>
               </div>
            </Container>
         </div>
      );
   }
}

export default Console;