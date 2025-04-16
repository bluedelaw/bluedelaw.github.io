"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Download, Github, Globe, Phone, Mail, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button className="flex items-center gap-2" asChild>
            <a href="/Daniel_Law_Resume.pdf" download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Social Links Section */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/bluedelaw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/law-daniel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#0077B5]/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              {/* <motion.a
                href="https://bluedelaw.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe className="h-6 w-6" />
                <span className="sr-only">Portfolio</span>
              </motion.a> */}
            </div>
          </div>

          <Card className="print:shadow-none">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <CardTitle className="text-3xl font-bold text-primary">Daniel Law</CardTitle>
                  <p className="text-xl text-muted-foreground">Software Developer</p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>778-953-3109</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:daniel.law1175@gmail.com" className="hover:text-primary">
                      daniel.law1128@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Education Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">EDUCATION</h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">British Columbia Institute of Technology</h3>
                      <p className="text-muted-foreground">Diploma in Computer Systems Technology</p>
                    </div>
                    <p className="text-muted-foreground">May 2025</p>
                  </div>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Relevant Coursework: Systems and Object-Oriented Programming, Software Design and Patterns, Web
                      Development, Algorithms and Data Structures, Database Systems, Computer Networks, Information
                      Systems
                    </li>
                  </ul>
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">EXPERIENCE</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">Café De A | Software Developer / Server</h3>
                      </div>
                      <p className="text-muted-foreground">Winter 2025</p>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Utilized React and tailored CSS to build a responsive website showcasing menu items</li>
                      <li>
                        Designed an in-house waitlist app with built-in AWS-based messaging for employees to notify
                        guests via SMS
                      </li>
                      <li>
                        Supported front-of-house operations, including bartending, waiter management, and food service
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">
                          Coast Capital Savings | Member Services Representative
                        </h3>
                      </div>
                      <p className="text-muted-foreground">Summer 2022</p>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Demonstrated exceptional knowledge towards investment product and services, including term
                        deposits, TFSAs, and RRSPs
                      </li>
                      <li>
                        Established strong MSR to member connection in addition to generating referral opportunities
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">Starbucks | Barista</h3>
                      </div>
                      <p className="text-muted-foreground">Summer 2018</p>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Performed day-by-day tasks in both handling and Sales Reporting</li>
                      <li>Carried out inventory stock count for coffee beans, milk, and merchandise</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">PROJECTS</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">Cafedea Restaurant Website</h3>
                        <a
                          href="https://cafedea.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          cafedea.ca
                        </a>
                      </div>
                      <p className="text-muted-foreground">Winter 2025</p>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Designed and developed a responsive, mobile-friendly website for a local Hong Kong café,
                        featuring dynamic menus for breakfast, lunch, and dinner
                      </li>
                      <li>
                        Built reusable components with React and TypeScript to ensure accessibility, performance, and
                        seamless user experience across devices
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">CityConnect</h3>
                        <a
                          href="https://comp1800-bby19.web.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          comp1800-bby19.web.app
                        </a>
                      </div>
                      <p className="text-muted-foreground">Fall 2023</p>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Collaborated with a team of 3 to design and develop a user-friendly, real-time platform enabling
                        citizens to efficiently report issues and communicate with their local city hall
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">SKILLS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Languages:</h3>
                    <p>JavaScript, TypeScript, Java, C, C++, Python, SQL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Technologies:</h3>
                    <p>React.js, Node.js, Express, Git, Next.js, Bootstrap, SQL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Toolkit:</h3>
                    <p>GitHub, Visual Studio Code, Adobe Suite (Photoshop, Illustrator, XD), IntelliJ</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Design:</h3>
                    <p>UI/UX (Responsive Design, Accessibility), Graphic Design</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
