import React from 'react';
// Import gambar sebagai variabel

import rizkyImage from '/assets/kimshin.jpeg'
import fahmiImage from '/assets/kimshin2.jpg'
import budiImage from '/assets/Saroka.jpg'

const Team = () => {
  const members = [
    { name: "Fahmi Affandy", role: "Frontend Web Developer", imgSrc: fahmiImage },
    { name: "Rizky Rahmanto", role: "UI/UX Designer", imgSrc: rizkyImage },
    { name: "Budi Susanto", role: "Backend Web Developer", imgSrc: budiImage },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Team</h1>
      <p>Berikut adalah anggota tim yang bekerja di proyek ini:</p>

      {/* Gunakan Bootstrap 'row' dan 'col' atau 'd-flex' untuk tata letak Card */}
      <div className="row"> 
        {members.map((m, i) => (
          // Setiap anggota tim menjadi kolom (col-md-4 agar 3 card per baris di layar medium)
          <div key={i} className="col-md-4 mb-4">
            
            {/* Struktur Card Bootstrap */}
            <div className="card h-100"> 
              
              {/* Gambar Card */}
              <img 
                src={m.imgSrc} 
                className="card-img-top" 
                alt={`Foto ${m.name}`} 
              />
              
              {/* Konten Card */}
              <div className="card-body">
                <h5 className="card-title">{m.name}</h5> 
                <p className="card-text text-muted">{m.role}</p> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;