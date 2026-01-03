const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll("p") 

const estilosBody = getComputedStyle(document.body)
const bgcolor = estilosBody.backgroundColor

for (let i in ps) {
    ps[i].style.backgroundColor = bgcolor
    ps[i].style.color = "#FFFFFF"

}





