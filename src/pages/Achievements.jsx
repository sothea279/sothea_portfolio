import React, { useState } from 'react'

export default function Achievements() {
  const [showCertificate, setShowCertificate] = useState(false)

  const achievements = [
    {
      title: 'ISTAD Scholarship',
      description:
        'Passed scholarship short courses at ISTAD and improved my technical skills in software development.'
    },
    {
      title: 'UX/UI Design Skills',
      description:
        'Experienced in designing responsive web and mobile interfaces using Figma, wireframing, prototyping, and design systems.'
    },
    {
      title: 'Web Development Projects',
      description:
        'Built web applications using React, Tailwind CSS, Node.js, and database technologies.'
    },
    {
      title: 'Final Year Computer Science Student',
      description:
        'Currently studying Computer Science and continuously improving my knowledge in technology and software engineering.'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-24">

      {/* Heading */}
      <section>
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-[#19335c] dark:text-white">
            Certifications &
            <span className="text-[#f8c92d]"> Achievements</span>
          </span>
        </h1>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border bg-white p-8 shadow-xl dark:bg-slate-900"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {item.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate */}
      <section className="mt-20">
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid lg:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex justify-center items-center">
            <iframe
              src="/AWS_Academy.pdf"
              title="AWS Certificate"
              className="w-full h-[500px] rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">

            <div>
              <span className="text-sm font-semibold text-cyan-500">
                AWS Academy
              </span>

              <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                Cloud Foundations
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                Successfully completed AWS Academy Cloud Foundations
                training and earned the official AWS Academy Graduate
                badge.
              </p>

              <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                <p>📅 Issued: January 3, 2026</p>
                <p>⏱ Duration: 20 Hours</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button
                onClick={() => setShowCertificate(true)}
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
              </button>

              <a
                href="https://www.credly.com/go/ToGIyyD7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Credly
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">

          <div className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              ✕
            </button>

            {/* PDF */}
            <iframe
              src="/AWS_Academy.pdf"
              title="AWS Certificate"
              className="w-full h-full"
            />

          </div>
        </div>
      )}

    </div>
  )
}