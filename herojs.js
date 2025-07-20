// Select all cards
// const cards = document.querySelectorAll(".animated-card");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("active");
//   });
// });
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml8 .circle-white",
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100,
  })
  .add({
    targets: ".ml8 .circle-container",
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: "-=1000",
  })
  .add({
    targets: ".ml8 .circle-dark",
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: "-=600",
  })
  .add({
    targets: ".ml8 .letters-left",
    scale: [0, 1],
    duration: 1200,
    offset: "-=550",
  })
  .add({
    targets: ".ml8 .bang",
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: "-=1000",
  })
  .add({
    targets: ".ml8",
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 500,
  });

anime({
  targets: ".ml8 .circle-dark-dashed",
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true,
});
// Wrap every letter in a span
// var textWrapper = document.querySelector(".ml9 .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );

anime.timeline({ loop: false }).add({
  targets: ".ml9 .letter",
  scale: [0, 1],
  duration: 4500,
  elasticity: 600,
  delay: (el, i) => 90 * (i + 1),
});
