import Section from "./components/Section";
import {useEffect} from "react";
import feather from "feather-icons";
import Navbar from "./components/Home/Navbar";
import ValueCard from "./components/Values/ValueCard";
import ProjectCard from "./components/Projects/ProjectCard";
import ExperienceCard from "./components/Experience/ExperienceCard";
import ProfilePicture from "./profile-picture.jpg";
import Tag from "./components/Utilities/Tag";

function App() {
  useEffect(() => {
    feather.replace();
  },[]);

  return (
    <div className="bg-gray-100">
      <Section className="py-10 md:py-16" id={"home"}>
        <div className={"container max-w-screen-xl mx-auto px-4"}>
          <Navbar/>
          <div className="text-center">
            <div className={"flex justify-center md:py-20"}>
              <div className="flex justify-center items-center w-64 h-64 rounded-full overflow-hidden">
                <img src={ProfilePicture} alt="Profile" className="w-full h-full object-cover"/>
              </div>
            </div>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Juan Pablo Hernandez Mosti</h6>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Software
              Developer</h1>
            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Passionate software engineer, with
              proficient knowledge in Gameplay Programming, VR, AR, Software Architecture, Blockchain, and Mobile Applications.</p>
            <div className="flex justify-center flex-wrap gap-2">
              <Tag text={"C++"}/>
              <Tag text={"C#"}/>
              <Tag text={"JS/TS"}/>
              <Tag text={"Solidity"}/>
              <Tag text={"React Native"}/>
              <Tag text={"React"}/>
              <Tag text={"Unreal Engine"}/>
              <Tag text={"Unity"}/>
              <Tag text={"PlayCanvas"}/>
              <Tag text={"Git"}/>
              <Tag text={"P4V"}/>
              <Tag text={"NodeJS"}/>
              <Tag text={"Rust"}/>
            </div>
          </div>
        </div>
      </Section>
      <Section className={"py-10 md:py-16"} id={"values"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard title={"Passion"}
                       icon={"heart"}
                       description={"The excitement that I have when I create something with code is beyond others imagination, passion is the fuel that drives me every day to create top-quality products."}/>

            <ValueCard title={"Responsability"}
                       icon={"check"}
                       description={"In order to create something unique, others have to know that I have the responsibility to get the job done, that way my co-workers can concentrate on their own things."}/>

            <ValueCard title={"Communication"}
                       icon={"message-circle"}
                       description={"Greate developers are not a one-man army, we have other people we can rely on, hence, communication is a vital ability to have. I always incline to communicate any problem, solution, and discovery that I have."}/>

            <ValueCard title={"Honesty"}
                       icon={"info"}
                       description={"Along with communication comes respectful honesty, I will always give credit to those people that deserve it, as well as take responsibility for those problems that I've caused."}/>

            <ValueCard title={"Quality"}
                       icon={"check-circle"}
                       description={"Quality is the most important aspect of any project, I always strive to deliver the best quality possible, no matter the circumstances."}/>
          </div>
        </div>
      </Section>
      <Section className={"py-10 md:py-16"} id={"projects"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">Here are some examples of projects I have been part of</p>
            </div>

            <div className="space-y-24">
              <ProjectCard identifier={"01"}
                           title={"Build the void"}
                           tools={["JS", "Ethers", "PlayCanvas", "AppLayer", "Blockchain"]}
                           description={"Build the void is a serverless multiplayer game that allows users to create/modify their own world entirely on the Blockchain. The game is built with PlayCanvas and uses a L2 Ethereum blockchain to store the world data"}/>
              <ProjectCard identifier={"02"}
                           title={"Modular Notification System"}
                           tools={["C++", "Unreal Engine", "BP", "Reflection", "Multithreading"]}
                           description={"Notification system created entirely in C++, exposed to BP using Unreal's reflection system. The system allows user to dynamically generate a notification body that can be received and used in any other system"}/>

              <ProjectCard identifier={"03"}
                           title={"Blockchain plugin"}
                           tools={["C++", "Unreal Engine", "Solidity", "BP", "Reflection", "Multithreading"]}
                           description={"Blockchain plugin created entirely in C++, exposed to BP using Unreal's. The system allows user to interact with the Ethereum blockchain"}/>
              <ProjectCard identifier={"04"}
                           title={"Couch"}
                           tools={["C#", "Unity", "VR", "XR", "Mobile", "Photon", "Multiplayer"]}
                           description={"Couch is a multiplayer VR game that allows users to watch Youtube video togethers in a virtual session. Created with Unity and Photon for multiplayer networking"}/>
              <ProjectCard identifier={"05"}
                           title={"Nevermet"}
                           tools={["JS", "ReactNative", "GraphQL", "iOS", "Android", "Mobile"]}
                           description={"Nevermet is a mobile application that allows users to meet new people. Created with React Native and GraphQL for the backend"}/>
            </div>
          </div>

        </div>
      </Section>
      <Section className={"py-10 md:py-16"} id={"experience"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExperienceCard
                company={"AppLayer"}
                title={"Unreal Engine C++/Blockchain Architecture Developer"}
                time={"November 2024- Today"}
                tags={["C++", "Unreal Engine", "Solidity", "Slate", "UMG"]}
            />
            <ExperienceCard
                company={"Realworld-one"}
                title={"Unreal Engine C++ Architecture Developer"}
                time={"July 2023- November 2024"}
                tags={["C++", "Unreal Engine", "Slate", "UMG"]}
                fileUrl={"recommendations/RW1.pdf"}
                videoUrls={["https://www.youtube.com/embed/yEFp-uGQplw?si=_k_kp2Sbdz5qO83t", "https://www.youtube.com/embed/QbGkDOQE9YU?si=MmCe3OLYjen0etIE"]}
            />
            <ExperienceCard
                company={"RuckusDev"}
                title={"Unreal Engine Developer"}
                time={"October 2020- February 2021"}
                tags={["C++", "Unreal Engine"]}
                fileUrl={"recommendations/ruckusDev.pdf"}
            />
            <ExperienceCard
                company={"CheerioWorld/3DIQ"}
                title={"VR Developer"}
                time={"April 2019 - October 2022"}
                tags={["C#", "Unity", "VR", "Photon","TS", "React-Native", "GraphQL", "Meta", "Avatars"]}
                fileUrl={"recommendations/Cheerio.pdf"}
                videoUrls={["https://www.youtube.com/embed/mlJCEAxrGio?si=41JNa0dayuPy1guV", "https://www.youtube.com/embed/gxePUMuYZSc?si=b1cjDCINeSUTJPeB", "https://www.youtube.com/embed/Ifs2LI464RE?si=kaLcG6oclmuaoV1m"]}
            />
            <ExperienceCard
                company={"Framestore"}
                title={"Unreal Engine VR Developer"}
                time={"October 2020- February 2021"}
                tags={["C++", "Unreal Engine", "VR"]}
                videoUrls={["https://www.youtube.com/embed/R5aQGuTQI7E?si=IuyrvQjH1FjEN3Qf"]}
            />
            <ExperienceCard
                company={"Universidad Panamericana"}
                title={"Image processing research assistant"}
                time={"June 2018 - January 2019"}
                tags={["C#", "Unity", "VR", "Matlab"]}
            />
            <ExperienceCard
                company={"Inmersys"}
                title={"XR Gameplay programmer"}
                time={"June 2017 - January 2018"}
                tags={["C#", "Unity", "VR", "XR", "Mobile", "Photon", "Multiplayer", "Firebase"]}
            />
          </div>
        </div>
      </Section>
      <Section className={"py-10 md:py-16"} id={"education"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">Certification</h6>

              <p className="font-semibold text-gray-600 text-base">C++ Certificed  Associate Programmer </p>

              <p className="font-semibold text-gray-600 text-base">Computer graphics engineer <span
                  className="font-normal text-gray-300">/ Universidad Panamericana</span></p>

              <p className="font-semibold text-gray-600 text-base">Graphic Simulation Specialty <span
                  className="font-normal text-gray-300">/ Universidad Panamericana</span></p>
            </div>

          </div>

        </div>
      </Section>
      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="text-center">

            <div className="flex items-center justify-center space-x-8">

              <a href="https://www.linkedin.com/in/juan-pablo-h-b64094147/"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="linkedin"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="mailto:juanpablohdzm95@gmail.com"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="mail"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="https://github.com/juanpablohdzm"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="github"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
