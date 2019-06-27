import React from 'react';
import classnames from 'classnames';
import styles from 'styles';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

class Footer extends React.Component {
   render() {
      const footerStyles = classnames(
         styles.display.flex,
         styles.flexbox.justifyContent.center,
         styles.flexbox.alignItems.center,
         styles.sizing.width.full,
         styles.spacing.padding.padding20,
         styles.colors.background.black
      );
      const linkStyles = classnames(
         styles.spacing.marginLeft.margin20,
         styles.spacing.marginRight.margin20
      );
      const iconStyles = classnames(
         styles.colors.color.white,
         styles.text.fontSize.fs32
      );
      return (
         <footer className={footerStyles}>
            <a href="mailto:cedomir.spalevic@gmail.com" className={linkStyles}
               title="Email" rel="noopener noreferrer" target="_blank">
               <FaEnvelope className={iconStyles} />
            </a>
            <a href="https://github.com/cedomir-spalevic" className={linkStyles}
               title="GitHub" rel="noopener noreferrer" target="_blank">
               <FaGithub className={iconStyles} />
            </a>
            <a href="https://www.linkedin.com/in/cedomir-spalevic" className={linkStyles}
               title="LinkedIn" rel="noopener noreferrer" target="_blank">
               <FaLinkedinIn className={iconStyles} />
            </a>
         </footer>
      );
   }
}

export default Footer;