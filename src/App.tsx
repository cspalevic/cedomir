import React from 'react';
import classnames from 'classnames';
import styles from './styles';
import Section from './components/Section';
import Console from './modules/console/Console';
import Resume from './modules/resume/Resume';
import Contact from './modules/contact/Contact';

class App extends React.Component {
   render() {
      const containerStyles = classnames(
         styles.sizing.height.full,
         styles.sizing.width.full
      );
      return (
         <div className={containerStyles}>
            <Section background={styles.colors.background.white}>
               <Console />
            </Section>
            <Section background={styles.colors.background.lightSalmon}>
               <Resume />
            </Section>
            <Section background={styles.colors.background.lightGreen}>
               <Contact />
            </Section>
         </div>
      );
   }
}

export default App;