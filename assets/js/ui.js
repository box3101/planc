(function () {
  // 메인 배너 슬라이드
  new Swiper(".partner-slide", {
    slidesPerView: 9, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    loop: true,
    autoplay: true,
    speed: 1000,
  });

  // faq 슬라이드
  new Swiper(".faq-slide", {
    slidesPerView: "auto", // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 20, // 슬라이드간 간격
    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".com-slide__button--next", // 다음 버튼 클래스명
      prevEl: ".com-slide__button--prev", // 이번 버튼 클래스명
    },
  });
})();
