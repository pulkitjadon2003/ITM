var list = document.querySelectorAll("#list");
var submenu1 = document.querySelectorAll(".submenu1");

list.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    submenu1.forEach((submenu) => {
      submenu.style.gridTemplateColumns = "auto auto";
      submenu.style.width = "400px"
    });
  });
});
