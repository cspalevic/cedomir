import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   children: JSX.Element;
}

class CenterContent extends React.Component<Props> {
   render() {
      const centerStyles = classnames(
         styles.sizing.height.sevenTenth,
         styles.sizing.width.sixTenth
      );
      return (
         <div className={centerStyles}>
            {this.props.children}
         </div>
      );
   }
}

export default CenterContent;