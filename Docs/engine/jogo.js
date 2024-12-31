
// Pegando a altura e largura da página

var altura = 0;
var largura = 0;
var vidas = 1;

function ajusta_tamanho_palco_jogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura,altura)
}

ajusta_tamanho_palco_jogo()


function posicao_aleatoria(){

    //Removendo mosquito anterior(caso exista)
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            alert('Terminou o Jogo')

        }else{

            document.getElementById('vida_' +vidas).src = 'Assets/Imagens/coracao_vazio.png';
            vidas++;

        }
        

    }




    // Criando uma posição aleatória para o mosquito
    
    var posicao_X = Math.floor(Math.random()*largura) -90;
    var posicao_Y = Math.floor(Math.random()*altura) -90;

    posicao_X = posicao_X < 0 ? posicao_X = 0: posicao_X 
    posicao_Y = posicao_Y < 0 ? posicao_Y = 0: posicao_Y 
  
    
    //Criar o elemento HTML
    
    var mosquito = document.createElement('img');
    mosquito.src = 'Assets/Imagens/mosquito.png';
    mosquito.className = tamanho_aleatorio() + ' ' +lado_aleatorio()
    mosquito.style.left =  posicao_X +'px';
    mosquito.style.top = posicao_Y +'px';
    mosquito.style.position = 'absolute';
    mosquito.id ='mosquito'
    
    mosquito.onclick = function(){
        this.remove();
    }
    

  
    document.body.appendChild(mosquito)

    console.log(lado_aleatorio());
    
}


//Criando Mosquitos com tamanhos variados

function tamanho_aleatorio(){
    var classe = Math.floor(Math.random()*3)
    
    switch(classe){
        case 0:
            return 'mosquito_1'
        case 1:
            return 'mosquito_2'
        case 2:
            return 'mosquito_3'

    }
}

//Criando lados aleatórios

function lado_aleatorio(){
    var classe = Math.floor(Math.random()*4)
    
    switch(classe){
        case 0:
            return 'lado_A'
        case 1:
            return 'lado_B'
        case 2:
            return 'lado_C'
        case 3:
            return 'lado_D'
    }
}



