
window.addEventListener("DOMContentLoaded", () => {
   let nameDate = document.querySelector(".share");

   nameDate.addEventListener("click", showSocial);

   function showSocial() {
        nameDate.classList.toggle("btn-color");
        let btnColor = document.querySelector(".sharebutton");
        btnColor.classList.toggle("filer")
       let parentDiv = this.parentElement;
       let resetTriangle = document.querySelector(".triangle");

       let socialOverlay = document.querySelector(".new-share");
       parentDiv.classList.toggle("hide");
       socialOverlay.classList.toggle("show");

       if(resetTriangle !== null)
       {
           resetTriangle.remove();
       } else {
            let triangle = document.createElement("div");
             triangle.classList.add("triangle");
             socialOverlay.parentNode.insertBefore(triangle, socialOverlay.nextSibling);
       }
       
       
   }

   let socials = document.querySelector(".new-share");

   socials.addEventListener("click", hideSocial);

   function hideSocial(){
       let parentDiv = document.querySelector(".new-share");
       console.log(parentDiv)
       let newName = document.querySelector(".contacts");
       parentDiv.classList.toggle("show");

       newName.classList.toggle("hide")
    // console.log(newName)
   }
  
})

     
