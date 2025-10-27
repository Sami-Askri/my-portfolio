import { StaticImageData } from "next/image";
import app_logo from "@/assets/app-logo.png";
import sysml2 from "@/assets/SysML2-logo.png";
import CPE from "@/assets/CPE-logo.png";
import SiemensLogo from "@/assets/siemens-logo.png";
import MBot from "@/assets/mbot.webp";


export type Project = {
  title: string;
  description: string;
  image?: StaticImageData;
  company?: StaticImageData;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Sports and nutrition mobile app",
    description: "Built a Flutter app that provides personalized workout routines and nutrition plans. Integrated Firebase for user management and progress tracking, and developed a script to auto-generate nutrition plans based on user data.",
    image: app_logo,
    company: CPE,
    link: "https://github.com/Sami-Askri/MyApp",

  },

  {
    title: "MBSE Software development",
    description: "Contributed to Model-Based Systems Engineering (MBSE) software development, enhancing system modeling capabilities and improving integration with existing engineering tools.",
    image: sysml2,
    company: SiemensLogo,
  },

  {
    title: "Rescue robot prototype assembly and programming",
    description: "Assembled and programmed an MBot ranger robot as a first protoype of an autonomous rescue robot.",
    company: CPE,
    image: MBot,
    link: "https://github.com/Sami-Askri/Autonomous-Robot",
  }

  
];

export default projects;
