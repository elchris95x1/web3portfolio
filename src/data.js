import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGoogle,
} from "react-icons/io5";
import img1 from "./images/cuckoo.PNG";
import img2 from "./images/pestStore.PNG";
import img3 from "./images/adbo.PNG";
import img4 from "./images/thumb-pinterest-clone-reactjs.png";

export const Experience = [
  {
    id: 1,
    date: "2019 - 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Bachelor of Science, Information Systems",
    location: "Tarleton State University",
    description:
      "* Learned about the manegement and marketing of a tech company.",
  },
  {
    id: 2,
    date: "2019 - 2020",
    iconsSrc: <IoCodeWorking />,
    title: "Data Collection and Analysis (Intern)",
    location: "Versalift: ​ Waco, TX",
    description:
      "* Collected and interpreted data to improve production on the line of work. Implemented more than 5 changes in the line of work to reduce wasted time by 10%.",
  },
  {
    id: 3,
    date: "2016 - 2017",
    iconsSrc: <IoCodeWorking />,
    title: "Associate of Applied Science, Computer Programming Technology ",
    location: "Texas State Technical College",
    description:
      "* Learned to program from begginer to advance level in multiple coding languages.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Cuckoo",
    imageSrc: img1,
    techs: "C#, Unity",
    github: "https://github.com/elchris95x1/Cuckoo",
    target: "_blank",
  },
  {
    id: 2,
    name: "Pest Store",
    imageSrc: img2,
    techs: "Java",
    github: "https://github.com/elchris95x1/Pest-Store",
    target: "_blank",
  },
  {
    id: 3,
    name: "Address book",
    imageSrc: img3,
    techs: "C#",
    github: "https://github.com/elchris95x1/Address-Book",
    target: "_blank",
  },
  {
    id: 4,
    name: "Auto ScreeShoots Bot",
    imageSrc: img4,
    techs: "Python",
    github: "https://github.com/elchris95x1/PY-autoScreenshots",
    target: "_blank",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/elchris95x1",
    target: "_blank",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC6HP-fcMoHHbnOHIy6oS0qw",
    target: "_blank",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/Elchris95x1",
    target: "_blank",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chris-alvarez-8ba649227/",
    target: "_blank",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoGoogle className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "E-mail",
    link: "mailto: achris95x1@gmail.com",
  },
];
