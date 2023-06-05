var btn = document.querySelector('button'); 
btn.addEventListener("mouseover",async function(e) {
   btn.style.top = 1-e.y*0.9+'px'; 
   btn.style.left = 1 -e.x * 0.9 + "px"; 
})

var ht = document
  .querySelector("button");
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


