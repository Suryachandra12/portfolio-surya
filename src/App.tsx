// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import './index.css';
import Navbar from "./Components/navbar";
import ThemeToggle from "./Components/themetoggle";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen font-sans">
      <Navbar />
      <div className="pt-16 px-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Hero */}
        {/* <header className="text-center py-1">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Surya Allam</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Frontend Developer (React.js, TypeScript, Redux Toolkit)
          </p>
        </header> */}
        <Profile/>
        {/* About */}
        {/* <section id="about" className="max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p>
            I'm a frontend developer with 2 years of experience building responsive and scalable
            web applications using <strong>React.js</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>Redux Toolkit</strong>. I specialize in modern state management and have hands-on
            experience working with <strong>custom middlewares</strong> to handle complex logic and
            API interactions.
          </p>
        </section> */}
        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>
        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}

export default App;