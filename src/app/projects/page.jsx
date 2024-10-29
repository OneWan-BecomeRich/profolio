"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Portfolio - Projects',
//   description: 'The projects page of my portfolio.',
// }

export default function Projects() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <header className="flex justify-between items-center p-6 bg-gray-200 dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">Projects</h1>
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

        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Light/Dark Mode
        </Link>
      </header>

      {/* Project Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Things I’ve made trying to put my dent in the universe.</h1>
        <p className="text-lg leading-relaxed mb-6">
          Creating technology to empower civilians to explore space on their own terms.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project Item */}
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczONtytlOSMTUMgwZXRjCImvqaKcO9nRnbL5ZmukFreECIWUXUJBp-0qWQwb7g3eGSu7x4120H3SFk0O9dWf9Qa036xzPgR8YTNAKNgGJ38Oh0ROELE=w1920-h1080"
                  alt="Company Logo"
                  className="h-16 w-16 mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Company</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Creating technology to empower civilians to explore space on their own terms.
                </p>
                <Link href="https://www.ensign.edu/" className="text-blue-500 hover:underline">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczOUIxUvzxAq3WNEM2JxshMYLh2zSwEZtkMbtLWiSDfJNjsJc0fJmCkeEwxV3Rk8VLDzPbfwAOjbyHw9W6ccSKfDj5a9PpCalqG8aKkweQoQNhruxyU=w1920-h1080"
                    alt="Link Icon"
                    className="inline-block w-4 h-4 mr-2"
                  />
                  https://company.com
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
