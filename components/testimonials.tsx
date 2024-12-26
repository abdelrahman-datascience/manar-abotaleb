"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Manar consistently demonstrates exceptional analytical skills and a passion for data-driven decision-making.",
    author: "Ahmed Hany",
    title: "Mentor"
  },
  {
    quote: "Her attention to detail and ability to present insights visually is impressive.",
    author: "Nada Shabann",
    title: "Project Lead"
  },
  {
    quote: "Manar's expertise in data analysis has significantly improved our business processes.",
    author: "Sarah Johnson",
    title: "CEO, TechInnovate"
  },
  {
    quote: "Working with Manar has been a game-changer for our data visualization needs.",
    author: "Michael Chen",
    title: "Data Science Manager"
  },
  {
    quote: "Manar's problem-solving skills and technical knowledge are truly outstanding.",
    author: "Emily Rodriguez",
    title: "Senior Data Analyst"
  },
  {
    quote: "Her ability to translate complex data into actionable insights is remarkable.",
    author: "David Lee",
    title: "Marketing Director"
  },
  {
    quote: "Manar's contributions have been invaluable to our team's success.",
    author: "Lisa Thompson",
    title: "Product Manager"
  }
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <section className="py-24">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What People Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 pl-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <p className="text-lg mb-4">{testimonial.quote}</p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {scrollSnaps.map((_, index) => (
              <Button
                key={index}
                variant={index === selectedIndex ? "default" : "outline"}
                size="icon"
                onClick={() => scrollTo(index)}
                className="rounded-full w-3 h-3 p-0"
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

