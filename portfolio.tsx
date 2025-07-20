import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Code, Palette, Server, ArrowUpRight } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <Link href="#" className="text-2xl font-bold text-orange-500">
          Rushikesh 
        </Link>
        <nav className="space-x-6">
          <Link href="#about" className="text-white hover:text-orange-500 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-white hover:text-orange-500 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-white hover:text-orange-500 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-white hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70 z-0"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            className="opacity-20 z-0"
          />
          <div className="relative z-10 space-y-6">
            <h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm <span className="text-orange-500">Rushikesh Jadhav</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              A passionate <span className="text-orange-500">MERN-Stack Developer</span>
            </p>
            <div className="flex justify-center space-x-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-950">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a dedicated and innovative MERN-Stack Developer with a strong passion for creating dynamic and
              responsive web applications. With expertise in both front-end and back-end technologies, I thrive on
              solving complex problems and building seamless user experiences. My goal is to leverage technology to
              deliver impactful solutions that drive business growth and user satisfaction.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying
              up-to-date with the latest industry trends. I believe in continuous learning and always strive to improve
              my skills to deliver high-quality, scalable, and maintainable code.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800 text-white hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center space-y-4">
                  <Code className="w-12 h-12 text-orange-500" />
                  <CardTitle className="text-2xl">Front-end Development</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Shadcn/ui
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-white hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center space-y-4">
                  <Server className="w-12 h-12 text-orange-500" />
                  <CardTitle className="text-2xl">Back-end Development</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Node.js, Express.js, Python, Django, PostgreSQL, MongoDB, RESTful APIs, GraphQL
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-white hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center space-y-4">
                  <Palette className="w-12 h-12 text-orange-500" />
                  <CardTitle className="text-2xl">UI/UX & Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Figma, Adobe XD, Git, GitHub, Vercel, Docker, AWS (basics)
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-950">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-500">Project Alpha</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">
                    A full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features user
                    authentication, product listings, and a secure checkout process.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="#"
                      className="inline-flex items-center text-orange-500 hover:underline transition-colors"
                    >
                      View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link
                      href="https://github.com/RushikeshJadhav2004"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="mr-1 w-4 h-4" /> GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-500">Project Beta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">
                    A mobile-first task management application developed with React Native and Firebase. Includes
                    real-time updates and push notifications.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="#"
                      className="inline-flex items-center text-orange-500 hover:underline transition-colors"
                    >
                      View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link
                      href="https://github.com/RushikeshJadhav2004"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="mr-1 w-4 h-4" /> GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-500">Project Gamma</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">
                    An interactive data visualization tool using D3.js and a custom Python API. Allows users to explore
                    complex datasets with dynamic charts.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="#"
                      className="inline-flex items-center text-orange-500 hover:underline transition-colors"
                    >
                      View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link
                      href="https://github.com/RushikeshJadhav2004"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="mr-1 w-4 h-4" /> GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-300">Have a question or want to work together? Feel free to reach out!</p>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors"
              />
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
            <div className="flex justify-center space-x-6 pt-8">
              <Link href="https://github.com/RushikeshJadhav2004" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-8 h-8" />
              </Link>
              <Link href="http://www.linkedin.com/in/rushikeshjadhav2004" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-8 h-8" />
              </Link>
              <Link href="rushikeshjadhav3596@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Rushikesh Jadhav. All rights reserved.</p>
      </footer>
    </div>
  )
}
