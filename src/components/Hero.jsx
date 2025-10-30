const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4">
              Port<span className="text-blue-600">Folio</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-4">
              Afrizal Ardiansyah Sidiq
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6">
              I'm a <span className="text-blue-600 font-semibold">Fresh Graduate</span>,{' '}
              <span className="text-blue-600 font-semibold">Web Developer</span>,{' '}
              <span className="text-blue-600 font-semibold">Content Creator</span>
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Saya adalah fresh graduate S1 Informatika STMIK Kalirejo tahun 2025 dengan minat di web development,
              Microsoft Office, dan pembuatan konten digital. Saya terbuka untuk peluang kerja di bidang IT,
              administrasi, maupun digital, sambil terus mengembangkan keterampilan dan pengalaman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/assets/AFRIZAL-ARDIANSYAH-CV.pdf"
                download="AFRIZAL-ARDIANSYAH-CV.pdf"
                className="bg-blue-600 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center text-sm sm:text-base"
              >
                Unduh CV
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-4 sm:px-6 lg:px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
              <a
                href="https://github.com/afrzzz"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/afrizal-ardiansyah-sidiq/"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@afrzzzitgenz"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mx-auto bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center">
                <img
                  src="/assets/img/profile/profile-2.webp"
                  alt="Afrizal Ardiansyah"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-72 xl:h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
