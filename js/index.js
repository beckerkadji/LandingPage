let navbar = document.getElementById("navbar")
const image = document.getElementsByClassName("image-to-show")

for(const i of image){
    i.classList.add("display")
}

for (const i in image){
    setTimeout(()=>image[i].classList.remove('display'),1000)
}

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


