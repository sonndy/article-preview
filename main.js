console.log("Sonndysdfg");

window.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.querySelector(".share");


    shareBtn.addEventListener("click", showSocial);
    

    function showSocial(){
        const parentDiv = this.parentElement;
        parentDiv.classList.toggle("hide");

        const mainArticle = parentDiv.parentElement;
        const socialsOverlay = mainArticle.parentElement.nextElementSibling;

        socialsOverlay.classList.toggle("show");
    }

    const overlay = document.querySelector(".new-share div");

    overlay.addEventListener("click", hideSocial);

    function hideSocial() {
        const newParentElement = this.parentElement;


        newParentElement.classList.remove("show");

        const normalContact = newParentElement.previousElementSibling.lastElementChild.lastElementChild;

        console.log(normalContact);

        normalContact.classList.remove("hide");

        // console.log(newParentElement.previousElementSibling.lastElementChild)
    }

    
})