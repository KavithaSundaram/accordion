
let contents = document.querySelectorAll(".content")
contents.forEach((item)=> {
    item.onclick = () =>{
        contents.forEach((sub) =>{
            sub.classList.remove("active")
        })
        item.classList.add("active")
    }    
})
