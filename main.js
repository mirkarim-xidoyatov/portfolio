// Kod sahifa to'liq yuklangandan keyin ishlashi uchun DOMContentLoaded ichiga olindi
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Mobil menyuni ochish va yopish funksiyasi
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = document.getElementById("menu-icon");

  if (menuBtn && navLinks && menuIcon) {
    menuBtn.addEventListener("click", () => {
      // 'hidden' klassini o'chirib-yoqadi
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("flex");

      // Menyuning ikonkasini o'zgartiradi (X yoki Uchta chiziq)
      if (navLinks.classList.contains("hidden")) {
        menuIcon.className = "ri-menu-line";
      } else {
        menuIcon.className = "ri-close-line";
      }
    });
  }

  // 2. Swiper Karusellarni ishga tushirish (Mashhur Manzillar uchun)
  const destinationSwiper = new Swiper(".destination-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true, // Cheksiz aylanish
    grabCursor: true, // Sichqoncha bilan tortganda qo'l shakli chiqishi
    autoplay: {
      delay: 2000, // Har 3 soniyada avtomatik o'tishi
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { 
        slidesPerView: 2,
        spaceBetween: 24 
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 30 
      }
    }
  });

  // 3. Swiper Karusellarni ishga tushirish (Mijozlar Fikrlar Slayderi uchun)
  const reviewSwiper = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true, // Cheksiz aylanish
    grabCursor: true,
    autoplay: {
      delay: 2000, // Har 4 soniyada avtomatik o'tishi
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { 
        slidesPerView: 2,
        spaceBetween: 24 
      }
    }
  });

});