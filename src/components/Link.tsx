import React from 'react';

interface Props {
   href: string;
   title: string;
   icon: JSX.Element;
}

class Link extends React.Component<Props> {
   render() {
      return (
         <a className="link" href={this.props.href} title={this.props.title} rel="noopener noreferrer" target="_blank">
            {this.props.icon}
         </a>
      );
   }
}

export default Link;