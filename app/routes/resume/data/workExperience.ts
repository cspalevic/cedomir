type WorkExperience = {
  company: string;
  jobTitle: string;
  timePeriod: string;
  summary: string;
  accomplishments?: string[];
};

export const workExperiences: WorkExperience[] = [
  {
    company: "PayPal",
    jobTitle: "Software Engineer 2",
    timePeriod: "2021 - Present",
    summary:
      "Engineer apart of the Global Pay Later (GPL) team. GPL contains multiple products across the globe to provide consumer payment flexibility. timePeriod checking out with PayPal checkout, a Pay Later offer may be there for consumers to use. ",
    accomplishments: [
      "Drove scrum ceremonies - daily standups, groomings, plannings and retrospectives",
      "Triaged live issues affecting customer experiences and provided timely fixes",
      "Core contributor to GPL acquisition and servicing flows for both web frontend and mid-tier applications",
      "Team player - always helping team members figure out environment issues, providing alternative solutions in code reviews, avid tester to ensure all products across the globe are not affected.",
    ],
  },
  {
    company: "Spraying Systems",
    jobTitle: "Application Developer",
    timePeriod: "2019 - 2021",
    summary:
      "Coding and maintaining business applications, troubleshooting and solving software issues and bugs, and participating in an agile development environment including daily scrum, sprint planning, retrospectives, and performing peer code reviews.",
    accomplishments: [
      "Designed and implemented a .NET MVC application for processing new leads into the CRM system.",
      "Assisted in a ReactJS application that displays information within CRM.",
      "Created new assets, handled metadata for each asset, and detected duplicates in DAM by developing a DAM frontend and backend application to manage operations.",
    ],
  },
  {
    company: "K-Rise Systems",
    jobTitle: "Application Developer",
    timePeriod: "2018 - 2019",
    summary:
      "Utilized HTML and CSS to develop and integrate web pages for client web applications. Developed SQL queries for data analysis and extraction integration into the current ERP system. Identified and patched bugs for client web applications. Implemented features for a .NET development platform application.",
    accomplishments: [
      "Improved search performance by six seconds and provided users with suggestions and spellchecking via Apache Solr.",
      "Integrated a quote feature for clients allowing quote requests and creation and checkout.",
    ],
  },
  {
    company: "Innov8tek",
    jobTitle: "Web Development Intern",
    timePeriod: "2017 - 2018",
    summary:
      "Created unique and eye-catching websites using HTML, CSS, JavaScript, and PHP.",
    accomplishments: [
      "Revitalized a website for johnbielskilaw.com – a law firm.",
    ],
  },
  {
    company: "Illinois State University",
    jobTitle: "Research Assistant - Social Media Data Collection Program",
    timePeriod: "2016 - 2017",
    summary:
      "Utilized Twitter API and Google Maps API in Java. Analyzed text via Natural Language Processing techniques.",
  },
  {
    company: "Illinois State University",
    jobTitle: "Teaching Assistant",
    timePeriod: "2016 - 2017",
    summary:
      "Developed sample programs demonstrating good practice and well-structured code. Identified errors and flaws in student logic by assisting them with debugging their code.",
  },
];
