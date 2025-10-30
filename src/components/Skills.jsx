const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Kemampuan teknis dan digital yang saya pelajari dan terus kembangkan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Web Development Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Web Development</h3>
            <div className="space-y-4 sm:space-y-6">
              {/* HTML/CSS */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">HTML/CSS</h4>
                  <span className="text-sm text-gray-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-blue-600 h-2 sm:h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Pemahaman dalam membuat struktur web dan desain responsif
                </p>
              </div>

              {/* JavaScript */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">JavaScript (Basic)</h4>
                  <span className="text-sm text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-blue-600 h-2 sm:h-3 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Dasar-dasar interaktivitas web dengan JavaScript
                </p>
              </div>

              {/* PHP & Laravel */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">PHP & Laravel</h4>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-blue-600 h-2 sm:h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Pengalaman membangun aplikasi web sederhana dengan Laravel
                </p>
              </div>
            </div>
          </div>

          {/* Digital & Office Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Office & Digital Skills</h3>
            <div className="space-y-4 sm:space-y-6">
              {/* Microsoft Office */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">Microsoft Office</h4>
                  <span className="text-sm text-gray-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-green-600 h-2 sm:h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Mahir dalam Word, Excel, dan PowerPoint untuk kebutuhan akademik & administrasi
                </p>
              </div>

              {/* Content Creation */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">Content Creation</h4>
                  <span className="text-sm text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-green-600 h-2 sm:h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Pembuatan konten digital sederhana untuk presentasi & sosial media
                </p>
              </div>

              {/* Database (SQL) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">Database (SQL)</h4>
                  <span className="text-sm text-gray-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-green-600 h-2 sm:h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Dasar-dasar query SQL untuk pengelolaan data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
