import asc from "../assets/projects/asc.png";
import ftools from "../assets/projects/ftools.png";

export default [
  {
    name: "Laravel SaaS Application",
    title: "Laravel SaaS Application",
    image:
      "https://raw.githubusercontent.com/appsaeed/assets/main/laravel-saas-app/Dashboard-Laravel-saas-task-application.png",
    type: "project",
    job_type: "Client project",
    tags: ["Laravel", "Blade", "API"],
    link: "https://saastask.onrender.com",
    github_link: "https://github.com/appsaeed/laravel-saas-app",
    description: `Built a Laravel SaaS app with user/admin dashboards and a custom real-time chat that facilitates seamless communication. I successfully tackled chat integration challenges through rigorous testing and debugging, and implemented automated cron jobs to ensure smooth operation. The application also empowers super admins with control over environment and settings.`,
  },
  {
    name: "Pretty Task",
    title: "Pretty Task",
    image:
      "https://raw.githubusercontent.com/appsaeed/assets/main/projects/my-task/my-task-light.png",
    type: "project",
    job_type: "Open Source",
    tags: ["Javascript", "NodeJS", "TypeScript", "TailwindCSS"],
    link: "https://appsaeed.github.io/task/",
    github_link: "https://github.com/appsaeed/task",
    description: `Implemented a modern, scalable task management application using the latest tech stack: ReactJS, TypeScript, and TailwindCSS. Leveraged Firebase's serverless architecture for efficient backend operations, minimizing maintenance and enabling real-time data synchronization. Implemented server-side push notifications with Node.js to ensure users receive instant task updates`,
  },

  {
    name: "Auxonic",
    title: "Auxonic beta tools",
    image: ftools,
    description: `This is a web-based developer toolkit built with React.js and TypeScript for lightning-fast performance. It offers essential tools like image-to-text conversion and IP lookup, all in one convenient platform. Firebase Authentication keeps things secure and lets you personalize your experience`,
    tags: ["Firebase", "Tailwindcss", "Reactjs", "Typescript"],
    link: "https://appsaeed.github.io/auxonic/",
    github_link: "https://github.com/appsaeed/auxonic",
  },

  {
    name: "AI Content Creation",
    title: "AI Content Creation",
    image: asc,
    description: `Revolutionize Content Creation with the Web-Based AI Tool - Powered by WordPress, ReactJS, and TypeScript seamlessly integrated into the WordPress backend and brought to life with the dynamic UI design on the frontend. This powerhouse tool empowers users to effortlessly generate email content, craft engaging blogs, and create captivating articles, among many other possibilities`,
    tags: ["Wordpress", "API", "React.JS", "Typescript"],
    link: "https://appsaeed.github.io/ai-content-creation",
    github_link: "https://github.com/appsaeed/ai-content-creation",
  },
  {
    name: "NodeJS courses streaming",
    title: "NodeJS courses streaming",
    image:
      "https://raw.githubusercontent.com/appsaeed/assets/main/projects/nodejs-courses/nodejs-course-streamline-Home.png",
    tags: ["NodeJS", "ExpressJS", "EJS", "Database"],
    link: "",
    github_link: "https://github.com/appsaeed/nodejs-course-streaming",
    description: `Master Node.js interactively! This platform offers YouTube/Udemy-like features for students & teachers: Watch lectures, build content & playlists, discuss concepts, track progress, leverage comments & likes. Replay abilities empower teachers. Go beyond videos: Implement full-stack with Custom Model Queries (toughest challenge, but aced it with Laravel knowledge!)`,
  },
  {
    name: "NPM Packages",
    title: "NPM Packages",
    tags: ["Javascript package", "NPM Packages", "Vite Plugins"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1920px-Npm-logo.svg.png",
    link: "https://www.npmjs.com/package/utilies#other-packages",
    github_link:
      "https://github.com/appsaeed/utilies?tab=readme-ov-file#other-packages",
    description: `
    Published npm packages: (Javascript utility package) for JS utilities functions and methods to integrate and enhance developer experiences in the development of an application faster.
    Open-Source Contributor: exploring and contributing to open source javascript, react, PHP, and laravel projects.
    Vite.js Plugins: Developed (vite-svg, vite-sitemap) for SVG integration & sitemap generation. (Focuses on Vite and key functionalities)
    `,
  },
];
