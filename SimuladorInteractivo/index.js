




function notaFinal() {
    let primerTrimestre = parseInt(prompt('nota del primer trimestre'));
    let segundoTrimestre = parseInt(prompt('nota del segundo trimestre'));
    let tercerTrimestre = parseInt(prompt('nota del tercer trimestre'));

        let nota = primerTrimestre + segundoTrimestre + tercerTrimestre;

        let resultado = nota / 3;

        return alert(`Tu Nota final es de ${resultado}`) 
}

notaFinal();