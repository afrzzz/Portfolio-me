const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Rumah Sakit Multi Fungsi',
      category: 'web',
      description: 'Website rumah sakit multi fungsi yang menyediakan informasi lengkap tentang layanan kesehatan dan fasilitas medis, Website ini juga terintegrasi dengan sistem manajemen pasien untuk kemudahan akses data medis.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'FiveM'],
      github: 'https://github.com/afrzzz/CardPasienFiveM',
      demo: 'https://rs-kisahtanahair.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Persentasi Web Interaktif',
      category: 'web',
      description: 'Website presentasi interaktif untuk menampilkan konten dan informasi dengan desain yang menarik.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/afrzzz/CodePersentasiWeb',
      demo: 'https://code-persentasi-afrzzz.vercel.app/',
      featured: false
    },
    {
      id: 3,
      title: 'Portfolio Pribadi',
      category: 'web',
      description: 'Website portfolio pribadi yang menampilkan karya, skill, dan pengalaman dengan desain modern.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/afrzzz/Portfolio-me',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Ular Tangga Pasutri',
      category: 'game',
      description: 'Game ular tangga pasutri yang menyenangkan untuk bermain bersama pasangan dengan fitur multiplayer.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/afrzzz/ular-tangga-pasutri',
      demo: 'https://ular-tangga-pasutri.vercel.app/',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan selama masa studi dan pengembangan keterampilan.
            Setiap proyek mencerminkan kemampuan dan passion saya di bidang teknologi dan digital.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group">
                <div className="text-4xl sm:text-6xl text-blue-300">
                  {project.category === 'web' && '💻'}
                  {project.category === 'content' && '📱'}
                  {project.category === 'design' && '🎨'}
                  {project.category === 'data' && '📊'}
                  {project.category === 'game' && '🎮'}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="View Demo"
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Selalu Update
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Tertarik untuk melihat lebih banyak proyek saya?
          </p>
          <a
            href="https://github.com/afrzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Kunjungi GitHub Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
