import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              I am a passionate Data Analyst and QA Tester with a strong focus on transforming raw data into actionable insights. 
              My expertise lies in leveraging data analysis and visualization techniques to drive informed decision-making and 
              contribute meaningfully to the field of data science.
            </p>
            <p className="text-lg leading-relaxed">
              With experience in both quality assurance and data analysis, I bring a unique perspective to problem-solving
              and process improvement. My goal is to help organizations make better decisions through data-driven insights.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="About Manar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

