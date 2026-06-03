// 1. Mobil menyuni ochish va yopish funksiyasi
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  // 'hidden' klassini o'chirib-yoqadi
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex");

  // Menyuning ikonkasini o'zgartiradi (XY yoki Uchta chiziq)
  if (navLinks.classList.contains("hidden")) {
    menuIcon.className = "ri-menu-line";
  } else {
    menuIcon.className = "ri-close-line";
  }
});

// 2. Swiper Karusellarni ishga tushirish (Slayderlar uchun)
const destinationSwiper = new Swiper(".destination-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

const reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 }
  }
});