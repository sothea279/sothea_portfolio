import React from 'react'

export default function SkillCard({ skill }) {
  return (
    <div class="glass-card rounded-xl p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-glass rounded-full overflow-hidden">
        <img src={skill.image} alt={skill.name} class="w-10 h-10 object-contain rounded-lg" />
      </div>
      <h3 class="font-bold text-gray-900 dark:text-white transition-colors">{skill.name}</h3>
      <p class="text-sm opacity-70 text-gray-700 dark:text-slate-400">{skill.category}</p>
    </div>
  )
}
