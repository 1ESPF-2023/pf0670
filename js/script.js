
//Recuperando o botão com o getElementById
// const botao = document.getElementById("btn-1");

//Recuperar um item especifico com a
//função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//Recuerar uma lista de elementos com a função
//querySelecorAll
// const seletores = document.querySelectorAll("li");
 
// seletores.forEach((item)=>{

//     if (item.textContent == "Item-15") {
//         let meuItem = item;
//         console.log(`Item selecionado : ${meuItem.textContent}`);
//         meuItem.textContent = "TÁ DOMINADO!!"   
//     }
// })

//Para estudar
//setTimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor
//Math.Round

// let tmp = "";

// function mudarCor() {

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout(mudarCor, 1000);
// }

// mudarCor();



// function mudaBanner() {
//     const imgElement1 = document.querySelector(".banner-1 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement1.src = `./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner2 , 2000);
// }

// function mudaBanner2() {
//     const imgElement2 = document.querySelector(".banner-2 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement2.src = `./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner , 2000);
// }

// mudaBanner();

function mudaBanner() {
    const imgElement = document.querySelector(".banner-1 img");
    // console.log(imgElement1);
    let nr = Math.ceil(Math.random() *3);
    // imgElement1.src = "./img/banner-lateral-"+nr+".png";
    imgElement.src = `./img/banner-lateral-${nr}.png`;

    const imgElement2 = document.querySelector(".banner-2 img");
    // console.log(imgElement1);
    nr = Math.ceil(Math.random() *3);
    // imgElement1.src = "./img/banner-lateral-"+nr+".png";
    imgElement2.src = `./img/banner-lateral-${nr}.png`;

    setTimeout(mudaBanner , 2000);
}

mudaBanner();

// const botao = document.querySelector("button");
const botoes = document.querySelectorAll("button");

botoes.forEach( (botao)=>{
    botao
} );

botao.addEventListener("click", function(){
    if(this.textContent == "LIGAR"){
        const imgElement = document.querySelector("img[alt='Lampada apagada']");
        imgElement.src = "./img/pic_bulbon.gif";
        imgElement.alt = "Lampada acesa";
        this.textContent = "DESLIGAR";
    }else{
        const imgElement = document.querySelector("img[alt='Lampada acesa']");
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Lampada apagada";
        this.textContent = "LIGAR";
    }
});

