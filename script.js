let nextDom = document.querySelector("#next");
let prevDom = document.querySelector("#prev");
let carousel = document.querySelector(".carousel");
let sliderDom = carousel.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");
let trailerVid = document.querySelector(".trailer-vid");
let container = document.querySelector(".container");
let trailerBtn = document.querySelector(".trailer-btn");




thumbnailBorderDom.appendChild(thumbnailItemDom[0])

prevDom.onclick=function(){
    showSlider("prev")
}
nextDom.onclick = function () {
    showSlider("next");
};

function showSlider(type) {
    let sliderItemDom = sliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemDom = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        sliderDom.appendChild(sliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
        carousel.classList.add("next");
    }else{
        sliderDom.prepend(sliderItemDom[sliderItemDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemDom[thumbnailItemDom.length - 1]);
        carousel.classList.add("prev");
    }
}
function result() {
    trailerVid.classList.remove("hide");
    container.style.display = "none";
}

trailerBtn.addEventListener("click", result);


