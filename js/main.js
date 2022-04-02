listaNome = [];
let listaAtual ; 
function nomeList(){
    conteudo = document.getElementsByClassName("lista");
        var nomeLista=prompt("Digite o nome da lista");
            listaNome.push(nomeLista);
            listar(nomeLista);
}

function listar(nome){
    let container = document.getElementById("container");
    container.innerHTML +="<p onclick='carregar()' class='w3-painel w3-red w3-padding lista'>"+nome+"</p>"; 
}

function intemLista(){
    let addItem=document.getElementById("ul");
    var nome= document.getElementById("nome").value;
    var quantidade= document.getElementById("quantidade").value;
    var opcoes= document.getElementById("opcoes").value;

    if(nome != "" && quantidade != ""){
        addItem.innerHTML +=" <li onclick='riscar()'  class='w3-margin-bottom w3-red'>"+nome+" || quantidade: "+quantidade+"  "+ opcoes+" <span onclick='fechar()'  class='w3-houver-red'>X</span></li>";
        var nome= document.getElementById("nome").value="";
        var quantidade= document.getElementById("quantidade").value="";
    }
}


function fechar(){
    const close=document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity= 0;
            setTimeout(()=>{
                close[i].parentElement.style.display= "none";
                close[i].parentElement.remove();
            },500)

        })
    }
}


function riscar(){
    const risca= document.querySelectorAll('li');
    for(let i=0;i<risca.length;i++){
        risca[i].addEventListener('click',()=>{
           risca[i].classList.add("riscar");
        })
    }
}




