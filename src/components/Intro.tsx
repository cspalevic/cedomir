import React from 'react';
import { Container } from 'react-bootstrap';
import { myMessage, altText } from 'data/messages';
import ThemeToggle from './ThemeToggle';

interface Props {
   onThemeToggle: () => void;
}

const Intro: React.FC<Props> = (props: Props) => {
   return (
      <div className="main">
         <Container>
            <ThemeToggle onClick={() => props.onThemeToggle()} />
            <div className="intro">
               <img alt={altText} title={altText} src="/stuff/me.jpg" />
               <p>{myMessage}</p>
            </div>
         </Container>
      </div>
   );
}

export default Intro;