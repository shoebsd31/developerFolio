/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shoeb Sayyed",
  title: "Hi all, I'm Shoeb",
  subTitle: emoji(
    "Architecting AI-powered cloud solutions with Power Platform for enterprise automation"
  ),
  resumeLink: "https://1drv.ms/b/s!Aj8z52Cmgm9chh7hS32MXu891PbM?e=iDcpwe", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shoebsd31",
  linkedin: "https://www.linkedin.com/in/shoebsayyed/",
  gmail: "shoebsd31@gmail.com",
  gitlab: "https://gitlab.com/shoebsd31",
  stackoverflow: "https://stackoverflow.com/users/978132/shoeb-sayyed",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURRENTLY WORKING AS A SOLUTION ARCHITECT ON MULTIPLE PROJECTS",
  skills: [
    emoji(
      "⚡ Designed and implemented AI-powered solutions to automate systems and business processes"
    ),
    emoji(
      "⚡ Specialized in Power Platform, delivering AI-driven automation solutions for enterprise workflows"
    ),
    emoji(
      "⚡ Strongly recommend implementing AI-based automation where it is necessary."
    ),
    emoji(
      "⚡ Using AWS/Azure Cloud services for mobile/application development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pune University",
      logo: require("./assets/images/puneuniversity.jfif"),
      subHeader: "Bachelors of Computer Engineering",
      duration: "August 2004 - Aug 2009",
      desc: "Built an application to help SME's using telephony API.",
      descBullets: [
        "Time is important and the application focused on getting timely response from SME (Subject Matter Expert)",
        "SME's could respond to the grievances using telephony API",
        "The telephony API is plugged into the Public Switched Telephony Network"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "UX design",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Solution Architect",
      company: "IAEA",
      companylogo: require("./assets/images/iaea.png"),
      date: "December 2021 – Present",
      desc: "I work on multiple projects in the MTIT department",
      descBullets: [
        "Implemented Azure’s Document Intelligence to automate document processing using Microsoft AI.",
        "Developed Azure Logic Apps to continuously train document models based on user feedback, enhancing accuracy over time",
        "Integrated a React-based client-side application into Power Apps to provide an intuitive user experience with OCR metadata recognition",
        "Optimized document processing workflows to streamline automation and improve operational efficiency",
        "Leveraged Power Platform’s data gateway for seamless integration with on-premises infrastructure",
        "Streamlined operations with Power Automate flows."
      ]
    },
    {
      role: "Lead Software Developer",
      company: "IAEA",
      companylogo: require("./assets/images/iaea.png"),
      date: "January 2020 – December 2021",
      desc: "The project named HANA is responsible to develop metadata driven document management system",
      descBullets: [
        "Develop POC’s for different business use cases",
        "Present the POC’s to different stake holders involved in business",
        "Research and Analysis on solving business problems with metadata driven approach"
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Simcorp",
      companylogo: require("./assets/images/simcorp.png"),
      date: "July 2019 – December 2019",
      desc: "I was part of the product team initially, then I moved on to Customer Implementation team",
      descBullets: [
        "Developed API using .Net core to emulate WM Feeds API",
        "Configured Docker in WM Feeds for monitoring using Grafana",
        "Improved the performance of functional tests for customer implementations "
      ]
    },
    {
      role: "Software Developer",
      company: "Zumtobel Lighting Group",
      companylogo: require("./assets/images/zumtobel.jpg"),
      date: "April 2018 – August 2019",
      desc: "I was part of a team responsible for the development of an IOT based application called LITECOM",
      descBullets: [
        "Rebranded mobile applications using ExtJS",
        "Responsible for ionic based mobile application on IOS and Android",
        "Worked on web application which is into IOT of Lighting",
        "Used REST-API’s developed in Java and hosted in the firmware"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "IAEA",
      companylogo: require("./assets/images/iaea.png"),
      date: "March 2017 – April 2018",
      descBullets: [
        "Migrated an existing application from Angular 1 to Angular 4",
        "Developed POC’s in React to verify the possibility of migration",
        "Updated to Angular 4 using Angular-CLI and Node instead of Visual Studio",
        "Used REST API’s to work with different applications in the network",
        "Used Swagger-Codegen to auto-build services and models for Angular 4",
        "Used CI/CD with TFS integrated build and release management tooling"
      ]
    },
    {
      role: "Senior Application Developer",
      company: "ECS Infosolutions",
      companylogo: require("./assets/images/ecs.png"),
      date: "December 2015 – March 2017",
      descBullets: [
        "Worked on POC’s for Angular 2 and React with Typescript",
        "Used Mercurial to track repositories",
        "Created a generic mail-based Notification Server and Identity Server",
        "Used JIRA API’s to generate statistics on the UI",
        "Used TOPSHELF to host web applications in windows service",
        "Used Jenkins to setup CI/CD for all the applications"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Thinkbridge Softwares",
      companylogo: require("./assets/images/thinkbridge.png"),
      date: "April 2014 – November 2015",
      descBullets: [
        "Worked as a team lead to manage the development of a product",
        "Identified and delegated work to junior subordinates to work on",
        "Used Azure Devops to configure the CI/CD pipeline",
        "Used Angular 1.8 on the frontend ",
        "Used GIT to track repositories",
        "Used NodeJS, bootstrap and grunt on client side"
      ]
    },
    {
      role: "Software Analyst",
      company: "Icertis Pvt Ltd",
      companylogo: require("./assets/images/icertis.png"),
      date: "March 2012 – April 2014",
      descBullets: [
        "Worked on sharepoint designer for branding using client object model",
        "Has been part of a product development team (Transport Management System)",
        "Created a product Utility tool as an Excel Add-in",
        "Worked on different modules of the product using ASP.NET MVC, JavaScript and jQuery",
        "Used JQPlot to draw charts on the dashboard"
      ]
    },
    {
      role: "Software Developer",
      company: "Decos Softwares Pvt Ltd",
      companylogo: require("./assets/images/decos.png"),
      date: "April 2010 – March 2012",
      descBullets: [
        "Worked on HL7 protocol to work with data provided by the hospitals",
        "Created WCF services to generate patient’s report on the UI",
        "Used Silverlight Telerik controls on the frontend ",
        "Created MSI package using WIX for the tools developed in .Net and C# ",
        "Created WCF services to manage LDAP",
        "Created WCF services to create webparts on SharePoint"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "PRINCE2® 6th Edition Practitioner in Project Management",
      image: require("./assets/images/prince2-practitioner.png"),
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      image: require("./assets/images/azure-fundamentals.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a6f5c48f-47b7-4e11-8868-f5455e86b8ed"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      image: require("./assets/images/azure-developer-associate-600x600.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0bcbcdd7-43d9-4311-83a4-65912095b1d5"
        }
      ]
    },
    {
      title: "Professional Scrum Product Owner",
      image: require("./assets/images/pspo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/71d66bb5-5835-4766-b905-3a8bcb31e132"
        }
      ]
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      image: require("./assets/images/ckad.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/703f749f-b793-4716-9e6e-2ad32d5f26f4"
        }
      ]
    },
    {
      title: "Hyperledger Fabric for Developers (LFD272)",
      image: require("./assets/images/lf.png"),
      footerLink: [
        {
          name: "Training",
          url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/4c3347b3-2435-5f41-b895-a1bc7de90b62-shoeb-sayyed-hyperledger-fabric-for-developers-lfd272-certificate.pdf"
        }
      ]
    },
    {
      title: "Node.js Application Development (LFW211)",
      image: require("./assets/images/lf.png"),
      footerLink: [
        {
          name: "Training",
          url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/4c3347b3-2435-5f41-b895-a1bc7de90b62-shoeb-sayyed-nodejs-application-development-lfw211-certificate.pdf"
        }
      ]
    },
    {
      title: "(Exam 486) Developing ASP.NET MVC Applications",
      image: require("./assets/images/microsoftaspnet.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e15249c7-6681-4628-944d-2c28f1f99e4f"
        }
      ]
    },
    {
      title: "AWS Certified Solution Architect - Associate",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fde51dfe-2344-45d1-a308-a4f61de0c575/"
        }
      ]
    },
    {
      title: "Developing Blockchain-based Identity Applications",
      image: require("./assets/images/hyperledger.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://credentials.edx.org/credentials/9fd422245c9248679c78b01eaac29e3c/"
        }
      ]
    },
    {
      title: "Certificate of Appreciation",
      image: require("./assets/images/IAEA_Award.jpeg"),
      footerLink: [
        {
          name: "Award"
        }
      ]
    },
    {
      title: "Zumtobel Certified Internet of Lighting Ambasaddor",
      image: require("./assets/images/zumtobelIOL.png"),
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Reactive Architecture: Domain Driven Design",
      image: require("./assets/images/ibmReactiveARchitecture.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/ce0942a88daf40e59377f7a52f838201"
        }
      ]
    },
    {
      title: "Reactive Architecture: CQRS & Event Sourcing",
      image: require("./assets/images/ibmReactiveARchitecture.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/de312fbe8ce645a390586213f7d2426c"
        }
      ]
    },
    {
      title: "Enterprise Design Thinking Co-Creator",
      image: require("./assets/images/ibm_cocreator.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/2437817e-fa0b-4ae0-b455-f65dd0abca63"
        }
      ]
    },
    {
      title:
        "Real-time OCR and Text Detection with Tensorflow, OpenCV and Tesseract",
      image: require("./assets/images/coursera_project.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/WSWA4NGL7HXC"
        }
      ]
    },
    {
      title: "MongoDB Basics",
      image: require("./assets/images/mongodb.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://university.mongodb.com/course_completion/b5c48c6c-267c-4364-be36-8fe4727e9ba4"
        }
      ]
    },
    {
      title: "English CEFR Level B2 Certified",
      image: require("./assets/images/BritishCouncil.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://api2.englishscore.com/verify/87dd85d5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "shoebsd31@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shoebsd31", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
