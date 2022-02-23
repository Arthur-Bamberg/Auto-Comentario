function copiar(){ 
    const hora= new Date().getHours()
    const txt= document.getElementById('res')
    if(hora<12){
        txt.innerHTML = `Bom dia!<br>Caso haja algo de errado, por favor me informe.<br>Abraços!`
    }else if(hora<18){
        txt.innerHTML = `Boa tarde!<br>Caso haja algo de errado, por favor me informe.<br>Abraços!`
    }else{
        txt.innerHTML = `Boa noite!<br>Caso haja algo de errado, por favor me informe.<br>Abraços!`
    }
}