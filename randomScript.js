document.addEventListener("DOMContentLoaded", function () {
  const glitchItems = document.querySelectorAll(".glitch-item");

  // 각 텍스트 이미지에 대해 무작위 움직임을 적용합니다.
  glitchItems.forEach((item) => {
    // 무작위 위치로 움직이는 함수를 주기적으로 호출합니다.
    setInterval(() => {
      // 뷰포트의 너비와 높이를 가져옵니다.
      const max_x = window.innerWidth - item.offsetWidth;
      const max_y = window.innerHeight - item.offsetHeight;

      // 무작위 위치를 계산합니다.
      const randomX = Math.random() * max_x;
      const randomY = Math.random() * max_y;

      // 움직임 애니메이션을 위한 CSS 속성을 설정합니다.
      item.style.transition = "transform 0.5s ease-in-out";
      item.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 2000); // 2초마다 움직입니다.
  });
});
