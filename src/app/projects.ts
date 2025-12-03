import { StaticImageData } from "next/image";
import app_logo from "@/assets/app-logo.png";
import sysml2 from "@/assets/SysML2-logo.png";
import CPE from "@/assets/CPE-logo.png";
import SiemensLogo from "@/assets/siemens-logo.png";
import MBot from "@/assets/mbot.webp.png";
import sm from "@/assets/sm.png";


export type Project = {
  title: string;
  description: string;
  technologies?: string;
  image?: StaticImageData;
  company?: StaticImageData;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Sports and nutrition mobile app",
    description: "Built a Flutter app that provides personalized workout routines and nutrition plans. Integrated Firebase for user management and progress tracking, and developed a script to auto-generate nutrition plans based on user data.",
    technologies: "Flutter, Firebase, Dart, Python",
    image: app_logo,
    company: CPE,
    link: "https://github.com/Sami-Askri/MyApp",

  },

  {
    title: "MBSE Software development",
    description: "Contributed to Model-Based Systems Engineering (MBSE) software development, enhancing system modeling capabilities and improving integration with existing engineering tools.",
    technologies: "C++, Python, SysML v2, Qt, React",
    image: sysml2,
    company: SiemensLogo,
  },

  {
    title: "StateMachine simulation on MBSE tools",
    description: "Implemented a StateMachine simulator in Python that uses an intern C++ engine to simulate complex state transitions and behaviors, and completed the workflow with the animation of the diagrams on Simcenter Studio.",
    technologies: "Python, C++, React, Websockets",
    company: SiemensLogo,
    image: sm,
  },

  {
    title: "Rescue robot prototype : assembly and programming",
    description: "Assembled and programmed an MBot ranger robot as a first protoype of an autonomous rescue robot.",
    technologies: "C, Arduino",
    company: CPE,
    image: MBot,
    link: "https://github.com/Sami-Askri/Autonomous-Robot",
  },


];

export default projects;
