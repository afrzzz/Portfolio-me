const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ringkasan profil, pengalaman, pendidikan, serta keterampilan yang saya miliki sebagai fresh graduate Informatika.
            Saya terbuka untuk peluang kerja di bidang IT, administrasi, maupun digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Profile and Skills */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-8">
              <div className="text-center mb-6">
                <img
                  src="/assets/img/profile/my-profile.webp"
                  alt="Profile"
                  className="w-20 h-20 sm:w-24 sm:h-32 rounded-full mx-auto object-cover border-4 border-blue-100 mb-4"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Saya adalah fresh graduate S1 Informatika STMIK Kalirejo (2025) dengan minat di web development,
                Microsoft Office, dan pembuatan konten digital. Terbuka untuk peluang karier di bidang IT,
                administrasi, maupun digital, sambil terus mengembangkan keterampilan teknis.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Kalirejo, Lampung, Indonesia</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="break-all">afrizalardiansyah2001@gmail.com</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                  +62 813-8448-5220
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  <span className="break-all">linkedin.com/in/afrizal-ardiansyah-sidiq</span>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">HTML/CSS</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">JavaScript (Basic)</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">PHP & Laravel</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">Microsoft Office</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience and Education */}
          <div className="lg:col-span-2">
            {/* Experience Section */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Experience
              </h3>

              <div className="space-y-6">
                {/* Staff Admin Gudang */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800">Staff Admin Gudang</h4>
                      <div className="flex items-center text-gray-600 mt-1 text-sm">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        PT Rotaryana Prima
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold mt-2 lg:mt-0 text-sm sm:text-base">2019 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                    <li>Mengelola data persediaan barang dan memastikan catatan stok selalu akurat.</li>
                    <li>Membuat laporan keluar/masuk barang menggunakan Microsoft Excel.</li>
                    <li>Mengarsipkan dokumen administrasi gudang secara rapi dan sistematis.</li>
                    <li>Berkoordinasi dengan tim operasional untuk kelancaran distribusi barang.</li>
                  </ul>
                </div>

                {/* Freelance Web Development */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800">Freelance Web Development</h4>
                      <div className="flex items-center text-gray-600 mt-1 text-sm">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Project Pribadi
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold mt-2 lg:mt-0 text-sm sm:text-base">2024 - 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                    <li>Membangun website akuntansi menggunakan HTML, CSS, PHP, Javascript dan Laravel</li>
                    <li>Menerapkan konsep CRUD untuk manajemen data</li>
                    <li>Membuat tampilan web responsif untuk mobile</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </h3>

              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Sarjana Informatika</h4>
                    <div className="flex items-center text-gray-600 mt-1 text-sm">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      STMIK Kalirejo
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold mt-2 lg:mt-0 text-sm sm:text-base">2021 - 2025</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Lulus dengan IPK 3,48, dengan bekal pemahaman umum di bidang teknologi informasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
