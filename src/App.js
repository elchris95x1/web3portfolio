import Spline from '@splinetool/react-spline';
import { Helmet } from "react-helmet";
import profilePic from "./images/yo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import docResume from "./docs/resume.pdf";
import Header from "./components/header";
import Footer from "./components/footer";
import GitProjects from "./components/gitProjects";

function App() {
  
  
  return (
    <AnimatePresence initial={false}>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Christian Lara</title>
          <link rel="canonical" href="http://christianlaradev.com/" />
          <meta name="Computer programmer based in Waco Texas" content="Helmet application" />
        </Helmet>
      </div>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <Header/>



        <main className="w-[80%] mt-4">
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="home"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-340 h-340 relative ">
                <img
                  src={profilePic}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p class="text-2xl text-white" >Christian Lara</p>
              <p className="text-lg text-textBase text-center">
                A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level Data Analyst position or .net framework developer role. Ready to help the team achieve the company’s goals.
              </p>
                
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href={docResume}
                    target="_blank" >
                    Resume
                  </a>
                </span>
              </button>
            </div>
          </section>



          <section className="w-full flex items-center justify-center"
          id="experience">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>



          <section id="projects">
              <GitProjects/>
          </section>

          <Footer/>

        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
