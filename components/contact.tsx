"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react'
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      toast({
        title: result.success ? "Success!" : "Error!",
        description: result.message,
        variant: result.success ? "success" : "destructive",
      })
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-5xl">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="mailto:manar.abotaleb@example.com" className="flex items-center space-x-2 text-primary hover:underline">
                  <Mail className="w-5 h-5" />
                  <span>manar.abotaleb@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-primary hover:underline">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="https://www.linkedin.com/in/manar-abotaleb/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/manarabotaleb" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline">
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      name="phone"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

