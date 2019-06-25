import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   title: string;
   href: string;
   src: string;
}

class ImageLink extends React.Component<Props> {
   render() {
      const { title, href, src } = this.props;
      const linkStyles = classnames(
         styles.spacing.margin.margin10
      )
      return (
         <a href={href} title={title} className={linkStyles} rel="noopener noreferrer" target="_blank">
            <img src={src} alt={title} width="50px" height="50px" />
         </a>
      );
   }
}

export default ImageLink;