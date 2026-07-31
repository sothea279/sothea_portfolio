import React, { useEffect, useState } from 'react'
import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRef } from "react";

const skillCategories = [
  {
    title: 'UX/UI Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20h6" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L9 17l-4 1 1-4 10.5-10.5Z" />
      </svg>
    ),
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Flow Design', 'Responsive Design']
  },
  {
    title: 'Frontend Dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 20h8" />
      </svg>
    ),
    items: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'React', 'Next.js']
  },
  {
    title: 'Backend Dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="4" y="6" width="16" height="5" rx="2" />
        <rect x="4" y="13" width="16" height="5" rx="2" />
        <path d="M8 11v2" />
        <path d="M16 11v2" />
      </svg>
    ),
    items: ['PHP', 'Laravel', 'Java']
  },
  {
    title: 'Database',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 4C7.03 4 3 5.79 3 8v8c0 2.21 4.03 4 9 4s9-1.79 9-4V8c0-2.21-4.03-4-9-4z" />
        <path d="M3 8c0 2.21 4.03 4 9 4s9-1.79 9-4" />
      </svg>
    ),
    items: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    items: ['PgAdmin', 'GitHub', 'Swagger', 'VS Code', 'IntelliJ IDEA']
  }
]

const skillPills = [
  {
    name: 'PgAdmin',
    icon: 'https://preview.redd.it/do-you-use-pgadmin-why-v0-02a5kjvewjab1.png?width=1080&crop=smart&auto=webp&s=d15bc56f3bd9fdb6d25a8640bfc32e20987be834'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'Swagger',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg'
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
  },
  {
    name: 'IntelliJ IDEA',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }
]

const softSkills = [
  {
    title: 'Communication',
    description:
      'Clearly communicate design ideas and collaborate with developers, stakeholders, and teammates.'
  },
  {
    title: 'Teamwork & Collaboration',
    description:
      'Work effectively with cross-functional teams to deliver user-centered products.'
  },
  {
    title: 'Problem Solving',
    description:
      'Analyze user problems and create intuitive design solutions.'
  },
  {
    title: 'Creativity',
    description:
      'Generate innovative and visually appealing design concepts.'
  },
  {
    title: 'Time Management',
    description:
      'Prioritize tasks and meet project deadlines efficiently.'
  },
  {
    title: 'Adaptability',
    description:
      'Learn new tools, design trends, and technologies quickly.'
  },
  {
    title: 'Attention to Detail',
    description:
      'Ensure consistency in layouts, typography, spacing, and interactions.'
  },
  {
    title: 'Presentation Skills',
    description:
      'Present design concepts and explain design decisions with confidence.'
  }
]

export default function Home() {
  const [openSoftIndex, setOpenSoftIndex] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      }
    );
};
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div data-aos="fade-right" data-aos-duration="1200" className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="gradient-text  animate-text-gradient">Hello, I&apos;m Thach Soksothea</span>
            </h1>
            <p className="text-lg opacity-85 max-w-lg text-gray-700 dark:text-gray-300">
              I am a passionate technology student focused on web technologies and UX/UI design. I love building engaging, responsive, and user-centered digital experiences while continuously improving my skills in design and development. Feel free to explore my personal projects and see what I have created!
            </p>
            <div className="flex space-x-4">
              <a
                href="/cv2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                 className="px-6 py-3 border border-gray-300 bg-[#19335c] dark:border-glass rounded-lg  hover:shadow-lg hover:shadow-cyber/30 transition-all duration-300 text-white dark:text-white"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-glass rounded-lg hover:bg-glass hover:shadow-lg hover:shadow-cyber/30 transition-all duration-300 text-gray-900 dark:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1200" className="relative justify-self-center lg:justify-self-end w-full max-w-md">
            <div className="glass-card rounded-2xl p-1 relative z-10 overflow-hidden shadow-2xl w-full">
            <img
  src="/sothea.png"
  alt="Sothea"
  className="rounded-xl w-full h-auto object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-white via-slate-50 to-pink-50/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-pink-950/40 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,170,0.12),_transparent_35%)]"></div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1 space-y-6">
            
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm dark:border-pink-900/40 dark:bg-slate-900/70 dark:text-pink-300">
                  UI/UX Design
                </span>
                <span className="rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm dark:border-cyan-900/40 dark:bg-slate-900/70 dark:text-cyan-300">
                  Frontend Development
                </span>
                <span className="rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm dark:border-violet-900/40 dark:bg-slate-900/70 dark:text-violet-300">
                  Continuous Learning
                </span>
              </div>

                <section className="mb-16 rounded-[2rem] border border-white/60 bg-pink-50/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:bg-slate-950/40 md:p-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div data-aos="fade-right" className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="h-11 w-1.5 rounded-full bg-fuchsia-600"></span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                About me
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-800 dark:text-slate-200">
              I am currently a student at RUPP with a strong interest in technology, particularly web application development. Although I specialize in UI/UX design, I have also developed a broader understanding of both frontend and backend development. What I am good at is the ability to learn.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <p className="max-w-xl text-lg leading-8 text-slate-800 dark:text-slate-200">
              I believe that an effective UI/UX designer should understand how a design will be implemented by frontend developers and how the overall user experience connects with backend systems. This allows me to create designs that are not only visually clean and user-friendly, but also practical, functional, and realistic to build.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="max-w-3xl text-lg leading-8 text-slate-800 dark:text-slate-200">
              My goal is to design complete website experiences with smooth user flows, clear structure, and strong usability. I do not only focus on creating attractive interfaces. I also aim to help businesses improve their digital presence, provide better experiences for their users, and achieve their goals through thoughtful design.
            </p>
          </div>
        </div>
      </section>
            </div>

            
          </div>


        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <h2 className="mb-12 inline-block text-4xl font-bold tracking-tight text-slate-950 decoration-4 underline-offset-8 dark:text-white">
          <span className="bg-gradient-to-r dark:text-white  text-[#19335c] bg-clip-text text-transparent underlin decoration-fuchsia-500/80 decoration-4 underline-offset-8">
            My Projects
          </span>
        </h2>

        {/* UX/UI Design Projects */}
 <section className="py-9">
 
 
 
    <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
  <span className="h-8 w-2 rounded-full bg-fuchsia-500"></span>
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

  
  

  


        {/* Web Development Projects */}
        <div>
         <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
  <span className="h-8 w-2 rounded-full bg-fuchsia-500"></span>
  <span className="text-[#19335c] dark:text-white">
    Web Development <span className="text-[#f8c92d]">Projects</span>
  </span>
</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.type === 'web').map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
    <span className="h-8 w-2 rounded-full bg-fuchsia-500"></span>
  <h2 className="text-4xl font-bold text-[#19335c] dark:text-white">
    
    Skills - <span className="text-[#f8c92d]">Cores</span>
  </h2>
</div>
          <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
            These are the core skill categories I work with most often, combining design, frontend, backend, database, and tools expertise to build polished digital experiences.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-2 sm:px-4 horizontal-scroll">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="min-w-[240px] flex-shrink-0 rounded-[1.5rem] bg-fuchsia-200/90 p-3 shadow-[8px_8px_0_rgba(148,90,255,0.14)] transition duration-300 ease-out hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(148,90,255,0.22)] hover:shadow-2xl cursor-pointer scroll-snap-child"
              >
                <div className="rounded-3xl bg-white p-2.5 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-slate-950">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-lg">
                      {category.icon}
                    </span>
                    <h3 className="text-base font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-1 text-left text-sm font-medium text-slate-700">
                    {category.items.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 py-1.5 px-3 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-full bg-slate-100/80 p-3 dark:bg-slate-900/30">
          <div className="auto-scroll-pills flex items-center gap-3">
            {skillPills.concat(skillPills).map((pill, index) => (
              <div
                key={`${pill.name}-${index}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:bg-slate-950 dark:shadow-black/10"
              >
               <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 p-2 dark:bg-slate-800">
  <img
    src={pill.icon}
    alt={pill.name}
    className="h-6 w-6 object-contain"
  />
</span>
                <span className="text-sm font-semibold text-slate-950 dark:text-slate-100">{pill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold  text-[#19335c] tracking-tight  dark:text-white">Soft Skills</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
              Strong communication, teamwork, creativity, and problem-solving skills.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-50/90 p-2 shadow-[0_30px_80px_rgba(148,90,255,0.12)] ring-1 ring-slate-200/70 dark:bg-slate-900/70 dark:ring-slate-700/70 dark:shadow-black/30">
            <div className="rounded-[1.75rem] bg-[#f8f0ff] p-6 md:p-8 dark:bg-slate-800/80">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/90">
                {softSkills.map((skill, index) => {
                  const isOpen = openSoftIndex === index
                  return (
                    <div
                      key={skill.title}
                      className={`overflow-hidden ${index < softSkills.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenSoftIndex(isOpen ? null : index)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left text-slate-900 transition-colors dark:text-slate-100 ${isOpen ? 'bg-slate-100 dark:bg-slate-800/80' : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                      >
                        <h3 className="text-base font-semibold">{skill.title}</h3>
                        <span className={`inline-flex h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full text-slate-900 dark:text-slate-100">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="mx-6 mb-4 rounded-[1rem] bg-slate-50 p-4 text-sm leading-6 text-slate-700 shadow-sm dark:bg-slate-800/80 dark:text-slate-300">
                          {skill.description}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Contact Section */}
<section id="contact" className="py-20">
  <div className="max-w-4xl mx-auto">
    {/* Header */}
    <div className="mb-10 text-left">
      <h2 className="text-4xl font-extrabold text-[#19335c] dark:text-white tracking-tight">
        Send Me a Message
      </h2>
    </div>

    {/* Card */}
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-900/80 md:p-12">

      <div className="space-y-6">

        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
              Your Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-400/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
              Your Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-400/20"
            />
          </div>

        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
            Message
          </label>

          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help you?"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-400/20"
          />
        </div>

        {/* Button */}
        <div className="pt-2">
          <a
            href={`mailto:tso92099@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
              name
            )}&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#19335c] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#152e52] hover:shadow-lg dark:bg-[#19335c] dark:text-white dark:hover:bg-cyan-400"
          >
            <span>Send Message</span>

            <svg
              className="h-4 w-4 rotate-45 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}
