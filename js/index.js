let navbar = document.getElementById("navbar")

window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        navbar.className = "slideUp"
    }else{
        navbar.className = "slideDown"
    }
})
let collection = document.getElementById("collection")

collection.addEventListener('click', ()=>{
    alert('Hello sdfdf')
})