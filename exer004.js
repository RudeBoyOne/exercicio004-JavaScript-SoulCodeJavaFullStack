// Crie um site com um botão e uma imagem de uma lâmpada apagada. Quando se clicar no botão e a imagem for uma lâmpada apagada, você trocará para a imagem de uma lâmpada acesa. Quando se clicar no botão e a imagem for uma lâmpada acesa, você trocará para a imagem de uma lâmpada pagada.

const btn = document.getElementById("btn")
const img1 = document.getElementById("img")

btn.addEventListener('click', () => {

    console.log(btn)
    if(btn.innerText === "ACENDER"){
        btn.innerText = "APAGAR"
        img1.src = "/src/img/lampada-acesa-png.png"
    }else{        
        btn.innerText = "ACENDER"
        img1.src = "/src/img/lampada-apagada-png.png"
    }

})