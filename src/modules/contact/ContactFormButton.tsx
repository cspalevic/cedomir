import React from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import classnames from 'classnames';
import styles from 'styles';

interface Props {
   submit: () => void;
   isValid: () => boolean;
}
interface State {
   hidden: boolean;
}
class ContactFormButton extends React.Component<Props, State> {
   state = {
      hidden: false
   }

   /**
    * Begin the animation if the form is valid
    */
   _beginAnimation = (evt: React.FormEvent) => {
      evt.preventDefault();
      if (this.props.isValid()) {
         this.setState({
            hidden: !this.state.hidden
         });
      }
   }

   /**
    * Submit the form when the animation is complete
    */
   _animationComplete = () => {
      this.props.submit();
   }

   render() {
      const containerStyles = classnames(
         styles.sizing.height.full,
         styles.sizing.width.full
      );
      const buttonStyles = classnames(
         styles.components.buttons.submit
      );
      return (
         <ParticleEffectButton
            hidden={this.state.hidden}
            onComplete={this._animationComplete}
            direction="top"
            duration={1500}
            color="#fff"
            easing="easeOutElastic"
            canvasPadding={50}
            className={containerStyles}>
            <button type="submit" onClick={this._beginAnimation} className={buttonStyles}>Send</button>
         </ParticleEffectButton>
      );
   }
}

export default ContactFormButton;