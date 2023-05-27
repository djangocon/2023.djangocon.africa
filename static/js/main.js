const menu = document.querySelector(".menu");
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

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

menu.addEventListener("click", (e) => {
  const activeMenuItem = e.target.closest(".menu__item--has-sublinks");
  if (!activeMenuItem) return;
  toggleMenuItem(activeMenuItem);
});

function toggleMenuItem(menuItem) {
  const menuDropdownIcon = document.querySelector(".menu__dropdown-icon");
  const activeMenuLink = menuItem.querySelector(".menu__link--expandable");
  const activeMenuLinkIsOpened = activeMenuLink.getAttribute("aria-expanded");

  if (activeMenuLinkIsOpened === "true") {
    menuDropdownIcon.style.rotate = "0deg";

    menuItem
      .querySelector(".menu__item-container")
      .setAttribute("aria-expanded", false);

    menuItem
      .querySelector(".menu__link--expandable")
      .setAttribute("aria-expanded", false);

    menuItem.querySelector(".menu__sublinks").setAttribute("aria-hidden", true);
  } else {
    menuDropdownIcon.style.rotate = "90deg";

    menuItem
      .querySelector(".menu__item-container")
      .setAttribute("aria-expanded", true);

    menuItem
      .querySelector(".menu__link--expandable")
      .setAttribute("aria-expanded", true);

    menuItem
      .querySelector(".menu__sublinks")
      .setAttribute("aria-hidden", false);
  }
}
