const Team = () => {
  const members = [
    { name: "Fahmi Affandy", role: "Frontend Developer" },
    { name: "Rizky Rahmanto", role: "UI/UX Designer" },
    { name: "Budi Susanto", role: "Backend Developer" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Team</h1>
      <p>Berikut adalah anggota tim yang bekerja di proyek ini:</p>
      <ul>
        {members.map((m, i) => (
          <li key={i}>
            <strong>{m.name}</strong> – {m.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
