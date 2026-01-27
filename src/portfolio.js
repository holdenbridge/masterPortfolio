/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Holden's Personal Site",
  description:
    "I am a Data Scientist who focuses on analyzing sports data to optimize performance, strategy, and efficiency.",
  og: {
    title: "Holden Bridge Personal Site",
    type: "website",
    url: "http://holdenbridge.com/",
  },
};

//Home Page
const greeting = {
  title: "Holden Bridge",
  logo_name: "Holden Bridge",
  subTitle:
    "I am a Data Scientist who focuses on analyzing sports data to optimize performance, strategy, and efficiency.",
  imagePath: "sportsdatalogo.png", // Path relative to src/assets/images/
  imageAlt: "Holden Bridge", // Alt text for the image
};

const socialMediaLinks = [
  {
    name: "Resume",
    link: "TODO: Add resume link",
    fontAwesomeIcon: "fa-file-alt", // Reference https://fontawesome.com/icons/file-alt?style=solid
    iconType: "fas", // Font Awesome Solid (not a brand icon)
    backgroundColor: "#0F9D58", // Google Sheets dark green
  },
  {
    name: "Gmail",
    link: "mailto:holdenbridge0@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/holdenbridge/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/holdenbridge",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Virginia School of Data Science",
      subtitle: "Master of Science (MS) in Data Science",
      logo_path: "uva_logo.png",
      alt_name: "UVA",
      duration: "2020 - 2021",
      descriptions: [
        '• <a href="https://ieeexplore.ieee.org/document/9483709" target="_blank" rel="noopener noreferrer">Capstone Project</a> Sponsored By The US Department of Defense ',
      ],
      website_link: "https://datascience.virginia.edu/degrees/msds-residential",
    },
    {
      title: "Swarthmore College",
      subtitle:
        "Bachelor of Arts (BA) in Computer Science With A Minor In Statistics",
      logo_path: "swat_logo.png",
      alt_name: "Swarthmore",
      duration: "2016 - 2020",
      descriptions: [
        "• 4 Year Member of the Varsity Baseball Team",
        "• Centennial Conference Spring Academic Honor Roll Recipient (2018, 2019, 2020)",
        "• Study Abroad in Copenhagen, Denmark Fall 2018",
      ],
      website_link: "https://www.swarthmore.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Master Python for Data Science",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedin_learning_logo.jpeg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/184460bb1eb28b1291db5b2faca5277b1416bad96a9ae79adb443d1bbb1789c7?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIizxMB5vTwWnbnctXs7nYw%3D%3D",
      alt_name: "Python for Data Science",
      color_code: "#63aaff99",
    },
    {
      title: "Coming Soon",
      subtitle: "-",
      logo_path: "coming_soon.png",
      certificate_link: "",
      alt_name: "Soon",
      color_code: "#00000099",
    },
    {
      title: "Coming Soon",
      subtitle: "-",
      logo_path: "coming_soon.png",
      certificate_link: "",
      alt_name: "Soon",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internships",
  description: "TODO - Overall Description ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist - Sports Modeling (MLB)",
          company: "PrizePicks",
          company_url: "https://www.prizepicks.com/",
          logo_path: "prizepicks_logo.png",
          duration: "March 2024 - Present",
          location: "Denver, CO (Remote)",
          description: "TODO - add description",
          color: "#000000",
        },
        {
          title: "Baseball Research Analyst / Advance Scouting Analyst",
          company: "Minnesota Twins",
          company_url: "https://www.mlb.com/twins",
          logo_path: "twins_logo.png",
          duration: "June 2021 - March 2024",
          location: "Minneapolis, MN",
          description: "TODO - add description",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern - Global Super User Program",
          company: "Under Armour",
          company_url: "https://about.underarmour.com/en",
          logo_path: "underarmour_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Baltimore, MD",
          description: "TODO - add description",
          color: "#000000",
        },
        {
          title: "Sales Operations Intern - Competition",
          company: "Nextech Systems",
          company_url: "https://www.nextech.com/",
          logo_path: "nextech_logo.png",
          duration: "June 2018 - August 2018",
          location: "Tampa, FL",
          description: "TODO - add description",
          color: "#ee3c26",
        },
        {
          title: "Field Sales Representative",
          company: "Vector Marketing",
          company_url: "https://www.vectormarketing.com/",
          logo_path: "vector_logo.png",
          duration: "June 2016 - August 2016",
          location: "Tampa, FL",
          description: "TODO - add description",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
