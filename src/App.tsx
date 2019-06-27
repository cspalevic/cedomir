import React from 'react';
import classnames from 'classnames';
import styles from './styles';
import Section from './components/Section';
import Container from './components/Container';
import Console from './components/Console';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends React.Component {
   render() {
      return (
         <div>
            <div>{/* Another div here with gradient */}</div>
            <Section>
               <Console />
            </Section>
            <Container>
               <Resume />
            </Container>
            <Footer />
         </div>
      );
   }
}

export default App;