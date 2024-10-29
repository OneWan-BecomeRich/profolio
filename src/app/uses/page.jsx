"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: 'Portfolio - Uses',
//   description: 'The uses page of my portfolio.',
// }

export default function Uses() {
  return (

      <div className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <header className="flex justify-between items-center p-6 bg-gray-200 dark:bg-gray-800 shadow-md">
          <h1 className="text-3xl font-bold">Uses</h1>
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


        {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Software I use, gadgets I love, and other things I recommend.</h1>
        <p className="text-lg leading-relaxed mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi.
        </p>

        {/* Categories */}
        <div className="space-y-16">
          {/* Workspace Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Workspace</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Item Name</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Item Name</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Development Tools Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Development Tools</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Tool Name</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Tool Name</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Design Tools Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Design Tools</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Design Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Design Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Productivity Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Productivity</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Productivity Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold">Productivity Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>






      </div>
  );
}
