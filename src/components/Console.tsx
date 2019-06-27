import React from 'react';
import styles from 'styles';
import classnames from 'classnames';

/// TODO: Add animation for text
interface Props { }
interface State {
   index: number;
   text: string;
}

class Console extends React.Component<Props, State> {
   interval?: number;
   message: string;

   constructor(props: Props) {
      super(props);
      this.state = {
         index: 0,
         text: ''
      };
      this.interval = undefined;
      this.message = "Hey, I'm Cedomir Charlie Spalevic!";
   }

   componentDidMount() {
      if (this.state.index < this.message.length) {
         this.interval = window.setInterval(() => {
            this.setState({
               text: this.message.substring(0, this.state.index),
               index: this.state.index + 1
            });
         }, 75);
      }
      else {
         clearInterval(this.interval);
      }
   }

   render() {
      const consoleContainerStyles = classnames(
         styles.display.flex,
         styles.flexbox.direction.column,
         styles.borders.shadow.largeGray,
         styles.sizing.height.sevenTenth,
         styles.sizing.width.sixTenth,
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
               <div className={lineStyles}>>>>{this.state.text}</div>
            </div>
         </div>
      );
   }
}

export default Console;