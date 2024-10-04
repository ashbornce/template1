// Toggle class active untuk hamburger menu
const navLink = document.querySelector(".nav-link");
const hamburger = document.querySelector("#hamburger");

// Prevent default behavior and toggle the active class on click
hamburger.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior
  navLink.classList.toggle("active");
});

// Close the navbar when clicking outside of it
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
  }
});

// Memeriksa elemen yang terlihat
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1, // Menentukan seberapa banyak elemen harus terlihat sebelum animasi muncul
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return; // Jika tidak terlihat, kembali
    } else {
      entry.target.classList.add("visible"); // Tambahkan kelas 'visible'
      observer.unobserve(entry.target); // Hentikan pengamatan pada elemen ini
    }
  });
}, appearOptions);

// Menggunakan observer untuk setiap elemen dengan kelas 'fade-in'
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
