"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: "Unleashing the Power of Data Visualization with Power BI",
    excerpt: "Discover how Power BI can transform your data into compelling visual stories that drive decision-making.",
    date: "May 15, 2023",
    category: "Data Visualization",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Transforming Raw Data into Business Insights with Python",
    excerpt: "Learn how to leverage Python's data analysis libraries to extract valuable insights from complex datasets.",
    date: "April 22, 2023",
    category: "Data Analysis",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Leveraging Data Analytics for Strategic Decision-Making",
    excerpt: "Explore the ways data analytics can inform and enhance your organization's strategic planning process.",
    date: "March 10, 2023",
    category: "Business Strategy",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function Blog() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge className="mb-2 self-start">{article.category}</Badge>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <motion.a 
                      href="#" 
                      className="text-primary hover:underline flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.a>
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

