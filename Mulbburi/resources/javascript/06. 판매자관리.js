function click(){
    const $t1 = document.querySelector(".t1");
    const $t2 = document.querySelector(".t2");
    const $background1 = document.querySelector(".background1");
    const $background2 = document.querySelector(".background2");
    const button = document.querySelector("button");

    $t1.addEventListener("click", () => {
        $background1.style.display = "block";
        $background2.style.display = "none";
    });

    $t2.addEventListener("click", () => {
        $background2.style.display = "block";
        $background1.style.display = "none";
    });

    button.addEventListener("click", () => { window.open("06-1. 판매자 신고 자세히.html", "판매자 신고 자세히", "width=500, height=500, left=100, top=50")});
}

click();


showPopup();