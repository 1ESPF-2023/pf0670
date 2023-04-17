
//Recuperando o botão com o getElementById
const botao = document.getElementById("btn-1");

//Recuperar um item especifico com a
//função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//Recuerar uma lista de elementos com a função
//querySelecorAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{

    if (item.textContent == "Item-15") {
        let meuItem = item;
        console.log(`Item selecionado : ${meuItem.textContent}`);
        meuItem.textContent = "TÁ DOMINADO!!"   
    }
})

//Para estudar
//setTimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor




