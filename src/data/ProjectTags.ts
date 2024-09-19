import NextJS from "@/components/icons/NextJS.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import React from "@/components/icons/React.astro";
import Bootstrap from "@/components/icons/Bootstrap.astro";
import Redux from "@/components/icons/Redux.astro";
import Firebase from "@/components/icons/Firebase.astro";
import NodeJS from "@/components/icons/NodeJS.astro";
import MongoDB from "@/components/icons/MongoDB.astro";

export const ProjectTags: ProjectTags = {
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white",
        icon: NextJS,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind,
    },
    REACT: {
        name: "React",
        class: "bg-[#0d1117] text-white",
        icon: React,
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "bg-[#8511fa] text-white",
        icon: Bootstrap,
    },
    REDUX: {
        name: "Redux",
        class: "bg-[#593D88] text-white",
        icon: Redux,
    },
    FIREBASE: {
        name: "Firebase",
        class: "bg-[#A08021] text-white",
        icon: Firebase,
    },
    NODEJS: {
        name: "Node.JS",
        class: "bg-[#6DA55F] text-white",
        icon: NodeJS,
    },
    EXPRESSJS: {
        name: "Express.JS",
        class: "bg-[#404D59] text-white",
    },
    MONGODB: {
        name: "MongoDB",
        class: "bg-[#4EA94B] text-white",
        icon: MongoDB,
    },
};
