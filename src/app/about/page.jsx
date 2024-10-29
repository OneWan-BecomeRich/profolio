"use client";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio - About",
//   description: "The about page of my portfolio.",
// };

export default function About() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <header className="flex justify-between items-center p-6 bg-gray-200 dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">About Me</h1>
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

      {/* <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-relaxed mb-6">
          Hi, I’m Wan, a passionate developer with experience in modern web technologies. Welcome to my portfolio!
        </p>
      </section> */}

      {/* Main Container */}
      <header className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Title and Description */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">I’m Wan from Taiwan majoring in Software Engineering.</h1>
            <p className="text-lg leading-relaxed mb-4">
              Currently, I am a Software Engineering Fellow at Headstarter AI, where I am learning innovative ways to
              maximize my connections and advance my career in tech. I’m passionate about taking risks and joining
              diverse communities that help me grow both personally in tech. I also love guiding others and helping them
              grow.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I’m passionate about taking risks and joining diverse communities that help me grow both personally in
              tech. I also love guiding others and helping them grow.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczNk6LbtbSBzkOgrCaMNlyErbZ5kumQ7JOa6JeUo21v5igovZBqrFcinFtN_McNpPcyqBosDd9fQZEVGveZDSTGx7x6i63voVIF3dBOuWUPhzKanDNw=w1920-h1080"
              alt="Profile picture of Wan"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />

            {/* Social Links */}
            <div className="space-y-8 mt-8">
              <Link href="https://x.com/" className="flex items-center space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMuS3Ka0TaZiA2Zq53BpHPxLC5vSPTwnGlmUldJe9AKtSLIuDh_1GLzJkXHlAqIfs68GtN6pFeyt-aYszL1boWv6c-66ZK046fzqgTIVHq4bsi1vkk=w1920-h1080"
                  alt="X Logo"
                  className="w-6 h-6 inline-block mr-2"
                />
                <p className="hover:underline">Follow me on X</p>
              </Link>
              <p></p>
              <Link href="https://github.com/" className="flex items-center space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPZMokg1O80rDFsUSJQUKfa9LKpFu-IP0wLygliU78xcQbe5xP7xTDcqXw7QZjeP3Dp85jY-QRZ8qqVm_QDZ9UEcSsIBe0FZgPSAI-xKA_CZAMI7OM=w1920-h1080"
                  alt="Github Logo"
                  className="w-6 h-6 inline-block mr-2"
                />
                <p className="hover:underline">Follow me on Github</p>
              </Link>
              <p></p>
              <Link href="https://www.linkedin.com/" className="flex items-center space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPRaCjEhcYRl3sPGJOC5b84ZiWL0_2a5AM1A0LZkJFRhWc0GguDZL9CTcRJSHppYiKmZsyZ5dwh_w9HeWI3Hi57RkgbaDa5_Fznh65wyXZufYlolcQ=w1920-h1080"
                  alt="Linkedin Logo"
                  className="w-6 h-6 inline-block mr-2"
                />
                <p className="hover:underline">Follow me on LinkedIn</p>
              </Link>
              <p> </p>
              <Link href="mailto:wan@email.com" className="flex items-center space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMI9rmHOUGTZRlK4y6mZuGkTV1LoFwEun-qlsFfQhJl22jMmE15ttq7aizCFdsPJgO_74dzTK0Cx1Z3_msm7QUFr6PjvCut-HDfnWxvZADI-7kYNoQ=w1920-h1080"
                  alt="email Logo"
                  className="w-6 h-6 inline-block mr-2"
                />
                <p className="hover:underline">wan@email.com</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
