<div class="container">
    <div class="row g-4 g-lg-5">
        <!-- Info kontak -->
        <div class="col-lg-5">
            <div class="info-box">
                <h3>Informasi Kontak</h3>
                <p>Jangan ragu untuk menghubungi saya melalui informasi berikut jika ada pertanyaan atau peluang kerja sama.</p>

                <div class="info-item">
                    <div class="icon-box"><i class="bi bi-geo-alt"></i></div>
                    <div class="content">
                        <h4>Lokasi</h4>
                        <p>Kalirejo, Lampung Tengah, Lampung</p>
                        <p>Indonesia</p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="icon-box"><i class="bi bi-telephone"></i></div>
                    <div class="content">
                        <h4>Nomor Telepon</h4>
                        <p>+62 813-8448-5220</p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="icon-box"><i class="bi bi-envelope"></i></div>
                    <div class="content">
                        <h4>Email</h4>
                        <p>afrizalardiansyah2001@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Form kontak -->
        <div class="col-lg-7">
            <div class="contact-form">
                <h3>Hubungi Saya</h3>
                <p>Kirimkan pesan melalui formulir di bawah ini, saya akan segera merespons secepat mungkin.</p>

                <form id="contact-form" action="https://formspree.io/f/xnnbolrg" method="POST">
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <input type="text" name="name" class="form-control" placeholder="Nama Anda" required>
                        </div>

                        <div class="col-md-6">
                            <input
                                type="email"
                                name="email"
                                class="form-control"
                                placeholder="Email Anda"
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$">
                        </div>

                        <div class="col-12">
                            <input type="text" name="subject" class="form-control" placeholder="Subjek" required>
                        </div>

                        <div class="col-12">
                            <textarea name="message" class="form-control" rows="6" placeholder="Tulis pesan Anda..." required></textarea>
                        </div>

                        <div class="col-12 text-center">
                            <div id="form-status" class="mt-2"></div>
                            <button type="submit" class="btn">Kirim Pesan</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<!-- Script AJAX Formspree -->
<script>
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        status.innerHTML = "⏳ Mengirim pesan...";
        const data = new FormData(form);

        try {
            let response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = "✅ Pesan Anda berhasil terkirim. Terima kasih!";
                form.reset();
            } else {
                status.innerHTML = "❌ Terjadi kesalahan. Coba lagi.";
            }
        } catch (error) {
            status.innerHTML = "⚠️ Gagal menghubungkan ke server.";
        }
    });
</script>