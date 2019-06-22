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
      const buttonStyles = classnames(
         styles.text.fontSize.xl,
         styles.colors.background.transparent,
         styles.colors.color.white,
         styles.borders.border.solid3,
         styles.borders.borderColor.white,
         styles.borders.radius.radius5,
         styles.spacing.paddingTop.padding10,
         styles.spacing.paddingBottom.padding10,
         styles.spacing.paddingRight.padding20,
         styles.spacing.paddingLeft.padding20
      )
      return (
         <ParticleEffectButton
            hidden={this.state.hidden}
            onComplete={this._animationComplete}
            direction="top"
            duration={1500}
            color="#fff"
            easing="easeOutElastic"
            canvasPadding={50}>
            <button type="submit" onClick={this._beginAnimation} className={buttonStyles}>Send</button>
         </ParticleEffectButton>
      );
   }
}

export default ContactFormButton;