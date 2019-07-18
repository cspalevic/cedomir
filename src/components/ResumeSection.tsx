import React from 'react';
import { Row } from 'react-bootstrap';

interface Props {
   title: string;
   children: JSX.Element | JSX.Element[];
}

class ResumeSection extends React.Component<Props> {
   render() {
      return (
         <Row>
            <h2>{this.props.title}</h2>
            <div className="section-body">
               {this.props.children}
            </div>
         </Row>
      );
   }
}

export default ResumeSection;