import { ProjectTags } from "./ProjectTags";

export const Projects: Project[] = [
    {
        title: "React Journal",
        description: "Journal app created with React, Redux and Typescript.",
        github: "https://github.com/em-jose/react-journal",
        image: "/projects/journal_app.webp",
        tags: [ProjectTags.REACT, ProjectTags.REDUX, ProjectTags.FIREBASE],
    },
    {
        title: "JS Calendar (Front-end)",
        description:
            "Calendar app built with React and React Redux. The app allows you to create a user and manage a calendar.",
        link: "https://js-calendar-frontend.vercel.app/",
        github: "https://github.com/em-jose/js-calendar-frontend",
        image: "/projects/calendar_app.webp",
        tags: [ProjectTags.REACT, ProjectTags.REDUX, ProjectTags.BOOTSTRAP],
    },
    {
        title: "JS Calendar (Back-end)",
        description: "Calendar app back-end built with NodeJS and ExpressJS.",
        link: "https://js-calendar-backend.up.railway.app/",
        github: "https://github.com/em-jose/js-calendar-backend",
        image: "/projects/calendar_app_backend.webp",
        tags: [ProjectTags.NODEJS, ProjectTags.EXPRESSJS, ProjectTags.MONGODB],
    },
];
