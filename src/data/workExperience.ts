export interface IWorkExperience {
   company: string;
   jobTitle: string;
   when: string;
   summary: string;
   accomplishments?: string[];
}

export const workExperiences: IWorkExperience[] = [
   {
      company: 'Spraying Systems',
      jobTitle: 'Application Developer',
      when: '2019 - Present',
      summary: 'Maintain and adhere to all facets of the software development lifecycle. Design products including database and application design, implement products, test products for functionality, and deploy to production.',
      accomplishments: [
         'Designed and implemented a .NET MVC application for processing new leads into the CRM system.',
         'Assisted in a ReactJS application that displays information within CRM.',
         'Created new assets, handled metadata for each asset, and detected duplicates in DAM by developing a DAM frontend and backend application to manage operations.',
         'Devised a web resource application in CRM enabling the use of autocomplete on fields in the CRM system.'
      ]
   },
   {
      company: 'K-Rise Systems',
      jobTitle: 'Application Developer',
      when: '2018 - 2019',
      summary: 'Utilized HTML and CSS to develop and integrate web pages for client web applications. Developed SQL queries for data analysis and extraction integration into the current ERP system. Identified and patched bugs for client web applications. Implemented features for a .NET development platform application.',
      accomplishments: [
         'Improved search performance by six seconds and provided users with suggestions and spellchecking via Apache Solr.',
         'Integrated a quote feature for clients allowing quote requests and creation and checkout.'
      ]
   },
   {
      company: 'Innov8tek',
      jobTitle: 'Web Development Intern',
      when: '2017 - 2018',
      summary: 'Created unique and eye-catching websites using HTML, CSS, JavaScript, and PHP.',
      accomplishments: [
         'Raised clients’ online presence and maintained their existing website.',
         'Revitalized a website for johnbielskilaw.com – a law firm.'
      ]
   },
   {
      company: 'Illinois State University',
      jobTitle: 'Research Assistant - Social Media Data Collection Program',
      when: '2016 - 2017',
      summary: 'Utilized Twitter API and Google Maps API in Java. Analyzed text via Natural Language Processing techniques.',
      accomplishments: [
         'Identified statuses based on the provided criteria by building Python scripts.'
      ]
   },
   {
      company: 'Illinois State University',
      jobTitle: 'Teaching Assistant',
      when: '2016 - 2017',
      summary: 'Developed sample programs demonstrating good practice and well-structured code. Identified errors and flaws in student logic by assisting them with debugging their code.'
   }
]