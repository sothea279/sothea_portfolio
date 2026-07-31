import React from 'react'

const accentMap = {
  neon: {
    shadow: 'hover:shadow-neon/20',
    border: 'hover:border-neon',
    text: 'text-neon',
    button: 'bg-neon/10 hover:bg-neon/20 text-neon'
  },
  cyber: {
    shadow: 'hover:shadow-cyber/20',
    border: 'hover:border-cyber',
    text: 'text-cyber',
    button: 'bg-cyber/10 hover:bg-cyber/20 text-cyber'
  },
  matrix: {
    shadow: 'hover:shadow-matrix/20',
    border: 'hover:border-matrix',
    text: 'text-matrix',
    button: 'bg-matrix/10 hover:bg-matrix/20 text-matrix'
  }
}

export default function ProjectCard({ project, delay = 0 }) {
  const accent = accentMap[project.accent] || accentMap.neon

  // UX/UI Figma Prototype Card Layout with Live Figma Prototype Embed
  if (project.type === 'uxui') {
    return (
      <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="rounded-[2.5rem] border border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl"
      >
        {/* Top Header Section */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {/* Header Row: Title & Top-Right Dark Pill */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <div className="h-8 w-16 rounded-full bg-[#0c1e38] dark:bg-slate-800 shrink-0"></div>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          {/* Black Canvas Area displaying Live Figma Prototype Embed */}
          <div className="relative mt-6 w-full h-[480px] bg-black rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
            {/* Top Right Expand Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3.5 right-3.5 z-20 p-2 rounded-lg bg-slate-900/80 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm shadow-md"
              title="Open Full Figma Prototype"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </a>

            {/* Live Embedded Figma Prototype */}
            <iframe
              src={project.embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title={project.title}
            />
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-6 py-3.5 bg-slate-50/90 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          {/* Left: Figma Logo & Title */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-500 transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span className="font-semibold">{project.figmaTitle || project.title}</span>
          </a>

          {/* Right: Edited time */}
          <span>{project.editedText || 'Edited recently'}</span>
        </div>
      </div>
    )
  }

  // Standard Web Project Card Layout
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`glass-card rounded-xl overflow-hidden hover:shadow-lg ${accent.shadow} border border-transparent ${accent.border} transition-all duration-300 h-full flex flex-col`}
    >
      <div className="overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="opacity-80 text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-glass rounded-full text-xs text-gray-900 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-block text-sm font-semibold hover:underline ${accent.text}`}
        >
          View Project →
        </a>
      </div>
    </div>
  )
}
