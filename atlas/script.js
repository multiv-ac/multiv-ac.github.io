//iframe

let contenedor = document.querySelector(".video")
let cont_b = document.querySelector(".boton")
let vid = ""
let x = ""

sessionStorage.setItem('iframe', 'false')

function checkFrame(d){
  if (sessionStorage.getItem('iframe') != 'true'){
    makeFrame(d)
  } else {
    closeFrame()
    makeFrame(d)
  }
}

function makeFrame(d){
    vid = document.createElement("IFRAME");
    let openLink = d.getAttribute("data-iframe-src")
    vid.setAttribute("src", openLink)
    vid.style.width = "inherit"
    vid.style.height = "inherit"
    contenedor.appendChild(vid)
    x = document.createElement("P");
    x.innerText = "x";
    // x.innerHTML = "x";
    x.setAttribute("onclick", "closeFrame()")
    x.setAttribute("id", "boton")
    cont_b.appendChild(x)
    sessionStorage.setItem('iframe', 'true')
}


function closeFrame(){
    contenedor.removeChild(vid)
    cont_b.removeChild(x)
    sessionStorage.setItem('iframe', 'false')
}