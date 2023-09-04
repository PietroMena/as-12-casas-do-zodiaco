function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if((valor=="gemeos") || (valor=="Gemeos") || (valor=="Gêmeos") || (valor=="gêmeos")) {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("50px","50px");
        texto.innerHTML = "gg";
    }

    else if((valor=="escorpiao") || (valor=="Escorpiao") || (valor=="Escorpião") || (valor=="escorpião")){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("50px","150px");
    }
    
    else if((valor=="peixes") || (valor=="peixe") || (valor=="Peixes")){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="aries") || (valor=="Aries") || (valor=="ariés") || (valor=="Ariés")){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="virgem") || (valor=="Virgem")){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="capricornio") || (valor=="Capricornio") || (valor=="Capricórnio") || (valor=="capricórnio")){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="touro") || (valor=="Touro")){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="cancer") || (valor=="Cancêr") || (valor=="Cancer") || (valor=="cancêr")){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="leao") || (valor=="Leão") || (valor=="Leao") || (valor=="leão")){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="libra") || (valor=="Libra")){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="sagitario") || (valor=="Sagitário") || (valor=="Sagitario") || (valor=="sagitário")){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if((valor=="aquario") || (valor=="Aquário") || (valor=="Aquario") || (valor=="aquário")){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("50px","150px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("10px","10px");
    }
}