import SectionHeading from "@/components/section-heading"
import { Card3D } from "@/components/card-3d"
import { CanvasEffect } from "@/components/canvas-effect"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 px-4 relative">
      <div className="absolute inset-0 z-0">
        <CanvasEffect className="opacity-20" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading title="Projects" number={1} subtitle="A collection of my technical work and research." />

        <div className="space-y-12 mt-12">
          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">5-Stage Pipelined MIPS Processor</h3>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    Feb 2025 - Mar 2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project Overview</h4>
                  <p className="text-slate mb-4">
                    Designed and implemented a complete 5-stage pipelined MIPS processor supporting multiple
                    instructions with hazard detection and forwarding capabilities. The processor was designed to be
                    synthesizable and optimized for performance and resource utilization.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Key Features & Implementation</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Implemented 32-bit data and address buses with 4 pipeline registers (IF/ID, ID/EX, EX/MEM,
                        MEM/WB)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Developed a hazard detection unit for stalling the pipeline when necessary
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Designed a forwarding unit for efficient pipeline execution to resolve data hazards
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Implemented support for R-type, I-type, and J-type instructions
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Verified functionality using a testbench with a predefined instruction sequence
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Analyzed synthesis feasibility and optimized for sequential logic efficiency
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Verilog</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Digital Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Computer Architecture</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Pipeline Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hazard Resolution</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Testbench Development</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">
                    SoC Verification using SystemVerilog
                  </h3>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    Dec 2024 - Present
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project Overview</h4>
                  <p className="text-slate mb-4">
                    Developing comprehensive verification environments for various SoC components using SystemVerilog,
                    focusing on memory interfaces and bus protocols. This ongoing project aims to create reusable
                    verification components and methodologies for efficient hardware verification.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Key Features & Implementation</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Developed and verified testbenches for memory verification (FIFO)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Implemented verification for bus protocols (APB, AHB, AXI)</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Verified interface communication protocols (SPI, UART)</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Tested sequential logic blocks (Flip-Flops)</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Currently enhancing expertise in functional coverage techniques
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Implementing constrained random verification methodologies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">SystemVerilog</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hardware Verification</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">SoC Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Bus Protocols</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Functional Coverage</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Assertions</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">Digital Filter Design</h3>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    May 2024 - Jul 2024
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project Overview</h4>
                  <p className="text-slate mb-4">
                    Developed an optimized decimation filter for a network chip, achieving significant hardware savings
                    and power reduction compared to traditional architectures. This project was completed during my
                    internship at CSIR-CEERI.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Key Features & Implementation</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Researched and selected efficient filter architectures</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Implemented CIC, FIR Compensation, and Half-Band FIR Filters in MATLAB
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Achieved 69% hardware savings compared to traditional architectures
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Reduced power consumption by 28%</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Documented design decisions and performance metrics</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Presented findings to senior researchers and project leads</span>
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
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          <Card3D>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Research Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">
                    Pseudo Random Number Generator Verification
                  </h3>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    Mar 2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Project Overview</h4>
                  <p className="text-slate mb-4">
                    Presented research on Pseudo Random Number Generator verification, winning 2nd Prize at the IEEE
                    Student Chapter Paper Presentation Contest. The project focused on verifying PRNG designs for ASIC
                    applications using SystemVerilog.
                  </p>

                  <h4 className="text-slate-lighter font-medium mb-3">Key Features & Implementation</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Verified the PRNG design using SystemVerilog for ASIC applications
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Implemented comprehensive test cases to validate randomness properties
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Analyzed statistical properties of the generated random numbers
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Documented verification methodology and results</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">
                        Presented findings at the IEEE Student Chapter Paper Presentation Contest
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">Won 2nd Prize for the research and presentation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-lighter font-medium mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">SystemVerilog</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hardware Verification</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">ASIC Design</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Random Number Generation</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Statistical Analysis</span>
                    <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Technical Writing</span>
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
