import React from 'react';

const ContactForm = () => {
  // Dalam komponen React yang sesungguhnya, Anda akan menambahkan state
  // (misalnya, menggunakan useState) untuk mengelola input formulir.

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulir berhasil disubmit (simulasi)');
    // Tambahkan logika pengiriman data formulir di sini
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Hubungi Kami</h2>
      <p>Silakan isi formulir di bawah ini, dan kami akan segera menghubungi Anda.</p>
      
      {/* Input Nama */}
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Nama Lengkap</label>
        <input 
          type="text" 
          className="form-control" 
          id="inputName" 
          required 
        />
      </div>
      
      {/* Input Informasi Kontak (Email atau Telepon) */}
      <div className="mb-3">
        <label htmlFor="inputContact" className="form-label">Informasi Kontak (Email/Telepon)</label>
        <input 
          type="text" 
          className="form-control" 
          id="inputContact" 
          aria-describedby="contactHelp" 
          required 
        />
        <div id="contactHelp" className="form-text">
          Kami tidak akan membagikan informasi kontak Anda kepada orang lain.
        </div>
      </div>
      
      {/* Input Pesan (menggunakan textarea) */}
      <div className="mb-3">
        <label htmlFor="inputMessage" className="form-label">Pesan Anda</label>
        <textarea 
          className="form-control" 
          id="inputMessage" 
          rows="4" // Menentukan tinggi textarea
          required 
        ></textarea>
      </div>

      {/* Checkbox (Contoh: Saya setuju dengan Syarat & Ketentuan) */}
      <div className="mb-3 form-check">
        <input 
          type="checkbox" 
          className="form-check-input" 
          id="checkTerms" 
          required // Memastikan user mencentang
        />
        <label className="form-check-label" htmlFor="checkTerms">Saya setuju dengan syarat dan ketentuan</label>
      </div>
      
      {/* Tombol Submit */}
      <button type="submit" className="btn btn-primary">Kirim Pesan</button>
    </form>
  );
};

export default ContactForm;