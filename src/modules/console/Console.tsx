import React from 'react';
import styles from 'styles';
import classnames from 'classnames';

/// TODO: Add animation for text
class Console extends React.Component {
   render() {
      const consoleContainerStyles = classnames(
         styles.display.flex,
         styles.flexbox.direction.column,
         styles.borders.shadow.largeGray,
         styles.sizing.height.full,
         styles.sizing.width.full,
         styles.borders.radius.radius5
      );
      const headerStyles = classnames(
         styles.colors.background.white,
         styles.colors.color.black,
         styles.borders.radius.topLeft5,
         styles.borders.radius.topRight5,
         styles.text.textAlign.center
      );
      const bodyStyles = classnames(
         styles.sizing.width.full,
         styles.sizing.height.full,
         styles.colors.background.black,
         styles.colors.color.white,
         styles.borders.radius.bottomLeft5,
         styles.borders.radius.bottomRight5
      );
      const lineStyles = classnames(
         styles.spacing.padding.padding10
      );
      return (
         <div className={consoleContainerStyles}>
            <div className={headerStyles}>Cedomir -- bash</div>
            <div className={bodyStyles}>
               <div className={lineStyles}>>>></div>
            </div>
         </div>
      );
   }
}

export default Console;