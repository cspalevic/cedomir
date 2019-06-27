import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   children: JSX.Element;
}

class Section extends React.Component<Props> {
   render() {
      const sectionStyles = classnames(
         styles.display.flex,
         styles.sizing.height.fullScreen,
         styles.sizing.width.full,
         styles.flexbox.alignItems.center,
         styles.flexbox.justifyContent.center
      );
      return (
         <section className={sectionStyles}>
            {this.props.children}
         </section>
      );
   }
}

export default Section;