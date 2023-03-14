function hello(){
    const $search = document.querySelector("#search");
    const $rsearch = document.querySelector("#rsearch"); 
    let value = $search.value;

    console.log(value);

    $rsearch.addEventListener('onclick', () => {window.location.replace=`https://www.naver.com`});
};

window.onload = hello;

function slideShow(){
    let index = 0;
    let i;
    const banner1 = document.querySelector(".banner1");
    const banner2 = document.querySelector(".banner2");
    
    for(i = 0 ; i < 2 ; i++){
        if(index === 0){
            banner2.style.display = "none";
            banner1.style.display = "inline-block";
        }

        index++;

        if(index === 1) {
            banner1.style.display = "inline-block";
            banner2.style.display = "none"; 
        }
        
        index--;
    }
}

window.onload = setInterval(slideShow, 1000);

