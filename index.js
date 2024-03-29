
function hoverAnimation() {
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-box")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}
hoverAnimation()

//  <!----clickable----->

function clickAnimation() {
    let active= document.querySelector(".active")
let active2= document.querySelector(".active2")
let active3= document.querySelector('.active3')

let img = document.querySelector(".right")

active.addEventListener("click",function(){
    img.style.backgroundImage = `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfkowy5-22f1f09c-2fbc-46e9-af53-7939c2a31492.png/v1/fill/w_1920,h_1920,q_80,strp/batman__ai_art__by_3d1viner_dfkowy5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZrb3d5NS0yMmYxZjA5Yy0yZmJjLTQ2ZTktYWY1My03OTM5YzJhMzE0OTIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xSkxItSpFvYwDRTbNeccqnqh214Zm11Oz9DMD2CtodQ)`
})

active2.addEventListener("click",function(){
    img.style.backgroundImage = `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3d6bf0-f660-4ce1-a12b-6e1505215b69/dftdoz8-ea1eb416-965a-4084-b4c4-3f63d1581c51.jpg/v1/fill/w_1280,h_1280,q_75,strp/spider_man_ai_art_by_vgejackler_dftdoz8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2JhM2Q2YmYwLWY2NjAtNGNlMS1hMTJiLTZlMTUwNTIxNWI2OVwvZGZ0ZG96OC1lYTFlYjQxNi05NjVhLTQwODQtYjRjNC0zZjYzZDE1ODFjNTEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tzPZxiUvRbPF3yJZW7T8ewjHQyVVMFcan3_UTJJBssk)`
})

active3.addEventListener("click",function(){
    img.style.backgroundImage = `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76388df6-254d-4814-a752-7d703ca10aa7/dfx68ll-2db393f2-2ae0-4137-a4b2-fb3d93339020.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2Mzg4ZGY2LTI1NGQtNDgxNC1hNzUyLTdkNzAzY2ExMGFhN1wvZGZ4NjhsbC0yZGIzOTNmMi0yYWUwLTQxMzctYTRiMi1mYjNkOTMzMzkwMjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p9Q-43So3MuKMKMcQOtNaRE3aRmfAq9tM4P8GOcF0_I)`
})

active.addEventListener("click", function(){
    active.style.borderColor = "orangered"
    active2.style.borderColor = "gray"
    active3.style.borderColor = "gray"

    active.style.color = "white"
    active2.style.color = "gray"
    active3.style.color = "gray"
})    

active2.addEventListener("click",function(){
    active2.style.borderColor="orangered"
    active3.style.borderColor="gray"
    active.style.borderColor="gray"

    active2.style.color = "white"
    active.style.color = "gray"
    active3.style.color = "gray"
})

active3.addEventListener("click",function(){
    active3.style.borderColor="orangered"
    active2.style.borderColor="gray"
    active.style.borderColor="gray"

    active3.style.color="white"
    active2.style.color="gray"
    active.style.color="gray"
})
}
clickAnimation()

function movingCursor() {
    var videocon = document.querySelector(".video-container")
    var playbtn = document.querySelector(".play")
    videocon.addEventListener("mouseenter",function(){
       gsap.to(playbtn,{
           scale:1,
           opacity:1
       })
    })
   
    videocon.addEventListener("mouseleave",function(){
       gsap.to(playbtn,{
           scale:0,
           opacity:0
       })
    })
   
    videocon.addEventListener("mousemove",function(dets){
       gsap.to(playbtn,{
           left:dets.x -60,
           top:dets.y -50
       })
    })
}
movingCursor()
// <------------------Locomotive------------>