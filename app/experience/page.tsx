import SectionHeading from "@/components/section-heading"
import { Card3D } from "@/components/card-3d"
import { CanvasEffect } from "@/components/canvas-effect"
import { ExternalLink } from "lucide-react"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-16 px-4 relative">
      <div className="absolute inset-0 z-0">
        <CanvasEffect className="opacity-20" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading title="Experience" number={1} subtitle="My professional journey and roles." />

        <div className="space-y-12 mt-12">
          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-1">Research Intern</h3>
                  <div className="flex items-center">
                    <a
                      href="https://www.ceeri.res.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                    >
                      CSIR - Central Electronics Engineering Research Institute
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono mb-1">
                    May 2024 - Jul 2024
                  </span>
                  <p className="text-sm text-slate">Pilani, Rajasthan</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project: Digital Filter Design</h4>
                  <p className="text-slate mb-4">
                    Led the development of an optimized decimation filter for a network chip, focusing on hardware
                    efficiency and power reduction. The project involved extensive research, design, implementation, and
                    verification phases.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Developed an optimised decimation filter for a network chip with implementation in MATLAB.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Researched and analyzed various filter architectures to determine the most efficient solution.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Implemented CIC, FIR Compensation, and Half-Band FIR Filters in MATLAB.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Achieved 69% hardware savings and 28% power reduction compared to traditional architectures.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Collaborated with senior researchers to integrate the filter design into the larger network chip
                        architecture.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Documented the design process, implementation details, and performance metrics.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">MATLAB</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">
                      Digital Signal Processing
                    </span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Filter Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hardware Optimization</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Technical Documentation</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Research</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-1">Circuital and Electronics Intern</h3>
                  <div className="flex items-center">
                    <a href="#" className="text-highlight font-mono text-sm inline-flex items-center hover:underline">
                      Khageshvara Aviation Technology Pvt. Ltd
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono mb-1">
                    Oct 2023 - Jan 2024
                  </span>
                  <p className="text-sm text-slate">Remote</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project: Electronic System Enhancements</h4>
                  <p className="text-slate mb-4">
                    Collaborated with a team of engineers to optimize electronic systems for aviation applications.
                    Focused on improving performance, reliability, and efficiency of various electronic components.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Collaborated on electronic system enhancements, optimising designs to align with company
                        objectives and improve performance.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Assisted in troubleshooting and debugging electronic circuits for aviation applications.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Participated in design reviews and provided input on circuit optimizations.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Documented technical specifications and test results for various electronic components.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Gained practical experience in aviation electronics and industry standards.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Circuit Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Electronic Systems</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Aviation Technology</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">System Optimization</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Troubleshooting</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-1">
                    International Programmes Collaboration Division Student Coordinator
                  </h3>
                  <div className="flex items-center">
                    <a
                      href="https://www.bits-pilani.ac.in/goa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                    >
                      BITS Pilani Goa Campus
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono mb-1">
                    Apr 2024 - Present
                  </span>
                  <p className="text-sm text-slate">Goa, India</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Role Overview</h4>
                  <p className="text-slate mb-4">
                    Serve as a key liaison between BITS Pilani and international partner universities, facilitating
                    academic exchange programs and collaborative initiatives. Support the development and maintenance of
                    global partnerships to enhance the university's international presence.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Supported student and faculty exchange programs between BITS Pilani and international
                        universities.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Coordinated joint academic activities with partner institutions.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Assisted in planning and executing international academic events and conferences.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Facilitated communication between international students and university administration.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Helped enhance the college's global partnerships and presence.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Event Management</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">
                      Cross-cultural Communication
                    </span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Program Coordination</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">International Relations</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Leadership</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Teamwork</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-1">
                    Department of Backstage and Infrastructure Management
                  </h3>
                  <div className="flex items-center">
                    <a
                      href="https://www.bits-pilani.ac.in/goa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                    >
                      BITS Pilani Goa Campus
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono mb-1">
                    Dec 2022 - Apr 2024
                  </span>
                  <p className="text-sm text-slate">Goa, India</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Role Overview</h4>
                  <p className="text-slate mb-4">
                    Managed technical operations and infrastructure for various college events, ensuring smooth
                    execution and optimal audience experience. Coordinated with different departments to meet technical
                    requirements and resolve issues in real-time.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Managed backstage operations and infrastructure for various events in the college.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Played a key role in operating Audio-Visual systems during events.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Coordinated logistics and ensured smooth event execution during various fests.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Collaborated with different departments to meet technical requirements for events.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Troubleshot technical issues during live events to ensure uninterrupted performances.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Event Management</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Technical Operations</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Audio-Visual Systems</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Problem Solving</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Team Coordination</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Crisis Management</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </main>
  )
}
