
  
var crsr = document.querySelector("#cursor");
var b = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  b.style.left = dets.x - 250 + "px";
  b.style.top = dets.y - 250 + "px";
});

var imgdiv=document.getElementById("image1");
var bu1=document.getElementById("bu1");
var bu2=document.getElementById("bu2");
var bu3=document.getElementById("bu3");

function img2(){
    imgdiv.style.background="url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
    imgdiv.style.backgroundPosition="center";
    imgdiv.style.backgroundSize="cover";
    bu1.style.opacity="0";
    bu2.style.opacity="1";
    bu3.style.opacity="0";
}
function img1(){
    console.log("Wwwww");
    imgdiv.style.background="url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
    imgdiv.style.backgroundPosition="center";
    imgdiv.style.backgroundSize="cover";
    bu1.style.opacity="1";
    bu2.style.opacity="0";
    bu3.style.opacity="0";
}

function img3(){
    imgdiv.style.background="url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
    imgdiv.style.backgroundPosition="center";
    imgdiv.style.backgroundSize="cover";
    bu1.style.opacity="0";
    bu2.style.opacity="0";
    bu3.style.opacity="1";
}
gsap.to("#nav",{
    backgroundColor : "#000",
    height :"120px",
    duration : 0.5,
    scrollTrigger:{
        trigger :"#nav",
        scroller :"body",
        start : "top -10%",
        end :"top -11%",
        scrub :1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger :{
        trigger : "#main",
        scroller :"body",
        start : "top -25%",
        end : "top -75%",
        scrub : 2
    }
})

gsap.to("#left-image",{
    left:"200px",
    top:"70px",
    scrollTrigger:{
        trigger:"#left-image",
        scoller:"#page5",
        start:"top 60%",
        end :"top -10%",
        scrub:2
    }
})
gsap.to("#right-image",{
    right:"300px",
    bottom:"50px",
    scrollTrigger:{
        trigger:"#right-image",
        scoller:"#page5",
        start:"top 100%",
        end :"top -100%",
        scrub:2
    }
})
gsap.to("#paragraph",{
    width :"60%",
    height:"30%",
    fontSize:"25px",
    scrollTrigger:{
        trigger:"#paragraph",
        scroller:"body",
        start:"top 70%",
        end :"bottom 40%",
        // markers:true,
        scrub:1
    }
})
