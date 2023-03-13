function hello(){
    const $search = document.querySelector("#search");
    let value = $search.value;
    console.log(value);
};

(function(){

    let i;
    const x = document.getElementsByClassName("banner");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
       banner[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > banner.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }   
    banner[index-1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 4000);   //함수를 4초마다 호출

})();
