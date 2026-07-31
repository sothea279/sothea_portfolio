import React, { useEffect, useState } from 'react'
import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : selectedCategory === 'UX/UI'
    ? projects.filter(p => p.type === 'uxui')
    : projects.filter(p => p.type === 'web')

  const uxuiProjects = filteredProjects.filter(p => p.type === 'uxui')
  const webProjects = filteredProjects.filter(p => p.type === 'web')

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      {/* Header Section */}
      <section className="pt-12 pb-12 text-center">
        <div data-aos="fade-down" className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-[#19335c] dark:text-white">
              Featured Projects
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore my work ranging from interactive UX/UI Figma prototypes to responsive web application frontends.
          </p>
        </div>

        {/* Category Filters */}
        <div data-aos="fade-up" data-aos-delay="150" className="mt-8 flex justify-center gap-3">
          {['All', 'UX/UI', 'Web Development'].map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-white/70 text-slate-700 hover:bg-white dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </section>

      {/* UX/UI Projects Section */}
       
 <section className="py-9">
 

   <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
  {/* <span className="h-8 w-2 rounded-full bg-fuchsia-500"></span> */}
  <span className="text-[#19335c] dark:text-white">
    UX/UI<span className="text-[#f8c92d]"> Design</span>
  </span>
</h3>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* ABA Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
        {/* ABA Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
      <div className=" rounded-3xl overflow-hidden border shadow-xl">

      {/* Header */}
      <div className="p-8 relative border-b border-gray-800">

        <h3 className="text-4xl font-bold mb-5 text-black dark:text-white ">
          ABA App
        </h3>

        <p className=" text-black dark:text-white text-lg leading-8 max-w-lg">
          An improved user interface and experience prototype for the ABA banking application,
          streamlining financial transactions.
        </p>


       

      </div>


      {/* Figma Preview */}
      <div className="relative bg-black h-[480px]">

        {/* Expand Button */}
        <button className="absolute right-5 top-5 bg-white text-black w-9 h-9 rounded-lg z-10">
          ↗
        </button>


        <iframe
          src="https://embed.figma.com/proto/mZ3xF0M8Ga4JD26ZClLhwP/Final-ABA-Project?node-id=259-1765&starting-point-node-id=259%3A1765&scaling=scale-down&content-scaling=fixed&embed-host=my-ui"
          className="w-full h-full"
          allowFullScreen
        />


        {/* Bottom Figma Controls */}
        

      </div>


      {/* Footer */}
    


    </div>

    </div>

    </div>

    {/* Zando Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
        <div className="rounded-3xl overflow-hidden border shadow-xl">
        {/* ABA Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
      <div className=" rounded-3xl overflow-hidden border shadow-xl">

      {/* Header */}
      <div className="p-8 relative border-b border-gray-800">

        <h3 className="text-4xl font-bold mb-5 text-black dark:text-white ">
         Zando App
        </h3>

        <p className=" text-black dark:text-white text-lg leading-8 max-w-lg">
         A comprehensive UX/UI redesign prototype for the Zando mobile app, focusing on modern aesthetics and user-friendly navigation.
        </p>


        

      </div>


      {/* Figma Preview */}
      <div className="relative bg-black h-[480px]">

        {/* Expand Button */}
        <button className="absolute right-5 top-5 bg-white text-black w-9 h-9 rounded-lg z-10">
          ↗
        </button>


        <iframe
  src="https://embed.figma.com/proto/NiKo0Ij2ptMsSze3INaY7g/Zando-UX-UI?node-id=3454-288&page-id=3343%3A24&starting-point-node-id=3454%3A288&scaling=scale-down&content-scaling=fixed&embed-host=share"
  className="w-full h-full"
  allowFullScreen
/>


        {/* Bottom Figma Controls */}
        

      </div>


      {/* Footer */}
    


    </div>

    </div>

    </div>

    </div>

    {/* Martify Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
        <div className="rounded-3xl overflow-hidden border shadow-xl">
        {/* ABA Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
      <div className=" rounded-3xl overflow-hidden border shadow-xl">

      {/* Header */}
      <div className="p-8 relative border-b border-gray-800">

        <h3 className="text-4xl font-bold mb-5 text-black dark:text-white ">
         E-commerce Website
        </h3>

        <p className=" text-black dark:text-white text-lg leading-8 max-w-lg">
          A sleek and user-friendly e-commerce website prototype designed to provide a seamless shopping experience, featuring intuitive navigation and a modern aesthetic.
        </p>


        

      </div>


      {/* Figma Preview */}
      <div className="relative bg-black h-[480px]">

        {/* Expand Button */}
        <button className="absolute right-5 top-5 bg-white text-black w-9 h-9 rounded-lg z-10">
          ↗
        </button>


      <iframe
  src="https://embed.figma.com/proto/PE1oyhXUePNPjvnQwfkYxq/Final-project?node-id=511-4689&page-id=0%3A1&starting-point-node-id=511%3A4689&scaling=min-zoom&content-scaling=fixed&embed-host=share"
  className="w-full h-full"
  allowFullScreen
/>


        {/* Bottom Figma Controls */}
        

      </div>


      {/* Footer */}
    


    </div>

    </div>

    </div>

    </div>


      {/* foodgo */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
        <div className="rounded-3xl overflow-hidden border shadow-xl">
        {/* ABA Card */}
    <div className="rounded-3xl overflow-hidden border shadow-xl">
      <div className=" rounded-3xl overflow-hidden border shadow-xl">

      {/* Header */}
      <div className="p-8 relative border-b border-gray-800">

        <h3 className="text-4xl font-bold mb-5 text-black dark:text-white ">
        Foogo
        </h3>

        <p className=" text-black dark:text-white text-lg leading-8 max-w-lg">
          A sleek and user-friendly e-commerce website prototype designed to provide a seamless shopping experience, featuring intuitive navigation and a modern aesthetic.
        </p>


        

      </div>


      {/* Figma Preview */}
      <div className="relative bg-black h-[480px]">

        {/* Expand Button */}
        <button className="absolute right-5 top-5 bg-white text-black w-9 h-9 rounded-lg z-10">
          ↗
        </button>


      <iframe
  src="https://embed.figma.com/proto/97xzVg8wPet1uZksdTSdRb/Food-order-mobile-app?node-id=2-2&page-id=1%3A2&starting-point-node-id=36%3A1399&scaling=scale-down&content-scaling=fixed&embed-host=share"
  className="w-full h-full"
  allowFullScreen
/>

        {/* Bottom Figma Controls */}
        

      </div>


      {/* Footer */}
    


    </div>

    </div>

    </div>

    </div>


     

  </div>
</section>

  
  

      {/* Web Development Projects Section */}
      {webProjects.length > 0 && (
        <section className="py-8">
           <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
  {/* <span className="h-8 w-2 rounded-full bg-fuchsia-500"></span> */}
  <span className="text-[#19335c] dark:text-white">
   Web Development <span className="text-[#f8c92d]"> Projects</span>
  </span>
</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 100} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
