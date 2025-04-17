
import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Rishabh Bharat Gada
      </motion.h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Full Stack Developer with 6 years of experience in designing scalable, cloud-native apps using React, Java, Spring Boot, and AWS. Passionate about clean code and modern UI/UX.
        </p>
      </section>
    </main>
  )
}

export default App
