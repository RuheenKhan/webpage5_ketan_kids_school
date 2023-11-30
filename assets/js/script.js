const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper");
    const slideButtons = document.querySelectorAll(".slider-btn");

    slideButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            const direction = button.id ==="slider-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider);