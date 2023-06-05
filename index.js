var btn = document.querySelector('button'); 
  let w = window.innerWidth;
  let h = window.innerHeight; 

function sayHello() {
   w = window.innerWidth;
   h = window.innerHeight; 
   var hp = document.querySelector("h1");
   var dp = document.querySelector(".div");
   if (w < 1400 w>840) {
     dp.style.display = "flex";
     hp.innerHTML = "Are You Dumb ?";
   } else {
     dp.style.display = "none";
     hp.innerHTML = "Change The display Size to See Content";
   }
  setTimeout(sayHello, 1000);
}
sayHello();


btn.addEventListener("mouseover",async function(e) {
   btn.style.top = 1-e.y*0.9+'px'; 
   btn.style.left = 1 -e.x * 0.9 + "px"; 
})


var ht = document.querySelector("button");
  ht.addEventListener("click", function (e) {
    if (ht.innerHTML === "YES") {
             alert("OHHH goood uk about it good good !!");
    }
    ht.innerHTML = "YES";
  });


  var t = document.querySelector("#button2");
  t.addEventListener("click",function (params) {
       alert("OHHH goood uk about it good good !!");
  })


