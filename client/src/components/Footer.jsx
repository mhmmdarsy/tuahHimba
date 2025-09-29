import React from 'react'

export default function Footer() {
  return (
    <footer id="tentang" className="bg-blue-950 text-white pt-6 pb-6">
      <div className="max-w-7xl mx-auto flex self-start text-left">
        <img src="/assets/images/lambang_kukar.png" alt="Museum Kayu" className="rounded-lg mr-6 self-start" style={{ width: '80%', maxWidth: 100 }} />
        <div>
          <h3 className="text-2xl font-bold mb-4">PEMERINTAH KABUPATEN KUTAI KARTANEGARA</h3>
          <div className="flex space-x-50">
            <div>
              <p className="mb-2 font-bold text-lg">Terhubung</p>
              <p className=" text-sm">Email :</p>
              <p className="mb-4"><a href="mailto:diskominfo@mail.kukarkab.go.id" className="text-white hover:underline text-sm">diskominfo@mail.kukarkab.go.id</a></p>
              <p className="text-sm">Alamat :</p>
              <p className="mb-4 text-sm">Jalan Pahlawan No.1 Timbau Tenggarong</p>
              <p className="text-sm">Telepon :</p>
              <p className="mb-4 text-sm">(+62) 541 661350</p>
              <p className="text-sm">Fax :</p>
              <p className="mb-4 text-sm">(+62) 541 664507</p>
            </div>
            <div>
              <p className="mb-2 font-bold text-lg">Link Terkait</p>
              <div className="flex space-x-20">
                <a href="https://bapenda.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Bapenda</a>
                <a href="https://bappeda.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Bappeda</a>
                <a href="https://disdikbud.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Disdikbud</a>
              </div>
              <div className="flex space-x-20 pt-2">
                <a href="https://diskominfo.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Diskominfo</a>
                <a href="https://dpmptsp.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">DPMPTSP</a>
                <a href="https://prokom.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Sekretariat Daerah</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-5 mx-40"></div>
      <div className="flex justify-center mt-5">
        <p>&copy; 2025 Kabupaten Kutai Kartanegara. All Rights Reserved</p>
      </div>
    </footer>
  )
}