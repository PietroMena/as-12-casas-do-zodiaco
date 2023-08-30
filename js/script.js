function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("50px","150px");
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("50px","150px");
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="aries"){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="leao"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("50px","150px");
    }
    else if(valor=="aquario"){
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