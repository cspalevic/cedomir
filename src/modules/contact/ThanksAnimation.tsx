import React from 'react';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   id: string;
   text: string;
   emoji: string;
}
interface State {
   index: number;
   result: string;
}

class ThanksAnimation extends React.Component<Props, State> {
   interval?: number;

   constructor(props: Props) {
      super(props);
      this.state = {
         index: 0,
         result: ''
      };
      this.interval = undefined;
   }

   componentDidMount() {
      if (this.state.index < this.props.text.length) {
         this.interval = window.setInterval(() => {
            this.setState({
               result: this.props.text.substring(0, this.state.index),
               index: this.state.index + 1
            });
         }, 75);
      }
      else {
         clearInterval(this.interval);
      }
   }

   render() {
      const containerStyles = classnames(
         styles.sizing.width.full,
         styles.sizing.height.full,
         styles.display.flex,
         styles.flexbox.direction.row,
         styles.flexbox.alignItems.center,
         styles.colors.color.white
      );
      const textStyles = classnames(
         styles.text.fontSize.fs24
      );
      return (
         <div className={containerStyles}>
            <p className={textStyles}>{this.state.result}</p>
            {
               this.state.index >= this.props.text.length &&
               <span className={textStyles}>{this.props.emoji}</span>
            }
         </div>
      );
   }
}

export default ThanksAnimation;