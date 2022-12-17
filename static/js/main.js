const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

const currentDate = new Date();

const roadmaps = document.querySelectorAll(".roadmap");

roadmaps.forEach((roadmap) => {
  const dateAndIcons = roadmap.querySelectorAll(".dateAndIcon");

  dateAndIcons.forEach((dateAndIcon) => {
    const eventDateString = dateAndIcon.dataset.eventDate;
    const eventDate = new Date(eventDateString);

    const checkImg = dateAndIcon.querySelector("#check");
    const uncheckImg = dateAndIcon.querySelector("#uncheck");

    if (eventDate < currentDate) {
      checkImg.style.display = "inline";
      uncheckImg.style.display = "none";
    } else {
      checkImg.style.display = "none";
      uncheckImg.style.display = "inline";
    }
  });
});

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
