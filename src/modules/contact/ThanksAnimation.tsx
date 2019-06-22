import React from 'react';
import { animateText } from 'lib/animateText';

interface Props {
   id: string;
   text: string;
   emoji: string;
}

class ThanksAnimation extends React.Component<Props> {

   componentDidMount() {
      animateText(this.props.id, this.props.text, 75).then(() => {
         let span = document.createElement('span');
         span.classList.add('cool');
         span.innerHTML = this.props.emoji;
         let element = document.getElementById(this.props.id);
         if (element !== null) {
            element.appendChild(span);
         }
      });
   }

   render() {
      return <p id={this.props.id}></p>
   }
}

export default ThanksAnimation;