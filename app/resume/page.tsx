import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import { Card3D } from "@/components/card-3d"
import { CanvasEffect } from "@/components/canvas-effect"
import { useTheme } from "next-themes"

export default function ResumePage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen py-16 px-4 relative">
      <div className="absolute inset-0 z-0">
        <CanvasEffect className="opacity-20" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex justify-between items-center mb-8">
          <SectionHeading title="Resume" number={1} />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 flex items-center gap-2 px-4 py-2 rounded"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>

        <Card3D className="w-full">
          <div className="bg-navy-light rounded-lg border border-navy-lighter p-8 mb-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-slate-lighter">Viraj Bontha</h2>
              <div className="flex flex-wrap gap-4 text-slate text-sm">
                <span className="flex items-center">+91 6281122607</span>
                <span className="flex items-center">bonthaviraj@gmail.com</span>
                <Link href="https://linkedin.com/in/viraj-bontha" className="hover:text-highlight transition-colors">
                  linkedin.com/in/viraj-bontha
                </Link>
                <span className="flex items-center">Hyderabad, Telangana</span>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Education
              </h3>
              <div className="mb-4">
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">BITS Pilani Goa Campus</h4>
                  <span className="text-highlight font-mono">2022-2026</span>
                </div>
                <p className="text-slate">B.E. (Hons.) Electrical and Electronics Engineering — Current GPA: 8.13</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">FIITJEE JUNIOR COLLEGE Hyderabad</h4>
                  <span className="text-highlight font-mono">2022</span>
                </div>
                <p className="text-slate">
                  Telangana Board of Intermediate Education (TSBIE) (CLASS XII) — 97.6 percent
                </p>
              </div>
              <div>
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">DAV PUBLIC SCHOOL Hyderabad</h4>
                  <span className="text-highlight font-mono">2020</span>
                </div>
                <p className="text-slate">CBSE (CLASS X) — 96 percent</p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Experience
              </h3>
              <div className="mb-4">
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">Research Intern</h4>
                  <span className="text-highlight font-mono">May 2024 - Jul 2024</span>
                </div>
                <p className="text-slate mb-1">
                  CSIR - Central Electronics Engineering Research Institute (CEERI) Pilani, Rajasthan
                </p>
                <ul className="list-disc list-inside text-slate">
                  <li>Developed an optimised decimation filter for a network chip with implementation in MATLAB.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">Circuital and Electronics Intern</h4>
                  <span className="text-highlight font-mono">Oct 2023 - Jan 2024</span>
                </div>
                <p className="text-slate mb-1">Khageshvara Aviation Technology Pvt. Ltd Remote</p>
                <ul className="list-disc list-inside text-slate">
                  <li>
                    Collaborated on electronic system enhancements, optimising designs to align with company objectives
                    and improve performance.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Projects
              </h3>
              <div className="mb-4">
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">5-Stage Pipelined MIPS Processor</h4>
                  <span className="text-highlight font-mono">Feb 2025 - Mar 2025</span>
                </div>
                <ul className="list-disc list-inside text-slate">
                  <li>Designed a 5-stage pipelined MIPS processor supporting multiple instructions.</li>
                  <li>Implemented 32-bit data and address buses with 4 pipeline registers.</li>
                  <li>Developed a hazard detection unit and forwarding unit for efficient pipeline execution.</li>
                  <li>Verified functionality using a testbench with a predefined instruction sequence.</li>
                  <li>Analysed synthesis feasibility and optimised for sequential logic efficiency.</li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">SoC Verification using SystemVerilog</h4>
                  <span className="text-highlight font-mono">Dec 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside text-slate">
                  <li>
                    Developed and verified testbenches for memory verification (FIFO) and bus protocols (APB, AHB, AXI).
                  </li>
                  <li>
                    Verified interface communication protocols (SPI, UART) and sequential logic blocks (Flip-Flops).
                  </li>
                  <li>Currently enhancing expertise in functional coverage techniques.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between flex-wrap">
                  <h4 className="font-medium text-slate-lighter">
                    Digital Filter Design - Design and Implementation of Decimation Filters
                  </h4>
                  <span className="text-highlight font-mono">May 2024 - Jul 2024</span>
                </div>
                <ul className="list-disc list-inside text-slate">
                  <li>Developed an optimised decimation filter for a network chip.</li>
                  <li>
                    Researched, selected, and implemented efficient CIC, FIR Compensation, and Half-Band FIR Filters in
                    MATLAB.
                  </li>
                  <li>
                    Achieved 69 percent hardware savings and 28 percent power reduction compared to traditional
                    architectures.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Positions of Responsibility
              </h3>
              <div className="mb-4">
                <h4 className="font-medium text-slate-lighter">
                  International Programmes Collaboration Division Student Coordinator
                </h4>
                <p className="text-slate">
                  Supported student and faculty exchange programs, coordinated joint academic activities, and assisted
                  in planning international academic events.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-lighter">
                  Department of Backstage and Infrastructure Management
                </h4>
                <p className="text-slate">
                  Managed backstage operations and infrastructure for various events in my college.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Competitions and Achievements
              </h3>
              <div className="mb-4">
                <h4 className="font-medium text-slate-lighter">
                  2nd Prize – IEEE Student Chapter Paper Presentation Contest
                </h4>
                <p className="text-slate">
                  Presented research on Pseudo Random Number Generator verification. Verified the PRNG design using
                  SystemVerilog for ASIC applications.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-slate-lighter">DigiCraft - Digital Circuit Design Competition</h4>
                <p className="text-slate">
                  Excelled in Digicraft, showcasing skills in digital design and problem-solving.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-lighter">CBSE National Science Exhibition</h4>
                <p className="text-slate">Developed an automated irrigation system, earning national recognition.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold border-b border-navy-lighter pb-2 mb-4 text-slate-lighter">
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-slate-lighter">Subjects/Electives</h4>
                  <p className="text-slate">
                    Digital Design, Computer Architecture, Analog and Digital VLSI Design, Static Timing Analysis,
                    Microelectronic Circuits, Microprocessors and Interfacing, Electronic Devices, Control Systems,
                    Signals & Systems, Digital Signal Processing, Computer Programming.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-slate-lighter">Technical Skills</h4>
                  <p className="text-slate">Verilog, SystemVerilog, Cadence Virtuoso, MATLAB, C Programming, Python.</p>
                </div>
              </div>
            </section>
          </div>
        </Card3D>
      </div>
    </main>
  )
}
