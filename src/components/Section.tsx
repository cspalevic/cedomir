import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   children: JSX.Element;
   background: string;
}

class Section extends React.Component<Props> {
   render() {
      const sectionStyles = classnames(
         styles.display.displayFlex,
         styles.sizing.height.full,
         styles.sizing.width.full,
         styles.flexbox.alignItems.center,
         styles.flexbox.justifyContent.center,
         this.props.background
      );
      return (
         <section className={sectionStyles}>
            {this.props.children}
         </section>
      );
   }
}

export default Section;