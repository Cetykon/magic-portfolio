import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jesus",
  lastName: "Aguilar-Andrade",
  name: `Jesus Aguilar-Andrade`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "aguilarandradejesus@gmail.com",
  location: "America/Detroit", // Grand Rapids, Michigan timezone
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false, // Set to false to hide newsletter section
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about software engineering and development</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Cetykon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jesusaguilardev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building software solutions with passion and precision</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TDMP Media</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/tdmp-media-scheduling-system",
  },
  subline: (
    <>
      I'm Jesus, a software engineer with a B.S. in Digital Media Software Engineering from Ferris State University, 
      where I build full-stack applications and explore emerging technologies.
      <br /> Passionate about creating efficient, scalable solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to false to hide calendar section, or update link with your calendar
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jesus is a software engineer with a B.S. in Digital Media Software Engineering from Ferris State University, completed in September 2025. 
        He specializes in Intelligent Systems and Full-Stack Development, with experience as a Machine Learning Intern at Telic Corporation and Software Developer Intern 
        at Ferris State University. His work spans machine learning classification systems, full-stack web development, computer vision, and real-time systems. 
        With a strong foundation in multiple programming languages and frameworks, he enjoys tackling complex problems and creating efficient, scalable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Telic Corporation",
        timeframe: "August 2025 – September 2025",
        role: "Machine Learning Intern - Disposition Project",
        achievements: [
          <>
            Developed an ML classification model system for military warehouse waste management, classifying over 100,000 asset disposition images across 2,449 categories with 97.69% classification accuracy using MobileNetV2.
          </>,
          <>
            Implemented the ML Model with a mobile app for real-time, on-site classification and a desktop GUI for high-volume batch processing, to significantly streamline resource recovery operations.
          </>,
          <>
            Tech Stack: Python, TensorFlow/Keras, PyTorch, Android (Kotlin), PyQt6, OpenCV, YOLO, MobileNetV2
          </>,
        ],
        images: [],
      },
      {
        company: "Ferris State University - TDMP Media Scheduler",
        timeframe: "February 2025 – August 2025",
        role: "Software Developer Intern",
        achievements: [
          <>
            Engineered a media scheduling and inventory platform using Spring Boot and React, supporting 300+ students and automating 100% of equipment reservations, checkouts, and returns.
          </>,
          <>
            Configured and deployed MariaDB database on Sevella, backend services via Render, and frontend React app via Netlify, enabling reliable, full-stack access for students and faculty.
          </>,
          <>
            Tech Stack: Java Spring (Maven), MariaDB, React.js, JWT Authentication, Google Email API, Docker
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Ferris State University",
        description: (
          <>
            <strong>B.S. in Digital Media Software Engineering</strong>
            <br />
            Completion: September 2025
            <br />
            Concentrations: Intelligent Systems and Full-Stack Development
            <br />
            GPA: 4.00/4.00
            <br />
            Related Coursework: Machine Learning, Data Structures & Algorithms, Software QA, Graphical Interface Design, Enterprise Software Application, Component Design, Project Management, Software Architecture
          </>
        ),
      },
      {
        name: "Grand Rapids Community College",
        description: (
          <>
            <strong>A.S. in Arts and Science</strong>
            <br />
            Completion: July 2023
            <br />
            GPA: 3.68/4.00
            <br />
            Related Coursework: Linux, Discrete Math, Linear Algebra, Statistics, Calculus I, Calculus II, Calculus-Based Physics
          </>
        ),
      },
    ],
  },
  activities: {
    display: true, // set to false to hide this section
    title: "Activities & Leadership",
    items: [
      {
        name: "Catholic Youth Group – Generatión Del Manifesto Católico",
        description: (
          <>
            <strong>Secretary & Founding Member</strong>
            <br />
            August 2024 – Current | Grand Rapids, Michigan
            <br />
            Managing bookkeeping and events for 19+ members. Responsible for organizing events, teaching faith-based lessons, and working to expand the group to other churches in the area.
          </>
        ),
      },
      {
        name: "IEEEXtreme Competition 2024",
        description: (
          <>
            <strong>Participant</strong>
            <br />
            October 2024 | Remote
            <br />
            In a three-person competition, only two of us participated, yet we managed to place 65th out of 149 teams in the United States.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>
            Proficient in Java, Python, JavaScript, C#, VB.NET, SQL, and HTML/CSS. 
            Experience building full-stack applications, RESTful APIs, machine learning systems, and mobile applications.
          </>
        ),
        tags: [
          {
            name: "Java",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "javascript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "C#",
            icon: "javascript",
          },
          {
            name: "SQL",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: (
          <>
            Building modern applications with React.js, Spring Boot, Flask, TensorFlow, OpenCV, Docker, Git, and various development environments. 
            Experience with Eclipse, Visual Studio, Jupyter Notebooks, Bootstrap, and Agile methodologies.
          </>
        ),
        tags: [
          {
            name: "React.js",
            icon: "javascript",
          },
          {
            name: "Spring Boot",
            icon: "javascript",
          },
          {
            name: "TensorFlow",
            icon: "javascript",
          },
          {
            name: "Docker",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Core Areas",
        description: (
          <>
            Specialized expertise in Full-Stack Development, Machine Learning, Computer Vision, API Design, and Data Processing. 
            Experience with ML classification models, real-time systems, and scalable application architecture.
          </>
        ),
        tags: [
          {
            name: "ML",
            icon: "javascript",
          },
          {
            name: "Computer Vision",
            icon: "javascript",
          },
          {
            name: "Full-Stack",
            icon: "javascript",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software engineering and development...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of projects and work by ${person.name}`,
  images: [
    {
      src: "/images/gallery/IMG_3761~2.JPG",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_3887.JPG",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG-20250526-WA0002.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG-20250628-WA0190.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG-20250823-WA0000.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG-20251004-WA0055.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/PXL_20220925_175153131.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/PXL_20231227_154317328.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/PXL_20241227_021736257.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/PXL_20250728_030035475.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/PXL_20250828_175810240.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Snapchat-1249775168.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
