import React from 'react';

interface Props {
   children: JSX.Element;
}

class Section extends React.Component<Props> {
   render() {
      return (
         <section>
            {this.props.children}
         </section>
      );
   }
}

export default Section;