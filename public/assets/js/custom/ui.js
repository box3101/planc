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
    autoplay: true,

    navigation: {
      nextEl: ".com-slide__button--next", // 다음 버튼 클래스명
      prevEl: ".com-slide__button--prev", // 이번 버튼 클래스명
    },
    breakpoints: {
      // when window width is >= 320px
      1600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      900: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      600: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
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
      logoImg.setAttribute("src", "/public/assets/images/img/logo-fix.svg");
    } else {
      hdWrap.classList.remove("is-fix");
      logoImg.setAttribute("src", "/public/assets/images/img/logo.svg");
    }
  }

  window.addEventListener("scroll", function () {
    headerFixed();
  });
})();

// TODO: WOW JS
(function () {
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 200,
    mobile: false,
    live: true,
  });
  wow.init();
})();

// TODO : create 효과 모션
(function () {
  let scroll = window.pageYOffset;
  const benefit = document.querySelector(".benefit");

  function showValue() {
    let posY = benefit.getBoundingClientRect().top;
    if (posY < window.innerHeight * 0.5) {
      benefit.classList.add("active");
    }
  }

  window.addEventListener("scroll", function () {
    showValue();
  });
})();
