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
