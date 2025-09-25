export type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "project1",
    description: "Description placeholder",
    image: "/images/inventory.png",
    link: "https://github.com/yourname/inventory-system",
  },
  {
    title: "Project2",
    description: "Description placeholder",
    image: "/images/task-tracker.png",
    link: "https://github.com/yourname/task-tracker",
  },
  {
    title: "Project3",
    description: "Description placeholder",
    image: "/images/dashboard.png",
    link: "https://github.com/yourname/data-dashboard",
  },
];

export default projects;
