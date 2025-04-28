import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ContactCard from "@/components/contact-card"
import { SpotlightEffect } from "@/components/spotlight-effect"
import { BentoGrid, BentoItem } from "@/components/bento-grid"
import { Card3D } from "@/components/card-3d"
import { CanvasEffect } from "@/components/canvas-effect"
import { RotatingGlobe } from "@/components/rotating-globe"
import { ProfileImage } from "@/components/profile-image"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Spotlight Effect */}
      <SpotlightEffect className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 z-0">
          <CanvasEffect />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="order-1 md:order-2 mb-8 md:mb-0 profile-image-container">
              <div className="profile-image-glow"></div>
              <ProfileImage src="/images/profile.jpg" alt="Viraj Bontha" size={320} />
            </div>

            {/* Content */}
            <div className="order-2 md:order-1 max-w-2xl">
              <p className="text-highlight font-mono mb-5">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-lightest mb-4 tracking-tight">Viraj Bontha.</h1>
              <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6 tracking-tight">
                I build digital systems.
              </h2>
              <p className="text-slate text-lg max-w-xl mb-8">
                I'm an Electrical and Electronics Engineering student at BITS Pilani Goa Campus specializing in digital
                design, VLSI, and computer architecture. Currently focused on developing efficient digital systems and
                hardware verification.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
                  <Link href="/projects">
                    Check out my projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="text-slate hover:text-highlight hover:bg-navy-light">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SpotlightEffect>

      {/* About Section with Bento Grid */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title="About Me" number={1} subtitle="Here's a quick summary of who I am and what I do." />

          <BentoGrid className="mt-12">
            <BentoItem spanTwo className="min-h-[200px]">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">Background</h3>
                  <p className="text-slate">
                    I'm an Electrical and Electronics Engineering student at BITS Pilani Goa Campus with a strong focus
                    on digital design, VLSI, and computer architecture. My academic journey has equipped me with
                    expertise in Verilog, SystemVerilog, MATLAB, and various digital design tools.
                  </p>
                </div>
                <div className="mt-4 text-highlight font-mono text-sm">Current GPA: 8.13/10</div>
              </div>
            </BentoItem>

            <BentoItem className="min-h-[200px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">Education</h3>
                  <p className="text-slate">BITS Pilani Goa Campus</p>
                  <p className="text-slate-light text-sm">B.E. (Hons.) Electrical and Electronics Engineering</p>
                </div>
                <p className="text-highlight font-mono text-sm">2022-2026</p>
              </div>
            </BentoItem>

            <BentoItem className="flex items-center justify-center min-h-[200px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <RotatingGlobe size={200} />
              </div>
            </BentoItem>

            <BentoItem className="min-h-[200px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">Expertise</h3>
                  <ul className="space-y-1 text-slate">
                    <li>• Digital Design</li>
                    <li>• Hardware Verification</li>
                    <li>• VLSI Design</li>
                    <li>• Signal Processing</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Link
                    href="/skills"
                    className="text-highlight text-sm font-mono inline-flex items-center hover:underline"
                  >
                    View all skills <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </BentoItem>

            <BentoItem className="min-h-[200px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">Achievements</h3>
                  <ul className="space-y-1 text-slate">
                    <li>• 2nd Prize – IEEE Paper Presentation</li>
                    <li>• DigiCraft Competition Excellence</li>
                    <li>• CBSE National Science Exhibition</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Link
                    href="/resume"
                    className="text-highlight text-sm font-mono inline-flex items-center hover:underline"
                  >
                    See resume <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </BentoItem>

            <BentoItem spanTwo className="min-h-[200px]">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">Current Focus</h3>
                  <p className="text-slate">
                    Through internships at CSIR-CEERI and Khageshvara Aviation Technology, I've gained practical
                    experience in filter design and electronic system optimization. I'm passionate about developing
                    efficient digital systems and exploring innovative solutions in hardware design.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/experience"
                    className="text-highlight text-sm font-mono inline-flex items-center hover:underline"
                  >
                    View experience <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>
      </section>

      {/* Experience Section with 3D Cards */}
      <section className="py-20 bg-navy-dark px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title="Work Experience" number={2} subtitle="My professional journey and internships." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-lighter">Research Intern</h3>
                    <p className="text-highlight font-mono text-sm">CSIR - CEERI</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                      May - Jul 2024
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-slate">
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>Developed an optimised decimation filter for a network chip with implementation in MATLAB.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>
                      Achieved 69% hardware savings and 28% power reduction compared to traditional architectures.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>Researched and implemented efficient CIC, FIR Compensation, and Half-Band FIR Filters.</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">MATLAB</span>
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">DSP</span>
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Filter Design</span>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-lighter">Circuital and Electronics Intern</h3>
                    <p className="text-highlight font-mono text-sm">Khageshvara Aviation Technology</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                      Oct 2023 - Jan 2024
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-slate">
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>
                      Collaborated on electronic system enhancements, optimising designs to align with company
                      objectives.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>
                      Assisted in troubleshooting and debugging electronic circuits for aviation applications.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-highlight mr-2">▹</span>
                    <span>Participated in design reviews and provided input on circuit optimizations.</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Circuit Design</span>
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Electronics</span>
                  <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Aviation</span>
                </div>
              </div>
            </Card3D>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
              <Link href="/experience">
                View All Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section with Canvas Effect */}
      <section className="py-20 px-4 relative overflow-hidden">
        <CanvasEffect className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <SectionHeading title="Featured Projects" number={3} subtitle="Some of the projects I've worked on." />

          <div className="space-y-12 mt-12 max-w-4xl mx-auto">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">5-Stage Pipelined MIPS Processor</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    Feb - Mar 2025
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-slate">
                  Designed and implemented a complete 5-stage pipelined MIPS processor supporting multiple instructions
                  with hazard detection and forwarding capabilities.
                </p>
              </div>

              <ul className="space-y-2 text-slate mb-6">
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Implemented 32-bit data and address buses with 4 pipeline registers</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Developed a hazard detection unit for stalling the pipeline when necessary</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Designed a forwarding unit for efficient pipeline execution</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Verilog</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Digital Design</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Computer Architecture</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Pipeline Design</span>
              </div>

              <div>
                <Link
                  href="/projects"
                  className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">
                    SoC Verification using SystemVerilog
                  </h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    Dec 2024 - Present
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-slate">
                  Developing comprehensive verification environments for various SoC components using SystemVerilog,
                  focusing on memory interfaces and bus protocols.
                </p>
              </div>

              <ul className="space-y-2 text-slate mb-6">
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Developed and verified testbenches for memory verification (FIFO)</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Implemented verification for bus protocols (APB, AHB, AXI)</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Verified interface communication protocols (SPI, UART)</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">SystemVerilog</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hardware Verification</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">SoC Design</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Bus Protocols</span>
              </div>

              <div>
                <Link
                  href="/projects"
                  className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <span className="text-highlight font-mono text-sm mr-2">Featured Project</span>
                    <div className="h-px w-20 bg-navy-lighter"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-lighter mt-2">Digital Filter Design</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-navy-lighter text-highlight text-xs px-2 py-1 rounded font-mono">
                    May - Jul 2024
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-slate">
                  Developed an optimized decimation filter for a network chip, achieving significant hardware savings
                  and power reduction compared to traditional architectures.
                </p>
              </div>

              <ul className="space-y-2 text-slate mb-6">
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Researched and selected efficient filter architectures</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Implemented CIC, FIR Compensation, and Half-Band FIR Filters in MATLAB</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Achieved 69% hardware savings and 28% power reduction</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">MATLAB</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Digital Signal Processing</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Filter Design</span>
                <span className="text-xs bg-navy px-2 py-1 rounded text-slate-light">Hardware Optimization</span>
              </div>

              <div>
                <Link
                  href="/projects"
                  className="text-highlight font-mono text-sm inline-flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Approaches Section with Canvas Effect */}
      <section className="py-20 bg-navy-dark px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CanvasEffect className="opacity-20" />
        </div>
        <div className="container mx-auto relative z-10">
          <SectionHeading title="My Approach" number={4} subtitle="How I tackle problems and design solutions." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex items-center mb-4">
                  <div className="number-badge">01</div>
                  <h3 className="text-xl font-semibold text-slate-lighter">Research & Analysis</h3>
                </div>
                <p className="text-slate">
                  I begin by thoroughly researching the problem domain and analyzing existing solutions. This helps me
                  understand the constraints, requirements, and potential optimization opportunities.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-light">Thoroughness</span>
                      <span className="text-xs text-highlight">95%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex items-center mb-4">
                  <div className="number-badge">02</div>
                  <h3 className="text-xl font-semibold text-slate-lighter">Design & Architecture</h3>
                </div>
                <p className="text-slate">
                  I create detailed designs and architectures that balance performance, power efficiency, and hardware
                  resources. I focus on modularity and reusability to ensure maintainable solutions.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-light">Efficiency</span>
                      <span className="text-xs text-highlight">90%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex items-center mb-4">
                  <div className="number-badge">03</div>
                  <h3 className="text-xl font-semibold text-slate-lighter">Implementation</h3>
                </div>
                <p className="text-slate">
                  I implement solutions using industry-standard tools and languages like Verilog, SystemVerilog, and
                  MATLAB. I follow best practices for coding style, documentation, and version control.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-light">Quality</span>
                      <span className="text-xs text-highlight">92%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter h-full">
                <div className="flex items-center mb-4">
                  <div className="number-badge">04</div>
                  <h3 className="text-xl font-semibold text-slate-lighter">Verification & Optimization</h3>
                </div>
                <p className="text-slate">
                  I rigorously verify my designs using comprehensive testbenches and simulation tools. I then optimize
                  for performance, power, and area based on the specific requirements.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-light">Thoroughness</span>
                      <span className="text-xs text-highlight">94%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading
            title="Get In Touch"
            number={5}
            subtitle="Feel free to reach out if you'd like to connect or discuss opportunities."
            className="text-center"
          />

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-12">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              value="bonthaviraj@gmail.com"
              href="mailto:bonthaviraj@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              value="+91 6281122607"
              href="tel:+916281122607"
            />
            <ContactCard
              icon={<Linkedin className="h-6 w-6" />}
              title="LinkedIn"
              value="linkedin.com/in/viraj-bontha"
              href="https://linkedin.com/in/viraj-bontha"
            />
          </div>

          <div className="text-center mt-16">
            <div className="inline-block bg-navy-light p-8 rounded-lg border border-navy-lighter">
              <h3 className="text-2xl font-semibold text-slate-lighter mb-4">Let's Work Together</h3>
              <p className="text-slate mb-6 max-w-lg">
                Whether you're looking for a collaborator on a project or just want to say hello, I'd love to hear from
                you. My inbox is always open!
              </p>
              <Button asChild className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
                <a href="mailto:bonthaviraj@gmail.com">
                  Say Hello <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
