import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('⏳ Mengirim pesan...');

    try {
      const response = await fetch('https://formspree.io/f/xnnbolrg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target as HTMLFormElement)
      });

      if (response.ok) {
        setStatus('✅ Pesan Anda berhasil terkirim. Terima kasih!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Terjadi kesalahan. Coba lagi.');
      }
    } catch {
      setStatus('⚠️ Gagal menghubungkan ke server.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Silakan hubungi saya melalui informasi berikut untuk kesempatan kerja, kolaborasi, atau pertanyaan lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Jangan ragu untuk menghubungi saya melalui informasi berikut jika ada pertanyaan atau peluang kerja sama.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Lokasi</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Kalirejo, Lampung Tengah, Lampung</p>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Nomor Telepon</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">+62 813-8448-5220</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">afrizalardiansyah2001@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Hubungi Saya</h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Kirimkan pesan melalui formulir di bawah ini, saya akan segera merespons secepat mungkin.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-xs sm:text-sm lg:text-base"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Anda"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-xs sm:text-sm lg:text-base"
                        pattern="^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subjek"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-xs sm:text-sm lg:text-base"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tulis pesan Anda..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none text-xs sm:text-sm lg:text-base"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <div id="form-status" className="mb-4 text-sm">
                      {status}
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-xs sm:text-sm lg:text-base"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
