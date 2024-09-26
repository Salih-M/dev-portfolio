export const navItems = [
  { name: "About me", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Blogs", href: "/" },
  { name: "Resume", href: "/" },
];

export const skills = [
  { skillName: "HTML", icon: "mdi mdi-language-html5" },
  { skillName: "CSS", icon: "mdi mdi-language-css3" },
  { skillName: "Typescript", icon: "mdi mdi-language-typescript" },
  { skillName: "JavaScript", icon: "mdi mdi-language-javascript" },
  { skillName: "React", icon: "mdi mdi-react" },
  { skillName: "VueJs", icon: "mdi mdi-vuejs" },
  { skillName: "Bootstrap", icon: "mdi mdi-bootstrap" },
  { skillName: "Tailwind", icon: "mdi mdi-tailwind" },
  { skillName: "Git", icon: "mdi mdi-github" },
];

export const projectsCard = [
  {
    image: require("./assets/images/brainster-labs-img.png"),
    projectName: "Brainster Labs",
    description:
      " Small project that i worked on during the Brainster Academy.",
    pageLink: "/",
    codeLink: "/",
  },
  {
    image: require("./assets/images/EA-img.png"),
    projectName: "EA Interior",
    description:
      "Web page for client created with React, Formik, and Tailwind CSS.The form sends submissions via EmailJS and includes multi-language support with i18next.",
    pageLink: "/",
    codeLink: "/",
  },
  {
    image: require("./assets/images/Lastfloors.png"),
    projectName: "Lastfloors Webpage",
    description:
      "Worked with colegue in building the responsive webpage using VueJs - Tailwind and Vuetify.",
    pageLink: "/",
  },
  {
    image: require("./assets/images/lastfloors-app.png"),
    projectName: "Lastfloors aplication",
    description:
      "Prop-tech platorm - Collaborated on web applications, integrated APIs, developed authentication, created networking component, implemented TypeScript, and used Tailwind CSS for styling.",
    pageLink: "/",
  },
];

export const blogPosts = [
  {
    id: 1,
    month: "Sep",
    day: 25,
    category: "Development",
    title: "Back to React",
    description:
      "Building an Interior Design Website with Modern Web Technologies",
    author: {
      name: "Sali Memish",
      avatar: require("./assets/images/Img-Cv.jpg"),
    },
    content: {
      introduction: `
        After spending a year working with Vue.js, it’s great to be back using React.
        I recently had the opportunity to build a responsive, multi-language interior
        design website. In addition to developing the website, I also took on the
        role of UX/UI designer.Some of the core UX/UI principles I applied include:
      `,
      principles: [
        {
          title: "Consistency",
          description:
            "Maintaining uniform design elements to reduce confusion and create a predictable user flow.",
        },
        {
          title: "Clarity",
          description:
            "Ensuring that all elements are easy to understand and interact with.",
        },
        {
          title: "Simplicity",
          description:
            "Avoiding unnecessary elements to create a clean and functional interface.",
        },
        {
          title: "Visual Hierarchy",
          description:
            "Organizing content in a way that guides users through the page, highlighting the most important elements.",
        },
        {
          title: "Accessibility",
          description:
            "Designing with all users in mind, including those with disabilities, by ensuring readable fonts and color contrasts.",
        },
        {
          title: "Responsiveness",
          description:
            "Optimizing the design for different devices to provide a seamless experience across desktops, tablets, and smartphones.",
        },
      ],
      techStack: {
        introduction:
          "I chose a modern tech stack that ensured scalability, ease of maintenance, and a smooth user experience:",
        technologies: [
          {
            title: "React",
            description:
              "The backbone of the project, React allowed me to create reusable components such as image sliders, customer review sections, and a stepper for design stages.",
          },
          {
            title: "Tailwind CSS",
            description:
              "I used Tailwind CSS for styling, which made it easy to build a clean, responsive UI with utility-first classes.",
          },
          {
            title: "Formik",
            description:
              "Form handling was managed using Formik. This was crucial for the contact form, ensuring seamless user input validation and easy integration with other services.",
          },
          {
            title: "EmailJS",
            description:
              "Without a backend team, I used EmailJS to send form submissions directly to my email, simplifying communication with users.",
          },
          {
            title: "i18next",
            description:
              "To reach a wider audience, I added multi-language support using i18next, enabling users to switch between English and Turkish.",
          },
          {
            title: "Material UI",
            description:
              "Material UI components were integrated into the app for consistency and ease of use, including cards, AppBar, and image lists.",
          },
        ],
      },
      keyFeatures: [
        {
          title: "Responsive Design",
          description:
            "The site is fully responsive, providing a seamless experience on desktop, tablet, and mobile devices. I used Tailwind's responsive utilities to ensure smooth layouts across different screen sizes.",
        },
        {
          title: "Interactive Components",
          description:
            "From image sliders that showcase various design styles to a dynamic contact form, the website is built with user interaction in mind.",
        },
        {
          title: "Step Navigation",
          description:
            "A stepper component guides users through the design process, from concept design to advanced 3D modeling, with each step visually represented.",
        },
      ],
      learningExperience:
        "This project helped me deepen my understanding of several technologies. EmailJS simplified form handling without a backend. The multi-language feature through i18next also helped me improve the website’s accessibility.",
      deployment:
        "Deployed on Netlify with smooth CI/CD integration, which provided a smooth, continuous integration process. Each time I pushed a new update to the main branch, it was automatically deployed, keeping the workflow streamlined. ",
      outro:
        "If you're working on a similar project or have ideas to improve codingpractices, feel free to reach out! I’m always open to exchanging insights, learning from others, or offering help with any challenges you may face.",
    },
  },
  {
    id: 2,
    month: "Oct",
    day: 6,
    category: "Development",
    title: "Comming soon",
    description: "Comming soon new blog about development and coding",
    author: {
      name: "Sali Memish",
      avatar: require("./assets/images/Img-Cv.jpg"),
    },
  },
  {
    id: 3,
    month: "Dec",
    day: 12,
    category: "Development",
    title: "Comming soon",
    description: "Comming soon new blog about development and coding",
    author: {
      name: "Sali Memish",
      avatar: require("./assets/images/Img-Cv.jpg"),
    },
  },
];
