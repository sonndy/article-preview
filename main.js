
window.addEventListener("DOMContentLoaded", () => {
   let nameDate = document.querySelector(".share");

   nameDate.addEventListener("click", showSocial);

   function showSocial() {
       let parentDiv = this.parentElement;
       let socialOverlay = document.querySelector(".new-share");
       parentDiv.classList.toggle("hide");
       socialOverlay.classList.toggle("show");
   }

   let socials = document.querySelector(".new-share");

   socials.addEventListener("click", hideSocial);

   function hideSocial(){
       let parentDiv = this.parentElement.lastElementChild;
       let newName = document.querySelector(".contacts");
       parentDiv.classList.toggle("show");

       newName.classList.toggle("hide")
    // console.log(newName)
   }
  
})

     
