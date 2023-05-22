"use strict";

//Listener Global
addEventListener("click", (evt)=>{
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");
    
    //Recuperar o conteúdo dos campos e adicionar em um OBJETO
    //CRIANDO O OBJETO USUARIO-LOGADO
    console.log("Criou o obj!");
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    if(evt.target.id == "btnSubmit"){
        
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            labelUser.setAttribute("style","color:#00ff00;");
            labelPass.setAttribute("style","color:#00ff00;");

            //Se preencheu a qtd de caractéres necessária agora vamos validar o nomeUsuário e a senhaUsuário
             if(usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado == "123456"){
                alert("VALIDADO!");
             }else{
                alert("NÃO VALIDADO!");
             }

        }else{
            labelUser.setAttribute("style","color:#ff0000;");
            labelPass.setAttribute("style","color:#ff0000;");
        }



   }


});