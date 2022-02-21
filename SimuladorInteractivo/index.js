



function notaFinal() {
    let primerTrimestre =  parseInt(prompt('nota del primer trimestre'));
    let segundoTrimestre = parseInt(prompt('nota del segundo trimestre'));
    let tercerTrimestre = parseInt(prompt('nota del tercer trimestre'));
    
    
    const nota = [primerTrimestre, segundoTrimestre, tercerTrimestre];
    let sum = 0;
    
    for (let i = 0; i < nota.length; i++) {
        sum += nota[i];
        
    }

    let final = sum / 3
        console.log(final);
    
        if (final < 5.9) {
    
            alert(`su nota es ${final} por lo tanto esta desaprobado`) 
    
        } else {
    
            alert(`su nota es de ${final} por lo tanto esa aprobado`) 
    
        }
    
 }

notaFinal();
