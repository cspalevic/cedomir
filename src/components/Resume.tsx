import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

class Resume extends React.Component {
   render() {
      const a = classnames(
         styles.display.flex,
         styles.flexbox.alignItems.baseline,
         styles.flexbox.justifyContent.spaceBetween
      );
      return (
         <div>
            <div className={a}>
               <h1>Work Experience</h1>
               <p>Some example</p>
            </div>
         </div>
      );
   }
}

export default Resume;