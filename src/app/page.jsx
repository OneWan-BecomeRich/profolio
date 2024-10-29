"use client";
import { useState, useEffect, useMemo } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Portfolio - Home',
//   description: 'Home page of my portfolio.',
// }

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);

  // Set initial dark mode based on user preference
  useEffect(() => {
    setDarkMode(prefersDarkMode);
    applyTheme(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyTheme(newDarkMode);
  };

  // Apply dark mode or light mode to the body
  const applyTheme = (isDarkMode) => {
    // console.log(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className={`${inter.className} min-h-screen  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-200 dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">Portfolio</h1>

        {/* Mobile Menu Toggle Button
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Menu
        </button> */}

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/uses"
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                Uses
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-4"> Wan </h2>
        <p className="text-lg mb-8">A Developer, Software Engineer and AI Enthusiast.</p>
        <div className="flex space-x-4 mb-8"></div>
      </section>

      {/* Main Layout */}
      <main className="container mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Articles */}
        <div className="lg:col-span-2">
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            {/* Example Article */}
            <article className="mb-8 border-b pb-4">
              <h3 className="text-xl font-semibold">How To Pass CS 220</h3>
              <p className="text-sm text-gray-500">October 28, 2024</p>
              <p className="mt-2">
                Wan is a dedicated student in Ensign College, who need "A" grade to maintain the schoolarship...
              </p>
              <Link href="https://www.ensign.edu/" className="text-blue-500 hover:underline">
                Read article
              </Link>
            </article>

            <article className="mb-8 border-b pb-4">
              <h3 className="text-xl font-semibold">Bro. Smith is a wonderful teacher</h3>
              <p className="text-sm text-gray-500">October 27, 2024</p>
              <p className="mt-2">Brother Smith will grade Wan's assignment...</p>
              <Link href="https://www.ensign.edu/" className="text-blue-500 hover:underline">
                Read article
              </Link>
            </article>

            <article className="mb-8 border-b pb-4">
              <h3 className="text-xl font-semibold">Do you need an "A" to Pass?</h3>
              <p className="text-sm text-gray-500">October 26, 2024</p>
              <p className="mt-2">
                Do you need an "A" to Pass? The answer is "YES"! International Students need "A" grade to maintain their
                schoolarship...
              </p>
              <Link href="https://www.ensign.edu/" className="text-blue-500 hover:underline">
                Read article
              </Link>
            </article>

            <article className="mb-8 border-b pb-4">
              <h3 className="text-xl font-semibold">Apprecaited Bro. Smith's teaching!</h3>
              <p className="text-sm text-gray-500">October 25, 2024</p>
              <p className="mt-2">
                Thank you for teaching the class, Bro, Smith. I have learned so much from this course...
              </p>
              <Link href="https://www.ensign.edu/" className="text-blue-500 hover:underline">
                Read article
              </Link>
            </article>

            {/* Repeat article blocks */}
          </section>
        </div>

        {/* Right Column - Widgets */}
        <aside className="space-y-8">
          {/* Subscribe Widget */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Stay up to date</h3>
            <p className="text-sm text-gray-500">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <form className="mt-4">
              <input type="email" placeholder="Email address" className="w-full p-2 mb-2 border rounded-md" />
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Join</button>
            </form>
          </div>

          {/* Work Experience Widget */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Work Experience</h3>
            <ul className="space-y-4">
              <li>
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPImUutvoVzzMHycd3j9JbqbvZXbqvdTET1fzZwPLMH2FSKTRJGeXb0E2ba-aD8j6izrw7iS-qfwlQ6eexJU-J11R6SVjza5ZEmGpR6Na0_o2KBAiA=w1920-h1080"
                  alt="Slack"
                  className="w-6 h-6 inline-block mr-2"
                />
                <span className="text-sm">Software Engineer @ Slack (2016 - Present)</span>
              </li>
              <li>
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczObSz7L8i9J7EPFgc1YoitKMz8-1-Ib26Qi9CsfMXYVN3XwO-Werrml318Dlw1_1-CYcod9K_wChAhXRJtX83FeZkpSvzt0HxJh7VpDgNrK8wf4N88=w1920-h1080"
                  alt="Spotify"
                  className="w-6 h-6 inline-block mr-2"
                />
                <span className="text-sm">Software Engineer @ Spotify (2014 - 2016)</span>
              </li>
              {/* Add more experiences */}
            </ul>
          </div>

          {/* Skills Widget */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span>JAVA</span>
                <span className="bg-blue-500 h-2 w-2/3 rounded-full"></span>
              </li>
              <li className="flex items-center justify-between">
                <span>HTML</span>
                <span className="bg-blue-500 h-2 w-1/2 rounded-full"></span>
              </li>
              <li className="flex items-center justify-between">
                <span>CSS</span>
                <span className="bg-blue-500 h-2 w-1/2 rounded-full"></span>
              </li>

              {/* Add more skills */}
            </ul>
          </div>
          <div>
            <ul></ul>
          </div>
        </aside>
      </main>

      {/* <section id="Home" className="p-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Home</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img src="/About.png" alt="About" className="h-40 w-full object-cover rounded-md" />
            <h4 className="text-xl font-bold mt-4">About</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Description of About.</p>
            <a href="#" className="text-blue-500 mt-4 inline-block hover:underline">
              View About
            </a>
          </div>


          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img src="/project.png" alt="Project" className="h-40 w-full object-cover rounded-md" />
            <h4 className="text-xl font-bold mt-4">Project</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Description of project.</p>
            <a href="#" className="text-blue-500 mt-4 inline-block hover:underline">
              View Project
            </a>
          </div>


          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img src="/uses.png" alt="Uses" className="h-40 w-full object-cover rounded-md" />
            <h4 className="text-xl font-bold mt-4">Uses</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Description of Uses.</p>
            <a href="#" className="text-blue-500 mt-4 inline-block hover:underline">
              View Uses
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
