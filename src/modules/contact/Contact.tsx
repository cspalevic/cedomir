import React from 'react';
import classnames from 'classnames';
import styles from 'styles';
import ContactForm from './ContactForm';
import CenterContent from 'components/CenterContent';

class Contact extends React.Component {
   render() {
      const contactContainerStyles = classnames(
         styles.sizing.height.full,
         styles.sizing.width.full,
         styles.display.displayFlex,
         styles.flexbox.direction.column
      );
      const headerStyles = classnames(
         styles.text.textAlign.center,
         styles.colors.color.white,
         styles.text.fontSize.xxxl,
         styles.text.fontWeight.bold
      );
      const contactFormContainerStyles = classnames(
         styles.flexbox.flex.full
      );
      const socialMediaContainerStyles = classnames(
         styles.text.textAlign.center,
         styles.display.displayFlex,
         styles.flexbox.alignItems.center,
         styles.flexbox.justifyContent.center
      );
      return (
         <CenterContent>
            <div className={contactContainerStyles}>
               <h1 className={headerStyles}>Let's Chat</h1>
               <div className={contactFormContainerStyles}>
                  <ContactForm />
               </div>
               <div className={socialMediaContainerStyles}>
                  <a href="https://github.com/cedomir-spalevic" title="GitHub" rel="noopener noreferrer" target="_blank">
                     <img src="images/github.png" alt="GitHub" width="50px" height="50px" />
                  </a>
                  <a href="https://www.linkedin.com/in/cedomir-spalevic/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                     <img src="images/linkedin.png" alt="LinkedIn" width="50px" height="50px" />
                  </a>
               </div>
            </div>
         </CenterContent>
      );
   }
}

export default Contact;