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

// var slider_wrapper = document.querySelector('.slider-wrapper');
// let testimonials_list = slider_wrapper.getElementsByClassName('testimonials-list');



// function prev() {
//     slider_wrapper.prepend(testimonials_list[testimonials_list-1]);
// }

// setInterval (
//     function next() {
//         slider_wrapper.append(testimonials_list[0]);
//     },1000)