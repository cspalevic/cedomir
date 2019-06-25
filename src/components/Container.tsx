import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   children: JSX.Element;
}

class Container extends React.Component<Props> {
   render() {
      const containerStyles = classnames(
         styles.components.container.container
      );
      return (
         <div className={containerStyles}>
            {this.props.children}
         </div>
      );
   }
}

export default Container;