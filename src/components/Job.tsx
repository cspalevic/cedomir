import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
   company: string;
   jobTitle: string;
   when: string;
   summary: string;
   accomplishments?: string[];
}

class Job extends React.Component<Props> {
   render() {
      return (
         <Row className="job">
            <Col lg={6} className="title">
               <h3>{this.props.company}</h3>
               <span className="bold">{this.props.jobTitle}</span>
               <span>{this.props.when}</span>
            </Col>
            <Col lg={6} className="description">
               <p>{this.props.summary}</p>
               {this.props.accomplishments &&
                  <ul>
                     {this.props.accomplishments.map((value: string, index: number) => (
                        <li>{value}</li>
                     ))}
                  </ul>}
            </Col>
         </Row>
      );
   }
}

export default Job;