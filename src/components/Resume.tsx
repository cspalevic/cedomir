import React from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';
import ResumeSection from './ResumeSection';
import { workExperiences, IWorkExperience } from 'data/workExperience';
import { technicalSkills } from 'data/technicalSkills';
import { FaDownload } from 'react-icons/fa';

class Resume extends React.Component {
   render() {
      return (
         <Container>
            <div className="resume-heading">
               <h1>My Resume</h1>
               <a href="/stuff/CedomirSpalevic_Resume.pdf" title="Download Resume" download>
                  <FaDownload />
               </a>
            </div>
            <ResumeSection title="Education">
               <div className="center">
                  <div className="bold">BS in Computer Science</div>
                  <div>Illinois State University, Normal, IL (2017)</div>
               </div>
            </ResumeSection>
            <ResumeSection title="Work Experience">
               {workExperiences.map((value: IWorkExperience, index: number) => (
                  <Job
                     company={value.company}
                     jobTitle={value.jobTitle}
                     when={value.when}
                     summary={value.summary}
                     accomplishments={value.accomplishments} />
               ))}
            </ResumeSection>
            <ResumeSection title="Technical Skills">
               <div className="center">
                  {technicalSkills.map((value: string, index: number) => value + (index !== technicalSkills.length - 1 ? ' | ' : ''))}
               </div>
            </ResumeSection>
         </Container>
      );
   }
}

export default Resume;