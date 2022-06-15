import React from "react";
import Icon, { IconName } from "~/components/icon";
import Text from "~/components/text";

const Index: React.FC = () => {
  return (
    <div className="flex h-full flex-col md:flex-row md:items-center md:justify-center">
      <div className="relative flex-row pb-10 pt-5">
        <img
          alt="Me"
          className="max-w-325 h-auto w-[15rem] rounded-full border-2 border-sky-500"
          src="/images/me.jpg"
        />
        <div className="space-y-3 pt-5">
          {[
            { text: "Chicago, IL", iconName: IconName.Place },
            { text: "Illinois State University", iconName: IconName.School },
            { text: "Software Engineer, PayPal", iconName: IconName.Office },
            { text: "cedomir.spalevic@gmail.com", iconName: IconName.Email },
            { text: "cedomir-spalevic", iconName: IconName.Code },
          ].map(({ text, iconName }) => (
            <div key={text} className="flex flex-row">
              <Icon as={iconName} />
              <Text as="span">{text}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className="md:ml-5">
        <Text as="p" className="pb-3">
          Hey, I'm Charlie Spalevic. I live in Chicago, IL. I'm a Software
          Engineer at PayPal on the Global Pay Later (GPL) team.
        </Text>
        <Text as="p" className="pb-3">
          I'm a Computer Science graduate from Illinois State University.
        </Text>
        <Text as="p" className="pb-3">
          I'm another tech geek interested in web technologies, machine
          learning, 3d printing and trying to figure out how this crazy thing
          called the internet works.
        </Text>
        <Text as="p">Thanks for checking this out. Have a great day!</Text>
      </div>
    </div>
  );
};

export default Index;
