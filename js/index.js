let imageSrc = [
    "./elephant.jpg",
    "./babyrhino.jpg",
    "./buffalo.jpg",
    "./bird.jpg",
    "./elephant2.jpg",
    "./kazirangaview.jpg",
    "./deer.jpg",
    "./monkey.jpg",
]

let currentIdx = 0;
let length = imageSrc.length;

let left = document.getElementById("left");
let right = document.getElementById("right");
let img = document.getElementById("scrollImg")

function goLeft(){
    currentIdx = currentIdx <= 0 ? length-1 : currentIdx-1;
    img.src = imageSrc[currentIdx];
}


function goRight(){
    
    currentIdx = currentIdx >= length-1 ? 0 : currentIdx + 1
    img.src = imageSrc[currentIdx];
}

left.addEventListener( "click" , () => goLeft())
right.addEventListener( "click" , () => goRight())