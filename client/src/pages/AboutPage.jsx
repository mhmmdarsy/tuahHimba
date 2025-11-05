import React from 'react'

export default function AboutPage() {
  return (
    <main className="py-16 px-6">
      {/* Tentang */}
      <div className="max-w-7xl mx-auto text-left mt-3">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 pt-5">Tentang</h2>
          <p className="text-gray-700 mb-5">
            Museum Kayu Tuah Himba memiliki lebih dari 855 koleksi yang terdiri dari berbagai jenis
            kayu, herbarium, arboretum, rotan, serta benda-benda tradisional seperti peralatan
            dapur, alat musik, dan alat tangkap ikan. Selain itu, museum ini juga menyimpan beberapa
            koleksi binatang, termasuk buaya, kucing hutan, biawak, kepiting kelapa, dan
            berang-berang. Untuk menjaga kelestarian koleksi, pihak museum bekerja sama dengan
            dokter hewan dalam perawatan koleksi binatang, sementara pembersihan koleksi dilakukan
            secara berkala guna memastikan kualitasnya tetap terjaga.
          </p>
          <p className="text-gray-700 mb-5">
            Museum Kayu Tuah Himba buka setiap hari dari pukul 09.00 hingga 16.00 WITA dengan harga
            tiket masuk yang terjangkau. Harga tiket sebesar yaitu Rp5.000 untuk anak-anak dan
            Rp10.000 untuk dewasa. Biaya parkir kendaraan roda dua dikenakan Rp2 ribu, sementara
            roda empat sebesar Rp5 ribu.
          </p>
          <p className="text-gray-700 mb-5">
            Dengan koleksi yang unik dan nilai edukatif yang tinggi, Museum Kayu Tuah Himba menjadi
            destinasi yang layak dikunjungi bagi siapa saja yang ingin mengenal lebih dalam tentang
            hutan dan kekayaan alam Indonesia. Sebagai pengingat pentingnya pelestarian hutan,
            museum ini juga mengusung pesan, "Satu pohon dapat membuat jutaan batang korek api,
            tetapi satu batang korek api dapat membakar jutaan pohon."
          </p>
        </div>
      </div>

      {/* Fasilitas */}
      <div className="mb-12 max-w-7xl mx-auto text-left mt-3">
        <h2 className="text-5xl font-bold mb-4">Fasilitas</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li>Ruang Pameran</li>
          <li>Toilet</li>
          <li>Tempat Tunggu</li>
          <li>Area Parkir</li>
        </ul>
      </div>

      {/* Koleksi */}
      <div className="mb-12 max-w-7xl mx-auto text-left mt-3">
        <h2 className="text-5xl font-bold mb-4">Koleksi</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li>Buaya Muara yang diawetkan (jantan dan betina)</li>
          <li>
            Kerajinan Kutai yang terbuat dari rotan, seperti lemari, kursi, lampu, dan tempat tidur
          </li>
          <li>Kerajinan Dayak, seperti anjat, mandau, dan ukiran Dayak dari kayu ulin</li>
          <li>Miniatur rumah khas Dayak</li>
          <li>Koleksi biji-bijian</li>
          <li>Jenis-jenis kayu dari hutan daerah Kutai Kartanegara</li>
          <li>Koleksi potongan log atau batangan pohon dari Hutan Kalimantan</li>
          <li>Koleksi kayu sebanyak 305 jenis</li>
          <li>Koleksi daun kayu yang dikeringkan sebanyak 250 buah</li>
          <li>Koleksi peralatan dapur tradisional sebanyak 12 jenis</li>
          <li>Koleksi alat musik tradisional sebanyak 17 jenis</li>
          <li>Koleksi alat tangkap ikan tradisional sebanyak 12 jenis</li>
          <li>Koleksi Kepiting pemakan sari kelapa</li>
          <li>Dan lain-lain.</li>
        </ul>
      </div>

      {/* Lokasi dan Jam Operasional */}
      <div className="max-w-7xl mx-auto text-left mt-3">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Lokasi dan Jam Operasional</h2>
          <div>
            <iframe
              title="Lokasi Museum Kayu Tuah Himba"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.871856575975!2d116.96704237080809!3d-0.40638164390839976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6655027b3b263%3A0x3425cd2e96bc3b7f!2sMuseum%20Kayu!5e0!3m2!1sen!2sid!4v1746891862589!5m2!1sen!2sid"
              className="w-full h-[600px] rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col text-2xl mt-4">
              <strong>Jam Operasional:</strong> Senin - Sabtu, 09:00 - 16:00 WITA.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
