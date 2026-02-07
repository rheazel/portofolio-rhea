const userData = {
  fullName: "Nazela dwi ramadhani",
  title: "Mahasiswa / Web Developer",
  photo: "fotoku.jpeg",
  bio: "Saya seorang mahasiswa yang tertarik pada pengembangan web, UI/UX, dan otomasi.",
  hobbies: ["Coding", "Fotografi"],
  contact: {
    email: "nazeladwi588@gmail.com",
    phone: "+62 852-8223-3826",
  },
  social: [
    { name: "GitHub", url: "https://github.com/username" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/username/" },
  ],
  connections: 128,
  projects: [
    {
      title: "Website Portofolio",
      desc: "Situs portofolio pribadi dengan HTML/CSS/JS.",
      img: "https://via.placeholder.com/800x500.png?text=Project+1",
      link: "https://example.com",
    },
    {
      title: "Aplikasi Catatan",
      desc: "SPA sederhana untuk mencatat tugas harian.",
      img: "https://via.placeholder.com/800x500.png?text=Project+2",
      link: "https://github.com/username/notes",
    },
    {
      title: "E-Commerce Mini",
      desc: "Demo toko online dengan cart sederhana.",
      img: "https://via.placeholder.com/800x500.png?text=Project+3",
      link: "https://example.com/shop",
    },
  ],
};

document.getElementById("fullName").textContent = userData.fullName;
document.getElementById("jobTitle").textContent = userData.title;
document.getElementById("profilePhoto").src = userData.photo;
document.getElementById("connectionsCount").textContent = userData.connections;

document.getElementById(
  "aboutBlock"
).innerHTML = `<div style="display:flex;gap:12px;align-items:center">
  <div style="flex:1"><p class="muted">${userData.bio}</p></div>
  <div style="width:140px;text-align:right"><div class="pill">${userData.title}</div></div>
</div>`;

const projectsGrid = document.getElementById("projectsGrid");
function renderProjects(filter = "") {
  projectsGrid.innerHTML = "";
  const fp = filter.trim().toLowerCase();
  const projects = userData.projects.filter((p) =>
    (p.title + " " + p.desc).toLowerCase().includes(fp)
  );

  if (projects.length === 0) {
    projectsGrid.innerHTML =
      '<div class="empty-state">Tidak ada proyek yang cocok.</div>';
    return;
  }

  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="links"><a class="btn" href="${p.link}" target="_blank">Lihat</a></div>
      </div>`;
    projectsGrid.appendChild(card);
  });
}
renderProjects();

document.getElementById("socialBlock").innerHTML = userData.social
  .map(
    (s) =>
      `<a class="btn" href="${s.url}" target="_blank" style="margin-right:8px">${s.name}</a>`
  )
  .join("");


document
  .getElementById("searchInput")
  .addEventListener("input", (e) => renderProjects(e.target.value));

document
  .getElementById("downloadCvBtn")
  .addEventListener("click", () => {
    const w = window.open("", "_blank");
    const html = `
      <html><head><title>CV - ${userData.fullName}</title>
      <style>body{font-family:Arial;padding:20px;color:#111}</style>
      </head><body>
      <h1>${userData.fullName}</h1>
      <h3>${userData.title}</h3>
      <p>${userData.bio}</p>
      <h4>Hobi</h4><ul>${userData.hobbies
        .map((h) => `<li>${h}</li>`)
        .join("")}</ul>
      <h4>Proyek</h4><ul>${userData.projects
        .map((p) => `<li>${p.title} - ${p.desc}</li>`)
        .join("")}</ul>
      <p>Kontak: ${userData.contact.email} | ${userData.contact.phone}</p>
      </body></html>`;
    w.document.write(html);
    w.document.close();
  });

