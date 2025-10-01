import React from 'react';

// 1. Definisikan path gambar sebagai string.
// Path ini langsung merujuk ke folder 'public' Anda saat runtime.
// PASTIKAN NAMA FILE (huruf besar/kecil dan spasi) SAMA PERSIS dengan di folder 'public/assets/novel'.
const novelImg1 = "/assets/novel/Novel-Jawa Pintan.jpg"; 
const novelImg2 = "/assets/novel/Novel-Jingga untuk Sandyakala.jpg";
const novelImg3 = "/assets/novel/Novel-Kata.jpg";
const novelImg4 = "/assets/novel/Novel-Laskar Pelangi.jpg";
const novelImg5 = "/assets/novel/Novel-RapiJali.jpg";
const novelImg6 = "/assets/novel/Novel-Sabtu Bersama Bapak.jpg";
const novelImg7 = "/assets/novel/Novel-Sang Keris.jpg";
const novelImg8 = "/assets/novel/Novel-Selalu Ada Ruang Untuk Pulang.jpg";
const novelImg9 = "/assets/novel/Novel-Sumur Sebuah Cerita.jpg";
const novelImg10 = "/assets/novel/Novel-Tanah Bangsawan.jpg";

export default function Product() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks dont simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Book</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {/* Card Item */}
            <div className="col">
              <div className="card shadow-sm">
                {/* Ganti SVG dengan IMG */}
                <img
                src= {novelImg1}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />

                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                {/* Ganti SVG dengan IMG */}
                <img
                src= {novelImg2}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg3}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg4}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg5}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg6}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg7}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg8}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg9}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                src= {novelImg10}  // URL atau path gambar
                className="bd-placeholder-img card-img-top"
                alt="Cover Komik"
                width="100%"
                height="225"
                style={{ objectFit: "cover" }} // biar gambar proporsional
                />
                <div className="card-body">
                  <p className="card-text">
                     Komik ini sangat populer dengan cerita menarik dan ilustrasi keren.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Buy
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Peminjaman
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item */}
            
          </div>
        </div>
      </div>
    </>
  );
}
