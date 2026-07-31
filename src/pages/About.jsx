import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const progressSkills = [
    { name: 'WordPress', percentage: '92%' },
    { name: 'HTML/CSS/Javascript', percentage: '90%' },
    { name: 'PHP/Laravel', percentage: '80%' },
    { name: 'Vue/Nuxt', percentage: '85%' },
    { name: 'Nestjs', percentage: '70%' },
  ]

  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
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

      <section className="glass-card rounded-2xl p-8 md:p-12 mb-12">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <span className="w-16 h-1.5 bg-rose-500 rounded"></span>
          <span className="w-8 h-1 bg-rose-500 rounded mt-1"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="capitalize text-2xl font-semibold tracking-tight text-slate-950 dark:text-white mb-4">
                I'm Thach Soksothea and I'm a{' '}
                <span className="text-rose-500">UX/UI Designer and Frontend Developer</span>
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-8 mb-6">
                I am a dedicated and innovative FullStack Developer passionate about creating impactful digital
                experiences. With a keen eye for detail and a commitment to excellence, I specialize in designing and developing
                solutions that combine creativity with functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-800 dark:text-gray-200 border-t border-glass pt-6">
              <ul className="space-y-3">
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Birthday :</span> 19 June 2005
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Website :</span> https://website.com
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Degree :</span> Bsc. Computer Science
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Location :</span> Sen Sok, Phnom Penh
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Email :</span> tso92099@gmail.com
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Phone No :</span> +855 98576921
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Employment :</span> Remote
                </li>
                <li className="py-1.5 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold">Freelance :</span> Available
                </li>
              </ul>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 rounded-full text-white font-bold transition-all shadow-lg hover:shadow-rose-600/30">
                Download CV
              </button>
              <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 rounded-full text-white font-bold transition-all shadow-lg hover:shadow-rose-600/30">
                Hire Me
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Expertise Stack</h4>
            {progressSkills.map((ps, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between font-semibold text-gray-900 dark:text-gray-200">
                  <span>{ps.name}</span>
                  <span>{ps.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full transition-all duration-1000"
                    style={{ width: ps.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
