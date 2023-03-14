function hello(){
    const $search = document.querySelector("#search");
    const $rsearch = document.querySelector("#rsearch"); 
    let value = $search.value;

    console.log(value);

    $rsearch.addEventListener('onclick', () => {window.location.replace=`https://www.naver.com`});
};

window.onload = hello;

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("banner");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 2000);
}

window.onload = showSlides;

