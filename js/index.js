let imageSrc = [
    "./assets/animalsImg/elephant.jpg",
    "./assets/animalsImg/babyrhino.jpg",
    "./assets/animalsImg/buffalo.jpg",
    "./assets/animalsImg/bird.jpg",
    "./assets/animalsImg/tiger.jpg",
    "./assets/animalsImg/kazirangaview.jpg",
    "./assets/animalsImg/deer.jpg",
    "./assets/animalsImg/monkey.jpg",
]

let currentIdx = 0;
let length = imageSrc.length;

let left = document.getElementById("left");
let right = document.getElementById("right");
let img = document.querySelector("#scrollImgContainer img")

function goLeft() {
    currentIdx = currentIdx <= 0 ? length - 1 : currentIdx - 1;
    img.src = imageSrc[currentIdx];
}


function goRight() {

    currentIdx = currentIdx >= length - 1 ? 0 : currentIdx + 1
    img.src = imageSrc[currentIdx];
}

left.addEventListener("click", () => goLeft())
right.addEventListener("click", () => goRight())





// Logic for Rendering Reviews and Adding Reviews to Database


let stars = document.querySelectorAll('.star')
let submitbtn = document.querySelector('.buttonContainer button');
let  starNumber = 0;

stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
        starNumber = 5 - idx ; 
        console.log(starNumber)
    })
})





function addReview() {
    console.log('clicked');
    fetch("https://review-hj8b.onrender.com/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            'name': document.getElementById('Name').value,
            'comment': document.getElementById('comment').value,
            'stars' : starNumber
        }),
    }).then(res => res.json())
        .then(data => {
                alert('Review added successfully');
                location.reload();
                console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}


function fetchReview() {

    fetch("https://review-hj8b.onrender.com/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            data = data['data']
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                let stars = "";
                for (let j = 0; j < data[i].stars; j++)
                    stars += "⭐";
                document.getElementById('reviews').innerHTML += `
    <div class="review">
        <div class="userInfo">
            <img src="./assets/icons/profile.svg" alt="">
            <span class='name'>${data[i].name}</h4>
        </div>
        <p> 
            <span class='star'>${stars}</span>
            <span class='date'>${data[i].date.slice(0, 16)}</span>
        </p>
        <p class='comment'>${data[i].comment}</p>
    </div>
    `;
            }
        })
        .catch(err => {
            console.log(err);
        })

}

submitbtn.addEventListener('click', addReview);


window.addEventListener('DOMContentLoaded', fetchReview());
