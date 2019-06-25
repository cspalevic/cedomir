import React from 'react';
import classnames from 'classnames';
import styles from 'styles';
import ContactForm from './ContactForm';
import ImageLink from 'components/ImageLink';

class Contact extends React.Component {
   render() {
      const contactContainerStyles = classnames(
         styles.sizing.height.full,
         styles.sizing.width.full,
         styles.display.flex,
         styles.flexbox.direction.column
      );
      const headerStyles = classnames(
         styles.text.textAlign.center,
         styles.colors.color.white,
         styles.text.fontSize.fs56,
         styles.text.fontWeight.bold
      );
      const contactFormContainerStyles = classnames(
         styles.flexbox.flex.full
      );
      const socialMediaContainerStyles = classnames(
         styles.text.textAlign.center,
         styles.display.flex,
         styles.flexbox.alignItems.center,
         styles.flexbox.justifyContent.center
      );
      return (
         <div className={contactContainerStyles}>
            <h1 className={headerStyles}>Let's Chat</h1>
            <div className={contactFormContainerStyles}>
               <ContactForm />
            </div>
            <div className={socialMediaContainerStyles}>
               <ImageLink href="https://github.com/cedomir-spalevic" title="GitHub" src="images/github.png" />
               <ImageLink href="https://www.linkedin.com/in/cedomir-spalevic" title="LinkedIn" src="images/linkedin.png" />
            </div>
         </div>
      );
   }
}

export default Contact;