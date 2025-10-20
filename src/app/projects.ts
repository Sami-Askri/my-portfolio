import { StaticImageData } from "next/image";
import screen1 from "@/assets/app-logo.png";


export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Sports and nutrition mobile app",
    description: "During my second year of preparatory school at Les Chartreux-Lyon, I developed a mobile application using Flutter and Dart. The goal was to create a sports and nutrition guide app that provided users with workout routines and dietary recommendations. During this project, I also worked with Firebase databse to store and manage users, their data and be able to track users progression. I also worked on creating a script to automatically generate personalized nutrition plans based on user's data.",
    image: screen1,
    link: "https://github.com/yourname/inventory-system",
  },

];

export default projects;
