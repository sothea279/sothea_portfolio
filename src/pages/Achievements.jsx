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
        <div className="grid sm:grid-cols-2 gap-8">
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
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid md:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
            <object
              data="/AWS_Academy.pdf"
              type="application/pdf"
              className="w-full h-[500px] rounded-xl"
            >
              {/* Fallback when browser blocks PDF embed */}
              <div className="flex flex-col items-center justify-center h-[500px] gap-4 text-slate-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-medium">PDF preview blocked by browser</p>
                <a
                  href="/AWS_Academy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-[#19335c] text-white text-sm hover:bg-[#254a83] transition"
                >
                  Open Certificate PDF
                </a>
              </div>
            </object>
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

              <a
                href="/AWS_Academy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
              </a>

              <a
                href="https://www.credly.com/go/ToGIyyD7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                Credly
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Certificate 2 */}
      <section className="mt-10">
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid md:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
            <object
              data="/AWS_CloudArchitecting.pdf"
              type="application/pdf"
              className="w-full h-[500px] rounded-xl"
            >
              {/* Fallback when browser blocks PDF embed */}
              <div className="flex flex-col items-center justify-center h-[500px] gap-4 text-slate-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-medium">PDF preview blocked by browser</p>
                <a
                  href="/AWS_CloudArchitecting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-[#19335c] text-white text-sm hover:bg-[#254a83] transition"
                >
                  Open Certificate PDF
                </a>
              </div>
            </object>
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">

            <div>
              <span className="text-sm font-semibold text-cyan-500">
                AWS Academy
              </span>

              <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                Cloud Architecting
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                Successfully completed AWS Academy Cloud Architecting
                training and earned the official AWS Academy Graduate
                badge.
              </p>

              <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                <p>📅 Issued: January 19, 2026</p>
                <p>⏱ Duration: 60 Hours</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href="/AWS_CloudArchitecting.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
              </a>
              <a
                href="https://www.credly.com/go/dEp25jOY"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                Credly
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Certificate 3 */}
      <section className="mt-10">
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid md:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
            <object
              data="/AWS_training.pdf"
              type="application/pdf"
              className="w-full h-[500px] rounded-xl"
            >
              {/* Fallback when browser blocks PDF embed */}
              <div className="flex flex-col items-center justify-center h-[500px] gap-4 text-slate-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-medium">PDF preview blocked by browser</p>
                <a
                  href="/AWS_training.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-[#19335c] text-white text-sm hover:bg-[#254a83] transition"
                >
                  Open Certificate PDF
                </a>
              </div>
            </object>
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-cyan-500">
                AWS Training
              </span>

              <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                AWS Training Certificate
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                Successfully completed AWS training program.
              </p>

              <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                <p>📅 Issued: July 30, 2026</p>
                <p>⏱ Duration: TBD</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href="/AWS_training.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate 4 */}
      <section className="mt-10">
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid md:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
            <img
              src="/storage.jpg"
              alt="Storage Certificate"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-cyan-500">
                Technical Training
              </span>

              <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                Storage Certificate
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                Successfully completed professional training in Storage technologies.
              </p>

              <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                <p>📅 Issued: 2026</p>
                <p>⏱ Duration: TBD</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href="/storage.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate 5 */}
      <section className="mt-10">
        <div className="rounded-3xl overflow-hidden border bg-white dark:bg-slate-900 shadow-xl grid md:grid-cols-2">

          {/* Preview */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 flex flex-col justify-center items-center gap-4">
            <img
              src="/datacom.jpg"
              alt="Datacom Certificate"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-cyan-500">
                Technical Training
              </span>

              <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                Datacom Certificate
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                Successfully completed professional training in Datacom and networking technologies.
              </p>

              <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                <p>📅 Issued: 2026</p>
                <p>⏱ Duration: TBD</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href="/datacom.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#19335c] text-white hover:bg-[#254a83] transition"
              >
                View Certificate
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
            <object
              data="/AWS_Academy.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500 dark:text-slate-400">
                <p className="text-sm font-medium">PDF preview blocked by browser</p>
                <a
                  href="/AWS_Academy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-[#19335c] text-white text-sm hover:bg-[#254a83] transition"
                >
                  Open Certificate PDF
                </a>
              </div>
            </object>

          </div>
        </div>
      )}

    </div>
  )
}