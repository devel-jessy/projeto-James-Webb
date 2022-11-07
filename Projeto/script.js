let contador = 1;

// para alterar alguma coisa
setInterval( function(){
    document.getElementById('slide' + contador).checked = true

    contador = contador + 1;

    if(contador > 5 ){
        contador = 1;
    }
}, 3000);
