import Section from "./components/Section";
import {useEffect} from "react";
import feather from "feather-icons";
import Navbar from "./components/Home/Navbar";
import ValueCard from "./components/Values/ValueCard";
import ProjectCard from "./components/Projects/ProjectCard";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <div className="bg-gray-100">
      <Section className="py-10 md:py-16" id={"home"}>
        <div className={"container max-w-screen-xl mx-auto px-4"}>
          <Navbar/>
          <div className="text-center">
            <div className={"flex justify-center md:py-20 mb-16"}>
              <img src="https://imgs.search.brave.com/BK-vqJBpcoCb4k9sW2L-udvKr9Af138T6hxIErLUhF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzAxLzQ4LzE5/LzM2MF9GXzgwMTQ4/MTk3Nl9ZcUVNUkJ3/YTR5S0VKV3R2TzNM/QVM1TnhxWDByQmha/RS5qcGc" alt="Profile"/>
            </div>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Juan Pablo Hernandez Mosti</h6>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Software Developer</h1>
            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Passionate software engineer, with proficient knowledge in Gameplay Programming, VR, AR, Software Architecture, and Mobile Applications.</p>
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
                           title={"Modular Notification System"}
                           tools={["C++", "Unreal Engine", "BP", "Reflection", "Multithreading"]}
                           description={"Notification system created entirely in C++, exposed to BP using Unreal's reflection system. The system allows user to dynamically generate a notification body that can be received and used in any other system"}/>

              <ProjectCard identifier={"02"}
                           title={"Blockchain plugin"}
                           tools={["C++", "Unreal Engine", "Solidity", "BP", "Reflection", "Multithreading"]}
                           description={"Blockchain plugin created entirely in C++, exposed to BP using Unreal's. The system allows user to interact with the Ethereum blockchain"}/>
              <ProjectCard identifier={"03"}
                           title={"Couch"}
                           tools={["C#", "Unity", "VR", "XR", "Mobile", "Photon", "Multiplayer"]}
                           description={"Couch is a multiplayer VR game that allows users to watch Youtube video togethers in a virtual session. Created with Unity and Photon for multiplayer networking"}/>
              <ProjectCard identifier={"04"}
                           title={"Nevermet"}
                           tools={["JS", "ReactNative", "GraphQL", "iOS", "Android", "Mobile"]}
                           description={"Nevermet is a mobile application that allows users to meet new people. Created with React Native and GraphQL for the backend"}/>
            </div>
          </div>

        </div>
      </Section>
      <Section className={"py-10 md:py-16"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I
            studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className={"py-10 md:py-16"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="text-center">
            <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">Please do
              not measure your skills in <br/> percentages!</h1>

            <p className="font-medium text-gray-700 text-xs md:text-base">In my many years of experience, I use @laravel
              for backend projects and @vuejs for <br/> front-end projects. I’m an avid programmer, so I create designs
              based on the <br/> weekend @figmadesign.</p>
          </div>

        </div>
      </Section>
      <Section className={"py-10 md:py-16"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I
            studied</p>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                  className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                  className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                  className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                  className="font-normal text-gray-300">/ New York</span></p>

              <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                  className="font-normal text-gray-300">/ New York</span></p>
            </div>

            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

              <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>
            </div>

            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>

              <p className="font-normal text-gray-400 text-base">2016</p>
            </div>
          </div>

        </div>
      </Section>
      <Section className={"py-10 md:py-16"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places
            I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src="assets/image/brand-1.png" alt="Image"/>

            <img src="assets/image/brand-2.png" alt="Image"/>

            <img src="assets/image/brand-3.png" alt="Image"/>

            <img src="assets/image/brand-4.png" alt="Image"/>

            <img src="assets/image/brand-5.png" alt="Image"/>

            <img src="assets/image/brand-6.png" alt="Image"/>
          </div>

        </div>
      </Section>
      <Section className={"py-10 md:py-16"}>
        <div className="container max-w-screen-xl mx-auto px-4">

          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places
            I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">

              <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna
                aliqua.</p>

              <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                  className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
            </div>
          </div>

        </div>
      </Section>
      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client
              work but feel free to contact me for any <br/> other inquiries.</p>

            <div className="flex items-center justify-center space-x-8">
              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="twitter"
                   className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
              </a>

              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="dribbble"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="facebook"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="codepen"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="at-sign"
                   className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
              </a>

              <a href="#"
                 className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="instagram"
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
