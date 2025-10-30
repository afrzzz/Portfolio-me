const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Card */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-md mx-auto lg:mx-0">
              <div className="mb-6">
                <img
                  src="/assets/img/profile/my-profile.webp"
                  alt="Profile Image"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">Afrizal Ardiansyah Sidiq</h3>
              <p className="text-blue-600 font-semibold mb-4 text-xs sm:text-sm lg:text-base">Fresh Graduate Informatika</p>

              <div className="space-y-3">
                <a
                  href="mailto:afrizalardiansyah2001@gmail.com"
                  className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="break-all">afrizalardiansyah2001@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/6281384485220"
                  className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  +62 813-8448-5220
                </a>
                <div className="flex items-center justify-center lg:justify-start text-gray-600 text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Kalirejo, Lampung Tengah, Lampung, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
                About Me
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6">
                Fresh Graduate dengan Minat di IT & Digital
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Saya adalah fresh graduate S1 Informatika STMIK Kalirejo tahun 2025 dengan minat di bidang{' '}
                <span className="font-semibold text-blue-600">Web Development</span>,{' '}
                <span className="font-semibold text-blue-600">Microsoft Office</span>, dan{' '}
                <span className="font-semibold text-blue-600">pembuatan konten digital</span>.
                Saya terbuka untuk peluang karier di bidang IT, administrasi, maupun digital.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Saat ini saya berfokus mengembangkan keterampilan praktis dan pengalaman agar dapat memberikan
                kontribusi terbaik di dunia kerja.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 my-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Tahun Lulus</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">3.48</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">IPK</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Semangat Belajar</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Spesialisasi:</span>
                  <span className="text-gray-600 ml-2 text-xs sm:text-sm lg:text-base">Web Development, Microsoft Office, Konten Digital</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Level:</span>
                  <span className="text-gray-600 ml-2 text-xs sm:text-sm lg:text-base">Fresh Graduate</span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Pendidikan:</span>
                  <span className="text-gray-600 ml-2 text-xs sm:text-sm lg:text-base">S1 Informatika, STMIK Kalirejo (2025)</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Bahasa:</span>
                  <span className="text-gray-600 ml-2 text-xs sm:text-sm lg:text-base">Indonesia, English</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
