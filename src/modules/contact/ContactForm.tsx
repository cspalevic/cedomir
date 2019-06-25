import React from 'react';
import classnames from 'classnames';
import styles from 'styles';
import { encode, cleverBotPhrases, getCookie, setCookie } from 'lib/general';
import ThanksAnimation from './ThanksAnimation';
import ContactFormButton from './ContactFormButton';

interface Props { }
interface State {
   name: string;
   email: string;
   message: string;
   messageSent: boolean;
}

class ContactForm extends React.Component<Props, State> {
   state = {
      name: '',
      email: '',
      message: '',
      messageSent: false
   };

   /**
    * When the component is mounted - check if cookie exists
    */
   componentDidMount() {
      let ms = (getCookie('ctms') === '' ? false : true);
      this.setState({
         messageSent: ms
      });
   }

   /**
    * Validate the element and add error messages, if needed
    */
   _isValid = (element: HTMLFormElement) => {
      let validElement = true;
      let validation = element.checkValidity();
      let parent = element.parentNode as Element;
      if (!validation) {
         if (!parent!.classList.contains('error')) parent.classList.add('error');

         let error = parent.querySelector('span');
         if (error === null) {
            error = document.createElement('span');
            error.classList.add('error');
            error.innerHTML = '👎';
            error.setAttribute('title', element.validationMessage);
            parent.appendChild(error);
         }
         else error.setAttribute('title', element.validationMessage);

         validElement = false;
      }
      else {
         if (parent.classList.contains('error')) parent.classList.remove('error');

         let error = parent.querySelector('span');
         if (error !== null) parent.removeChild(error);
      }

      return validElement;
   }

   /**
    * Validate the form
    */
   _validate = () => {
      let validForm = true;

      let name = document.querySelector('form input[name="name"]') as HTMLFormElement;
      if (!this._isValid(name)) validForm = false;

      let email = document.querySelector('form input[name="email"]') as HTMLFormElement;
      if (!this._isValid(email)) validForm = false;

      let message = document.querySelector('form textarea') as HTMLFormElement;
      if (!this._isValid(message)) validForm = false;

      return validForm;
   }

   /**
     * Submit the form
     */
   _onSubmit = () => {
      fetch('/chat', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: encode({
            'form-name': 'contact',
            'name': this.state.name,
            'email': this.state.email,
            'message': this.state.message
         })
      }).then(() => {
         let date = new Date();
         date.setUTCMonth(date.getUTCMonth() + 1);
         setCookie('ctms', date.getTime(), date.toUTCString());
         this.setState({
            messageSent: true
         });
      }).catch((error) => {
         console.log(error);
      });
   }

   /**
    * When the value of the name changes on the form
    */
   _onNameChange = (evt: React.FormEvent<HTMLInputElement>) => {
      this.setState({
         name: evt.currentTarget.value
      });
   }

   /**
    * When the value of the email changes on the form
    */
   _onEmailChange = (evt: React.FormEvent<HTMLInputElement>) => {
      this.setState({
         email: evt.currentTarget.value
      });
   }

   /**
    * When the value of the message changes on the form
    */
   _onMessageChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
      this.setState({
         message: evt.currentTarget.value
      });
   }

   render() {
      const { name, email, message, messageSent } = this.state;

      const formStyles = classnames(
         styles.display.flex,
         styles.flexbox.justifyContent.center,
         styles.flexbox.alignItems.center,
         styles.flexbox.direction.column,
         styles.sizing.width.half,
         styles.spacing.marginTop.margin20,
         styles.spacing.marginRight.auto,
         styles.spacing.marginBottom.margin20,
         styles.spacing.marginLeft.auto,
         styles.sizing.height.full
      );
      const inputContainerStyles = classnames(
         styles.display.flex,
         styles.flexbox.direction.row,
         styles.sizing.width.full,
         styles.flexbox.justifyContent.spaceBetween
      );
      const colStyles = classnames(
         styles.display.flex,
         styles.flexbox.direction.column
      );
      const inputStyles = classnames(
         styles.components.inputs.form
      );
      const textareaContainerStyles = classnames(
         styles.display.flex,
         styles.flexbox.flex.full,
         styles.flexbox.direction.column,
         styles.sizing.width.full,
         styles.spacing.marginTop.margin10
      )
      const textareaStyles = classnames(
         styles.display.flex,
         styles.flexbox.flex.full,
         styles.components.inputs.form,
         styles.sizing.width.full
      );
      const labelStyles = classnames(
         styles.colors.color.white,
         styles.spacing.padding.padding5,
         styles.text.fontSize.fs18
      );
      const buttonContainerStyles = classnames(
         styles.spacing.marginTop.margin20
      );
      return (
         <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" className={formStyles}>
            <input className={inputStyles} name="form-name" type="hidden" value="contact" />
            <input className={inputStyles} name="bot-field" type="hidden" value={cleverBotPhrases()} />
            <div className={inputContainerStyles}>
               <div className={colStyles}>
                  <label className={labelStyles}>Your Name:</label>
                  <input className={inputStyles} name="name" type="text" placeholder="Your Name" value={name}
                     onChange={this._onNameChange} required />
               </div>
               <div className={colStyles}>
                  <label className={labelStyles}>Your Email:</label>
                  <input className={inputStyles} name="email" type="email" placeholder="Your Email" value={email}
                     onChange={this._onEmailChange} required />
               </div>
            </div>
            <div className={textareaContainerStyles}>
               <label className={labelStyles}>Your Message:</label>
               <textarea name="message" placeholder="Your Message" className={textareaStyles}
                  value={message} onChange={this._onMessageChange} required rows={15} />
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div className={buttonContainerStyles}>
               {
                  messageSent ? <ThanksAnimation id="thx" text="Thanks for reaching out! " emoji="😎" />
                     : <ContactFormButton submit={this._onSubmit} isValid={this._validate} />
               }
            </div>
         </form>
      )
   }
}

export default ContactForm;