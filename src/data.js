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
