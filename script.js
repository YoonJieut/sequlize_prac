document.addEventListener("DOMContentLoaded", function () {
  const glitchItems = document.querySelectorAll(".glitch-item");

  // 각 텍스트 이미지에 대해 무작위 움직임을 적용합니다.
  glitchItems.forEach((item) => {
    // 무작위 위치로 움직이는 함수를 주기적으로 호출합니다.
    setInterval(() => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      item.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 500); // 2초마다 움직입니다.
  });
});
