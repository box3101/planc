(function () {
  // 메인 배너 슬라이드
  new Swiper(".partner-slide", {
    slidesPerView: 9, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    loop: true,
    autoplay: true,
    speed: 1000,

    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      900: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      600: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });

  // faq 슬라이드
  new Swiper(".faq-slide", {
    slidesPerView: "auto", // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 20, // 슬라이드간 간격
    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".com-slide__button--next", // 다음 버튼 클래스명
      prevEl: ".com-slide__button--prebv", // 이번 버튼 클래스명
    },
  });
})();

// TODO : header fixed 스크립트
(function () {
  function headerFixed() {
    const hdWrap = document.querySelector(".header");
    const logoImg = document.querySelector(".logo-img");

    let scroll = window.pageYOffset;

    if (scroll > 0) {
      hdWrap.classList.add("is-fix");
      logoImg.setAttribute("src", "../assets/images/img/logo-fix.svg");
    } else {
      hdWrap.classList.remove("is-fix");
    }
  }

  window.addEventListener("scroll", function () {
    headerFixed();
  });
})();

//TODO 메인 스크롤 모션 (what do)
(function () {
  function WhatDoEvent() {
    let scroll = window.pageYOffset;
    const whatDO = document.querySelector(".what-do");

    // 스크롤시 scle 커짐
    if (scroll > 0) {
      whatDO.classList.add("active");
    } else {
      whatDO.classList.remove("active");
    }
  }

  window.addEventListener("scroll", function () {
    WhatDoEvent();
  });
})();
