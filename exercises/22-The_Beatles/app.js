function sing() {
    let primeraParte = "let it be, "
    let segundaParte = "there will be an answer, let it be, "
    let terceraParte = "whisper words of wisdom, let it be"
    
    function repetirPrimeraParte() {
        let resultado = "";
        for (let i = 0; i < 4; i++) {
            resultado += primeraParte;
        } 
        return resultado;
    }

    let mensajeCompleto = "";

    mensajeCompleto += repetirPrimeraParte();

    mensajeCompleto += segundaParte;
    
    mensajeCompleto += repetirPrimeraParte();

    mensajeCompleto += terceraParte;

    return mensajeCompleto

}

//Your code above ^^^

console.log(sing());