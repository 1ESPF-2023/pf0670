"use strict";

//LISTA DE USUÁRIOS
let listaDeUsuario = [

    {
        nomeCompleto : "José das Couves",
        nomeUsuario : "jose",
        senhaUsuario : "123456" 
    },
    {
        nomeCompleto : "Ruivão Lindão",
        nomeUsuario : "ruivo",
        senhaUsuario : "123456" 
    },
    {
        nomeCompleto : "Filipino de Deus",
        nomeUsuario : "fili",
        senhaUsuario : "123456" 
    },
    {
        nomeCompleto : "Pedro José",
        nomeUsuario : "pepe",
        senhaUsuario : "123456" 
    },
    {
        nomeCompleto : "Ricardito Nelson",
        nomeUsuario : "rico",
        senhaUsuario : "123456" 
    }
];




//Listener Global
addEventListener("click", (evt)=>{
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");
    
    const msgStaus = document.querySelector("#msg");

    //Criando o OBJETO USUARIO-VALIDADO
    let usuarioValidado = {};

    //Recuperar o conteúdo dos campos e adicionar em um OBJETO
    //CRIANDO O OBJETO USUARIO-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    if(evt.target.id == "btnSubmit"){
        
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            labelUser.setAttribute("style","color:#00ff00;");
            labelPass.setAttribute("style","color:#00ff00;");

            //Se preencheu a qtd de caractéres necessária agora vamos validar o nomeUsuário e a senhaUsuário

            //Chamando a lista de usuários e iterando para criar a validação para cada usuário contido nela.
            listaDeUsuario.forEach( (usuario)=>{

                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                    usuarioValidado = usuario;
                }
                
            });


            if(usuarioValidado.nomeUsuario != undefined){
                msgStaus.setAttribute("style","color:#00ff00;");
                msgStaus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login com Sucesso!!</strong></span>`;

                //Redirect
                setTimeout(()=>{
                    window.location.href = "../sucesso.html";
                },3000);

            }else{
                msgStaus.setAttribute("style","color:#ff0000;");
                msgStaus.innerHTML = "<span><strong>Login ou senha incorretos...</strong></span>";
            }

        }else{
            labelUser.setAttribute("style","color:#ff0000;");
            labelPass.setAttribute("style","color:#ff0000;");
        }



   }


});