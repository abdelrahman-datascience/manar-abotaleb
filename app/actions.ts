'use server'

import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    
    const data = `${name},${email},${phone},${message}\n`
    const filePath = join(process.cwd(), 'contacts.csv')
    
    await writeFile(filePath, data, { flag: 'a' })
    
    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error saving contact form data:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}

