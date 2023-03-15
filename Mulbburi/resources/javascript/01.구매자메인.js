function hello(){
    const $search = document.querySelector("#search");
    const $rsearch = document.querySelector("#rsearch"); 
    let value = $search.value;

    console.log(value);

    $rsearch.addEventListener('click', () => {window.location.replace=`https://www.naver.com`});
};

hello();

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

showSlides();

function company(){
    const $co1 = document.querySelector(".co1");
    const $co2 = document.querySelector(".co2");
    const $co3 = document.querySelector(".co3");
    const $co4 = document.querySelector(".co4");

    $co1.addEventListener("click", () => {location.href="../lecture/회사소개.html"});
    $co2.addEventListener("click", () => {location.href="../lecture/개인정보방침.html"});
    $co3.addEventListener("click", () => {location.href="../lecture/이용약관.html"});
    $co4.addEventListener("click", () => {location.href="../"})
}

company();
