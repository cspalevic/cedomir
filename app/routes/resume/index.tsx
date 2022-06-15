import React from "react";
import Text from "~/components/text";
import Icon, { IconName } from "~/components/icon";
import Anchor from "~/components/anchor";
import { workExperiences } from "./data/workExperience";
import { technicalSkills } from "./data/technicalSkills";
import { summary } from "./data/summary";
import { name, location } from "./data/personal";

const Section: React.FC = ({ header, children }) => (
  <>
    <Text as="h3" className="w-full bg-sky-700 p-2 text-center text-white">
      {header}
    </Text>
    <div className="p-5">{children}</div>
  </>
);

const Resume: React.FC = () => {
  return (
    <div id="resume" className="flex w-full flex-col">
      <div className="w-100 relative flex flex-col items-center justify-center py-5">
        <Text as="h1">{name}</Text>
        <Text as="h3">{location}</Text>
        <Anchor
          id="download-resume"
          href="/images/CharlieSpalevic_Resume.pdf"
          title="Download Resume"
          className="absolute right-0 bottom-[1.25rem]"
          download
        >
          <Icon
            as={IconName.Download}
            size="lg"
            className="transition hover:text-sky-700 dark:hover:text-sky-700"
          />
        </Anchor>
      </div>
      <Section header="Summary">
        <Text as="p">{summary}</Text>
      </Section>
      <Section header="Education">
        <center>
          <Text as="b">BS in Computer Science</Text>
          <Text as="p">Illinois State University, Normal IL (2017)</Text>
        </center>
      </Section>
      <Section header="Work Experience">
        {workExperiences.map((work, index) => (
          <div key={index} className="flex flex-col justify-between">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <Text as="h4" className="underline underline-offset-4">
                  {work.company}
                </Text>
                <Text as="p" className="py-1 font-bold">
                  {work.jobTitle}
                </Text>
              </div>
              <Text as="i">{work.timePeriod}</Text>
            </div>
            <div className="mb-5 flex flex-col">
              <Text as="p">{work.summary}</Text>
              {work.accomplishments && (
                <ul className="mb-0 pb-0">
                  {work.accomplishments.map((accomplishment, index) => (
                    <Text key={index} as="li">
                      {accomplishment}
                    </Text>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </Section>
      <Section header="Technical Skils">
        <div className="text-center">
          <Text as="p">{technicalSkills.join(" | ")}</Text>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
