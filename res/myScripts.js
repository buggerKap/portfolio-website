let slideIndex = 1;
ShowSlide("image",slideIndex);
ShowSlide("image2",slideIndex);

//slide an element (video, image) for the project showcase
//display current slide
function ShowSlide(j, x){
    let i;
    let slides = document.getElementsByClassName(j);
    if(x > slides.length) {slideIndex= 1}
    if(x < 1){ slideIndex = slides.length};

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}

function plusSlides(j, n){
    ShowSlide(j,slideIndex += n);
}

function CurrentSlide(n){
    ShowSlide(slideIndex = n);
}