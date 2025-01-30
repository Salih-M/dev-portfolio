export const navItems = [
  { name: "About me", href: { path: "/", hash: "#about-me" } },
  { name: "Projects", href: { path: "/", hash: "#projects" } },
  { name: "Blogs", href: { path: "/", hash: "#blogs" } },
  { name: "Contact", href: { path: "/contact" } },
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
    pageLink: "https://brainsterl.netlify.app/",
  },
  {
    image: require("./assets/images/EA-img.png"),
    projectName: "EA Interior",
    description:
      "Web page for client created with React, Formik, and Tailwind CSS.The form sends submissions via EmailJS and includes multi-language support with i18next.",
    pageLink: "https://eainteriordesign.netlify.app/",
  },
  {
    image: require("./assets/images/Lastfloors.png"),
    projectName: "Lastfloors Webpage",
    description:
      "Worked with colegue in building the responsive webpage using VueJs - Tailwind and Vuetify.",
    pageLink: "https://lastfloors.com/",
  },
  {
    image: require("./assets/images/lastfloors-app.png"),
    projectName: "Lastfloors aplication",
    description:
      "Prop-tech platorm - Collaborated on web applications, integrated APIs, developed authentication, created networking component, implemented TypeScript, and used Tailwind CSS for styling.",
    pageLink: "https://platform.lastfloors.com",
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
    coverImg: require("./assets/images/EA-img.png"),
    content: [
      {
        type: "paragraph",
        text: "After spending a year working with Vue.js, it’s great to be back using React. I recently had the opportunity to build a responsive, multi-language interior design website. In addition to developing the website, I also took on the role of UX/UI designer.Some of the core UX/UI principles I applied include:"
      },
      {
        type: "list",
        title: "UX/UI Principles Applied",
        items: [
          "Consistency - Maintaining uniform design elements to reduce confusion and create a predictable user flow",
          "Clarity - Ensuring that all elements are easy to understand and interact with",
          "Simplicity - Avoiding unnecessary elements to create a clean and functional interface",
          "Visual Hierarchy - Organizing content in a way that guides users through the page, highlighting the most important elements",
          "Accessibility - Designing with all users in mind, including those with disabilities, by ensuring readable fonts and color contrasts",
          "Responsiveness - Optimizing the design for different devices to provide a seamless experience across desktops, tablets, and smartphones"
        ]
      },
      {
        type: "section",
        title: "Tech Stack",
        text: "I chose a modern tech stack that ensured scalability, ease of maintenance, and a smooth user experience:",
        items: [
          { title: "React", description: "The backbone of the project, React allowed me to create reusable components such as image sliders, customer review sections, and a stepper for design stages" },
          { title: "Tailwind CSS", description: "I used Tailwind CSS for styling, which made it easy to build a clean, responsive UI with utility-first classes" },
          { title: "Formik", description: "Form handling was managed using Formik. This was crucial for the contact form, ensuring seamless user input validation and easy integration with other services" },
          { title: "EmailJS", description: "Without a backend team, I used EmailJS to send form submissions directly to my email, simplifying communication with users" },
          { title: "i18next", description: "To reach a wider audience, I added multi-language support using i18next, enabling users to switch between English and Turkish" },
          { title: "Material UI", description: "Material UI components were integrated into the app for consistency and ease of use, including cards, AppBar, and image lists" }            
        ]
      },
      {
        type: "section",
        title: "Key Features",
        text: "Here are some of the key features I implemented in this project:",
        items: [
          { title: "Responsive Design", description: "The site is fully responsive, providing a seamless experience on desktop, tablet, and mobile devices. I used Tailwind's responsive utilities to ensure smooth layouts across different screen sizes." },
          { title: "Interactive Components", description: "From image sliders that showcase various design styles to a dynamic contact form, the website is built with user interaction in mind." },
          { title: "Step Navigation", description: "A stepper component guides users through the design process, from concept design to advanced 3D modeling, with each step visually represented." }
        ]
      },
      {
        type: "paragraph",
        text: "This project helped me deepen my understanding of several technologies. EmailJS simplified form handling without a backend. The multi-language feature through i18next also helped me improve the website’s accessibility."
      },
      {
        type: "section",
        title: "Deployment",
        text: "Deployed on Netlify with smooth CI/CD integration, which provided a smooth, continuous integration process. Each time I pushed a new update to the main branch, it was automatically deployed, keeping the workflow streamlined."
      },
      {
        type: "paragraph",
        text: "If you're working on a similar project or have ideas to improve coding practices, feel free to reach out! I’m always open to exchanging insights, learning from others, or offering help with any challenges you may face."
      },
      {
        type: "link",
        text: "Check out the website here.",
        url: "https://eainteriordesign.netlify.app/"
      }
    ]
  },
  {
    id: 2,
    month: "Jan",
    day: 30,
    category: "Portfolio",
    title: "My Portfolio Launch",
    description:
      "Welcome to my personal portfolio page!",
    author: {
      name: "Sali Memish",
      avatar: require("./assets/images/Img-Cv.jpg"),
    },
    coverImg: require("./assets/images/blog-img-2.jpg"),
    content: [
      {
        type: "paragraph",
        text: "After a long delay (longer than I’d like to admit), I’m happy to finally announce the launch of my personal portfolio page!Let me be honest: this portfolio has been on my to-do list for quite some time, i started working on it and then it was on stand-by for long period."
      },
      {
        type:"introduction",
        title:"Why Every Developer Should Have a Portfolio",
        description:"A portfolio is a way to show your skills, growth, and creativity. Building a portfolio can help you see how far you’ve come, organize your work, and share your journey as a developer. Think back to your first day learning front-end development - it might feel overwhelming at first, but every small step you take matters. When you finally build your own portfolio, it’s a full-circle moment that shows how much you’ve learned, practiced, and grown. It’s proof that progress happens one step at a time, and it’s worth celebrating."
      },
      {
        type: "list",
        title: "Tips for Beginners: Start Your Portfolio Early",
        description:"If you’re just starting your web development journey, here’s my advice for building your first portfolio:",
        items: [
          "Start Small: A one-page site with your bio, a project, and contact info is enough to get started.",
          "Track Your Growth: Update your portfolio as you learn new skills or complete new projects. It’s not just a showcase - it’s a timeline of your development journey.",
          "Showcase Learning Projects: Even small projects, like a to-do app or a simple landing page, demonstrate your commitment to learning.",
          "Don’t Wait for “Big” Projects: It’s tempting to wait for that perfect project, but every journey starts with small steps.",
          "Be Honest: Employers appreciate authenticity. If you’re still learning, say so—it shows humility and a passion for growth."
        ]
      },
      {
        type: "section",
        title: "What You’ll Learn While Building Your Portfolio",
        description:"Creating your own portfolio is a learning experience that will make you a better developer. Here are some key lessons you’ll pick up along the way:",
        items: [
          { title: "UX/UI Principles", description: "As you design your portfolio, you’ll naturally start thinking about how users will interact with it. You’ll gain a better understanding of UX/UI principles, like intuitive navigation, responsive design, and clean layouts. Every developer should have a basic grasp of these concepts - they’ll help you in every project you work on." },
          { title: "Deploying Your Work", description: "ublishing your portfolio on platforms like Netlify or Vercel is a great way to learn about deploying applications. My tip: buy a custom domain and set it up for your portfolio. It’s a valuable skill and makes your portfolio look professional." },
          { title: "SEO Basics", description: "You’ll need to ensure your portfolio is discoverable online. This means learning the basics of SEO (Search Engine Optimization), like adding meta tags, optimizing page titles, and structuring your content for search engines." },
          { title: "Performance Optimization", description: "As you test your portfolio, you’ll learn to optimize performance. This could involve lazy-loading images, compressing files, or minimizing unnecessary JavaScript—practical skills that are useful for any web project." },
          { title: "Self-Presentation", description: "Building a portfolio is a chance to think critically about how you want to present yourself as a developer. You’ll learn to articulate your skills, showcase your best work, and tell your story in a way that resonates with potential employers or clients." },
          { title: "Continuous Improvement", description: "A portfolio is never really “done.” As you grow, you’ll revisit and update your site, adding new projects and refining old ones. This iterative process will teach you how to continuously improve your work." }       
        ]
      },
      {
        type: "paragraph",
        text: "Thank you for your support!"
      }
    ]
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
