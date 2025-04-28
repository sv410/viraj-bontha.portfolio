import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CanvasEffect } from "@/components/canvas-effect"
import { Card3D } from "@/components/card-3d"
import { SkillProgress } from "@/components/skill-progress"

export default function SkillsPage() {
  const technicalSkills = [
    {
      category: "Hardware Description Languages",
      skills: [
        { name: "Verilog", proficiency: 90 },
        { name: "SystemVerilog", proficiency: 85 },
      ],
    },
    {
      category: "Design Tools",
      skills: [
        { name: "Cadence Virtuoso", proficiency: 80 },
        { name: "MATLAB", proficiency: 90 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C Programming", proficiency: 85 },
        { name: "Python", proficiency: 75 },
      ],
    },
  ]

  const subjects = [
    "Digital Design",
    "Computer Architecture",
    "Analog and Digital VLSI Design",
    "Static Timing Analysis",
    "Microelectronic Circuits",
    "Microprocessors and Interfacing",
    "Electronic Devices",
    "Control Systems",
    "Signals & Systems",
    "Digital Signal Processing",
    "Computer Programming",
  ]

  const softSkills = [
    { name: "Team Collaboration", proficiency: 90 },
    { name: "Problem Solving", proficiency: 95 },
    { name: "Technical Documentation", proficiency: 85 },
    { name: "Project Management", proficiency: 80 },
    { name: "Research & Analysis", proficiency: 90 },
  ]

  return (
    <main className="min-h-screen py-16 px-4 relative">
      <div className="absolute inset-0 z-0">
        <CanvasEffect className="opacity-20" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          number={1}
          subtitle="A comprehensive overview of my technical abilities and knowledge areas."
        />

        <div className="space-y-12 mt-12">
          <Card3D>
            <Card className="bg-navy-light border-navy-lighter">
              <CardHeader>
                <CardTitle className="text-slate-lighter">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-10">
                  {technicalSkills.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                      <h3 className="font-medium text-lg text-highlight font-mono">{category.category}</h3>
                      <div className="space-y-6">
                        {category.skills.map((skill, skillIdx) => (
                          <SkillProgress
                            key={skillIdx}
                            name={skill.name}
                            percentage={skill.proficiency}
                            delay={idx * 200 + skillIdx * 100}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Card3D>

          <Card3D>
            <Card className="bg-navy-light border-navy-lighter">
              <CardHeader>
                <CardTitle className="text-slate-lighter">Academic Subjects & Electives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {subjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="bg-navy p-3 rounded-md text-center text-slate border border-navy-lighter hover:border-highlight transition-colors group"
                    >
                      <span className="group-hover:text-highlight transition-colors">{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Card3D>

          <Card3D>
            <Card className="bg-navy-light border-navy-lighter">
              <CardHeader>
                <CardTitle className="text-slate-lighter">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {softSkills.map((skill, idx) => (
                    <SkillProgress key={idx} name={skill.name} percentage={skill.proficiency} delay={idx * 150} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Card3D>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card3D>
              <Card className="bg-navy-light border-navy-lighter h-full">
                <CardHeader>
                  <CardTitle className="text-slate-lighter">Certifications & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">IEEE Student Chapter Paper Presentation - 2nd Prize</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">DigiCraft - Digital Circuit Design Competition</span>
                    </li>
                    <li className="flex">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">CBSE National Science Exhibition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Card3D>

            <Card3D>
              <Card className="bg-navy-light border-navy-lighter h-full">
                <CardHeader>
                  <CardTitle className="text-slate-lighter">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <SkillProgress name="English" percentage={95} delay={0} />
                    <SkillProgress name="Hindi" percentage={100} delay={150} />
                    <SkillProgress name="Telugu" percentage={100} delay={300} />
                  </div>
                </CardContent>
              </Card>
            </Card3D>
          </div>
        </div>
      </div>
    </main>
  )
}
