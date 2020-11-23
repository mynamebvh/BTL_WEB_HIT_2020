const classSearch = ["show", "shadow", "p-3", "mb-5", "bg-white", "rounded"];
let container = document.getElementById("container");
let input = document.getElementById("input");
let searchTrend = document.getElementById("search__trend");

input.addEventListener("click", () => {
  searchTrend.classList.add(...classSearch);
})

input.addEventListener("blur", () => {
  searchTrend.classList.remove("show");
})

var random = 0;



let link = ["./img/img-lit/1_1.jpg", "./img/img-lit/2_2.jpg", "../img/img-lit/3_3.jpg", "../img/img-lit/5_5.jpg", "../img/img-lit/4_4.jpg"]
let slides = document.querySelectorAll(".bg__img-move");
let bgImg = document.getElementById("bg-img");

let bg_1 = document.querySelector(".bg__img-1");
let bg_2 = document.querySelector(".bg__img-2");
let bg_3 = document.querySelector(".bg__img-3");
let bg_4 = document.querySelector(".bg__img-4");
let bg_5 = document.querySelector(".bg__img-5");


slides.forEach((item, i) => {
  item.addEventListener("mouseenter", (i) => {
    // console.log(i.target);
    switch (i.target) {
      case bg_1:
        bgImg.src = link[0];
        break;
      case bg_2:
        bgImg.src = link[1];
        break;
      case bg_3:
        bgImg.src = link[2];
        break;
      case bg_4:
        bgImg.src = link[3];
        break;
      case bg_5:
        bgImg.src = link[4];
        break;
      default:
        break;
    }
  })
})


setInterval(() => {

  if(random > 4){
    slides[random - 1].style.border = "2px solid transparent";
    random = 0 ;
  }

  bgImg.src = link[random];

  if(slides[random - 1])
    slides[random - 1].style.border = "2px solid transparent";

  slides[random].style.border = "2px solid white";
  random++;
},3000)
