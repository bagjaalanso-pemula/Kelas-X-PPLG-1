/* ============================================
   DATA KELAS - EDIT BAGIAN INI SESUAI KELASMU
   ============================================ */

// Daftar anggota kelas (foto taruh di folder images/members/)
const members = [
  { absen: 1, nama: "Andika Rizki Eka Putra", jabatan: "Seksi keamanan", foto: "Andika.jpeg" },
  { absen: 2, nama: "Andini Keisya Ramadani", jabatan: "Bendahara", foto: "Andini.jpeg" },
  { absen: 3, nama: "Bagja Al Anso", jabatan: "Seksi kerohanian", foto: "Bagja.jpeg" },
  { absen: 4, nama: "Fadil Ahyar", jabatan: "Anggota", foto: "Fadhil.jpeg" },
  { absen: 5, nama: "Fahmi M Al-Ghifari", jabatan: "Anggota", foto: "Fahmi.jpeg" },
  { absen: 6, nama: "Giofani Ridho Sumardi", jabatan: "Anggota", foto: "Gio.jpeg" },
  { absen: 7, nama: "Heni Sulistiawati", jabatan: "Bendahara", foto: "Heni.jpeg" },
  { absen: 8, nama: "M. Syakieb Amar Ruwloh", jabatan: "Seksi kebersihan", foto: "Syakib.jpeg" },
  { absen: 9, nama: "Muhamad Azhar", jabatan: "Sekretaris", foto: "Azhar.jpeg" },
  { absen: 10, nama: "Muhamad Panca Pisir", jabatan: "Seksi keamanan", foto: "Panca.jpeg" },
  { absen: 11, nama: "Muhammad Fahtir Prasetio", jabatan: "Seksi keamanan", foto: "Fathir.jpeg" },
  { absen: 12, nama: "Naufal Kaffi Azzauhari", jabatan: "Seksi kerohanian", foto: "Naufal.jpeg" },
  { absen: 13, nama: "Presilla Adela Ramadhani", jabatan: "Sekretaris", foto: "Cila.jpeg" },
  { absen: 14, nama: "Putri Nazla Nafiah", jabatan: "Seksi kebersihan", foto: "Nazla.jpeg" },
  { absen: 15, nama: "Quratuain", jabatan: "Ketua kelas", foto: "Ratu.jpeg" },
  { absen: 16, nama: "Rafif Dafian Fadlilah", jabatan: "Wakil Ketua", foto: "Rafif.jpeg" },
  { absen: 17, nama: "Rizki Aditia Santoso", jabatan: "Anggota", foto: "Riski.jpeg" },
];

// Urutkan otomatis sesuai nomor absen
members.sort((a, b) => a.absen - b.absen);

// Data wali kelas (foto taruh di images/wali-kelas.jpg)
const waliKelas = {
  nama: "Dimas Pratama, S.Kom",
  jabatan: "Wali Kelas X PPLG 1",
  mapel: "DDPKPPLG/121",
  pesan: "Belajar dengan sungguh-sungguh, jaga kekompakan, dan jadilah pribadi yang berakhlak baik.",
  foto: "Pa dimas.png",
};

// Jadwal pelajaran per hari - X PPLG 1 (kolom 1), berlaku mulai 23 Juli 2026
// Sumber: gambar jadwal, sel berformat MAPEL/KODE GURU -> dipisah jadi mapel + guru
// Kolom jam sudah pakai ":" agar bisa dibaca fungsi showDay()
const schedule = {
  Senin: [
    { jam: "08:15 - 09:35", mapel: "KKA",   guru: "163" },
    { jam: "09:35 - 10:55", mapel: "DDPKPPLG", guru: "121" },
    { jam: "10:55 - 14:45", mapel: "B.INDO",   guru: "022" },
    { jam: "14:45 - 16:05", mapel: "MTK",      guru: "195" },
  ],
  Selasa: [
    { jam: "08:15 - 09:35", mapel: "P.IPAS",      guru: "060" },
    { jam: "09:35 - 13:25", mapel: "INFORMATIKA", guru: "160" },
    { jam: "13:25 - 14:45", mapel: "SENI",        guru: "192" }, 
    { jam: "14:45 - 16:05", mapel: "B.SUNDA",     guru: "032" }, 
  ],
  Rabu: [
    { jam: "08:15 - 09:35", mapel: "BK",         guru: "189" }, 
    { jam: "09:35 - 10:55", mapel: "B.INGGRIS",  guru: "018" }, 
    { jam: "10:55 - 13:25", mapel: "DDPKPPLG",   guru: "121" }, 
    { jam: "13:25 - 14:45", mapel: "MTK",        guru: "195" }, 
    { jam: "14:45 - 16:05", mapel: "IPAS",        guru: "060" }, 
  ],
  Kamis: [
    { jam: "08:15 - 09:35", mapel: "SEJARAH",   guru: "101" }, 
    { jam: "09:35 - 11:35", mapel: "PJOK",      guru: "019" }, 
    { jam: "12:45 - 14:05", mapel: "B.INGGRIS", guru: "018" }, 
    { jam: "14:05 - 16:05", mapel: "PAIPB",     guru: "033" }, 
  ],
  Jumat: [
    { jam: "08:20 - 10:40", mapel: "DDPKPPLG", guru: "010" }, 
    { jam: "10:40 - 13:45", mapel: "PP",       guru: "016" }, 
    { jam: "13:45 - 16:05", mapel: "DDPKPPLG", guru: "114" }, 
  ],
};

// Jadwal piket
const piket = {
  Senin:  ["Andika", "Heni", "Fahmi", "Gio", "Panca"],
  Selasa: ["Cila", "Rizki", "Bagja"],
  Rabu:   ["Ratu", "Fathir", "Andika"],
  Kamis:  ["Nazla", "Naufal", "Rafif"],
  Jumat:  ["Andini", "Fadhil", "Syakieb", "Azhar"],
};

// Galeri foto (taruh foto di folder images/)
const photos = [
  { src: "images/galeri1.jpg", caption: "Belajar Coding Bareng", kategori: "belajar" },
  { src: "images/galeri2.jpg", caption: "Praktik di Lab Komputer", kategori: "belajar" },
  { src: "images/galeri3.jpg", caption: "Hari Sumpah Pemuda", kategori: "acara" },
  { src: "images/galeri4.jpg", caption: "Class Meeting", kategori: "acara" },
  { src: "images/galeri5.jpg", caption: "Nongkrong di Kantin", kategori: "santai" },
  { src: "images/galeri6.jpg", caption: "Foto Bareng Wali Kelas", kategori: "acara" },
  { src: "images/galeri7.jpg", caption: "Lomba Membuat Game", kategori: "belajar" },
  { src: "images/galeri8.jpg", caption: "Istirahat Seru", kategori: "santai" },
];

// Teks animasi mengetik di beranda
const typingWords = ["Programmer Muda 💻", "Calon Game Developer 🎮", "Keluarga Kreatif 🚀", "Generasi Digital ✨"];

/* ============================================
   FUNGSI-FUNGSI WEBSITE
   ============================================ */

// Gambar pengganti kalau file foto belum ada
function fallbackImg(img, label) {
  img.onerror = null;
  const text = encodeURIComponent(label || "Foto");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#1e46f0'/><stop offset='1' stop-color='#38b6ff'/></linearGradient></defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='50%' fill='white' font-size='32' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'>${decodeURIComponent(text)}</text>
  </svg>`;
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Kalau file logo belum ada, tampilkan logo teks sementara
function logoFallback(img) {
  img.onerror = null;
  const box = document.createElement("div");
  box.className = "hero-logo-text";
  box.textContent = "X PPLG 1";
  img.replaceWith(box);
}

// Kalau gambar logo HTML/CSS/JS belum ada, tampilkan lencana sementara
function techFallback(img) {
  img.onerror = null;
  const wrap = document.createElement("div");
  wrap.className = "tech-fallback";
  wrap.innerHTML = '<div class="tech-badge html">HTML</div><div class="tech-badge js">JS</div><div class="tech-badge css">CSS</div>';
  img.replaceWith(wrap);
}

/* ---------- Tema gelap / terang ---------- */
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(savedTheme);

function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", t);
}
themeBtn.addEventListener("click", () => {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---------- Menu mobile ---------- */
const navLinks = document.getElementById("navLinks");
document.getElementById("menuToggle").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---------- Efek mengetik ---------- */
(function typing() {
  const el = document.getElementById("typingText");
  let w = 0, c = 0, deleting = false;
  function tick() {
    const word = typingWords[w];
    el.textContent = word.substring(0, c);
    if (!deleting && c < word.length) c++;
    else if (!deleting) { deleting = true; return setTimeout(tick, 1400); }
    else if (c > 0) c--;
    else { deleting = false; w = (w + 1) % typingWords.length; }
    setTimeout(tick, deleting ? 40 : 90);
  }
  tick();
})();

/* ---------- Anggota kelas + pencarian ---------- */
const memberGrid = document.getElementById("memberGrid");
function renderMembers(list) {
  memberGrid.innerHTML = list.length ? "" : "<p class='note'>Anggota tidak ditemukan 😕</p>";
  list.forEach((m, i) => {
    const div = document.createElement("div");
    div.className = "member";
    div.innerHTML = `
      <img src="${m.foto}" alt="Foto ${m.nama}" loading="lazy">
      <div class="member-info">
        <h4>${m.nama}</h4>
        <p>${m.jabatan}</p>
        <small>Absen ${m.absen}</small>
      </div>`;
    div.querySelector("img").onerror = function () { fallbackImg(this, m.nama.split(" ")[0]); };
    memberGrid.appendChild(div);
  });
}
renderMembers(members);
document.getElementById("searchMember").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  renderMembers(members.filter(m => m.nama.toLowerCase().includes(q) || m.jabatan.toLowerCase().includes(q)));
});

/* ---------- Wali kelas ---------- */
(function () {
  const w = waliKelas;
  const card = document.getElementById("waliCard");
  card.innerHTML = `
    <img src="${w.foto}" alt="Foto ${w.nama}" loading="lazy">
    <div class="wali-info">
      <span class="wali-label">${w.jabatan}</span>
      <h3>${w.nama}</h3>
      <p>"${w.pesan}"</p>
      <small>${w.mapel}</small>
    </div>`;
  card.querySelector("img").onerror = function () { fallbackImg(this, "Wali Kelas"); };
})();

/* ---------- Jadwal pelajaran ---------- */
const days = Object.keys(schedule);
const dayTabs = document.getElementById("dayTabs");
const scheduleList = document.getElementById("scheduleList");
const todayName = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][new Date().getDay()];

function showDay(day) {
  dayTabs.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.textContent === day));
  scheduleList.innerHTML = "";
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  schedule[day].forEach(l => {
    const [s, e] = l.jam.split(" - ").map(t => { const [h, m] = t.split(":"); return +h * 60 + +m; });
    const isNow = day === todayName && nowMin >= s && nowMin <= e;
    const div = document.createElement("div");
    div.className = "lesson" + (isNow ? " now" : "");
    div.innerHTML = `<span class="time">${l.jam}</span>
      <div><div class="subject">${l.mapel} ${isNow ? "🔴 Sedang berlangsung" : ""}</div>
      <div class="teacher">${l.guru}</div></div>`;
    scheduleList.appendChild(div);
  });
}
days.forEach(d => {
  const b = document.createElement("button");
  b.className = "tab"; b.textContent = d;
  b.onclick = () => showDay(d);
  dayTabs.appendChild(b);
});
showDay(days.includes(todayName) ? todayName : days[0]);

/* ---------- Jadwal piket ---------- */
const piketGrid = document.getElementById("piketGrid");
Object.entries(piket).forEach(([hari, orang]) => {
  const d = document.createElement("div");
  d.className = "piket-day";
  d.innerHTML = `<strong>${hari}</strong>${orang.map(o => `<span>• ${o}</span>`).join("")}`;
  piketGrid.appendChild(d);
});

/* ---------- Galeri + filter + lightbox ---------- */
const gallery = document.getElementById("gallery");
photos.forEach((p, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.kategori = p.kategori;
  item.innerHTML = `<img src="${p.src}" alt="${p.caption}" loading="lazy"><div class="caption">${p.caption}</div>`;
  item.querySelector("img").onerror = function () { fallbackImg(this, p.caption); };
  item.addEventListener("click", () => openLightbox(p));
  gallery.appendChild(item);
});

document.getElementById("galleryFilters").addEventListener("click", e => {
  if (!e.target.classList.contains("filter")) return;
  document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
  e.target.classList.add("active");
  const f = e.target.dataset.filter;
  gallery.querySelectorAll(".gallery-item").forEach(it => {
    it.classList.toggle("hide", f !== "all" && it.dataset.kategori !== f);
  });
});

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
let currentPhoto = 0;
function visiblePhotos() { return photos.filter(p => {
  const active = document.querySelector(".filter.active").dataset.filter;
  return active === "all" || p.kategori === active;
}); }
function openLightbox(p) {
  const list = visiblePhotos();
  currentPhoto = list.indexOf(p);
  showPhoto(list);
  lightbox.classList.add("open");
}
function showPhoto(list) {
  const p = list[currentPhoto];
  lbImg.onerror = function () { fallbackImg(this, p.caption); };
  lbImg.src = p.src;
  document.getElementById("lbCaption").textContent = p.caption;
}
function moveLightbox(step) {
  const list = visiblePhotos();
  currentPhoto = (currentPhoto + step + list.length) % list.length;
  showPhoto(list);
}
document.getElementById("lbClose").onclick = () => lightbox.classList.remove("open");
document.getElementById("lbPrev").onclick = () => moveLightbox(-1);
document.getElementById("lbNext").onclick = () => moveLightbox(1);
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("open"); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") lightbox.classList.remove("open");
  if (e.key === "ArrowLeft") moveLightbox(-1);
  if (e.key === "ArrowRight") moveLightbox(1);
});

/* ---------- Dinding pesan (tersimpan di browser) ---------- */
const msgList = document.getElementById("messageList");
let messages = JSON.parse(localStorage.getItem("messages") || "[]");
function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function renderMessages() {
  msgList.innerHTML = messages.length ? "" : "<p class='note'>Belum ada pesan. Jadi yang pertama! ✍️</p>";
  messages.slice().reverse().forEach((m, idx) => {
    const realIdx = messages.length - 1 - idx;
    const d = document.createElement("div");
    d.className = "msg";
    d.innerHTML = `<strong>${escapeHtml(m.nama)}</strong><small>${m.waktu}</small>
      <p>${escapeHtml(m.isi)}</p><button class="del" title="Hapus">🗑️</button>`;
    d.querySelector(".del").onclick = () => { messages.splice(realIdx, 1); saveMessages(); };
    msgList.appendChild(d);
  });
}
function saveMessages() { localStorage.setItem("messages", JSON.stringify(messages)); renderMessages(); }
document.getElementById("messageForm").addEventListener("submit", e => {
  e.preventDefault();
  messages.push({
    nama: document.getElementById("msgName").value.trim(),
    isi: document.getElementById("msgText").value.trim(),
    waktu: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
  });
  e.target.reset();
  saveMessages();
});
renderMessages();

/* ---------- Animasi scroll, counter, skill bar ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("visible");
    observer.unobserve(en.target);
  });
}, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.target;
    let n = 0; const step = Math.max(1, Math.ceil(target / 50));
    const t = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(t); } el.textContent = n; }, 30);
    counterObs.unobserve(el);
  });
});
document.querySelectorAll(".counter").forEach(c => counterObs.observe(c));

/* ---------- Navigasi aktif, tombol ke atas ---------- */
const sections = document.querySelectorAll("section[id]");
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  toTop.classList.toggle("show", y > 500);
  sections.forEach(s => {
    if (y >= s.offsetTop - 120 && y < s.offsetTop + s.offsetHeight - 120) {
      navLinks.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + s.id));
    }
  });
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

document.getElementById("year").textContent = new Date().getFullYear();