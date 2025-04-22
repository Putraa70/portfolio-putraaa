
// Fungsi untuk memuat file HTML eksternal
const loadComponent = (selector, filePath) => {
    fetch(filePath)
      .then(res => res.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(err => console.error(`Gagal memuat ${filePath}:`, err));
  };
  
  // Load header dan footer ke setiap halaman
  window.addEventListener('DOMContentLoaded', () => {
    loadComponent('#header', '../src/components/header.html');
    loadComponent('#footer', '../src/components/footer.html');
  });
  