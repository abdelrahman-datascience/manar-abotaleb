"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const projects = [
  {
    title: "Sales Data Analysis",
    description: "Comprehensive analysis of sales data revealing key trends and opportunities.",
    image: "/placeholder.svg?height=300&width=400",
    date: "December 2023",
    tags: ["Data Analysis", "Visualization", "Power BI"],
    details: "This project involved a deep dive into sales data, uncovering trends that led to a 15% increase in revenue. Utilized advanced Power BI features for interactive dashboards."
  },
  {
    title: "Customer Segmentation",
    description: "Advanced clustering analysis for strategic customer targeting.",
    image: "/placeholder.svg?height=300&width=400",
    date: "November 2023",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    details: "Implemented K-means clustering to segment customers into distinct groups, enabling personalized marketing strategies that boosted engagement by 30%."
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Interactive dashboard for forecasting business metrics.",
    image: "/placeholder.svg?height=300&width=400",
    date: "October 2023",
    tags: ["Forecasting", "Tableau", "Time Series Analysis"],
    details: "Developed a real-time dashboard using Tableau, incorporating ARIMA models for accurate forecasting of key business metrics, resulting in more informed decision-making."
  },
  {
    title: "Market Basket Analysis",
    description: "Pattern discovery in customer purchasing behavior.",
    image: "/placeholder.svg?height=300&width=400",
    date: "September 2023",
    tags: ["Association Rules", "R", "Data Mining"],
    details: "Utilized the Apriori algorithm to uncover hidden patterns in customer purchases, leading to a 10% increase in cross-selling opportunities."
  },
  {
    title: "Supply Chain Optimization",
    description: "Data-driven approach to streamline supply chain operations.",
    image: "/placeholder.svg?height=300&width=400",
    date: "August 2023",
    tags: ["Optimization", "Python", "Operations Research"],
    details: "Implemented linear programming models to optimize inventory levels and distribution routes, resulting in a 20% reduction in operational costs."
  },
  {
    title: "Financial Performance Analysis",
    description: "Detailed analysis of key financial metrics and trends.",
    image: "/placeholder.svg?height=300&width=400",
    date: "July 2023",
    tags: ["Financial Analysis", "Excel", "VBA"],
    details: "Developed automated Excel models with VBA to analyze financial statements, providing insights that guided strategic decisions and improved profitability by 8%."
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="py-24">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" onClick={() => setSelectedProject(project)}>Learn More</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{selectedProject?.title}</DialogTitle>
                          <DialogDescription>{selectedProject?.details}</DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.date}</Badge>
                  </div>
                </div>
                <CardContent className="flex-grow">
                  <CardTitle className="mt-4 mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

