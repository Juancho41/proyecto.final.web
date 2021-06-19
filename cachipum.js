
function cachipum(jugador) {
    let opciones = ['piedra', 'papel', 'tijera'];

    let jugadaCompu = opciones[Math.floor(Math.random() * opciones.length)];

    console.log(jugadaCompu);
    let resultado;

    if (jugadaCompu == 'tijera') {
        if (jugador == 'tijera') {
            resultado = 'empate';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Compu';
            
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Jugador';
        }
    }
    if (jugadaCompu == 'papel') {
        if (jugador == 'tijera') {
            resultado = 'Gana Jugador';
        }
        if (jugador == 'papel') {
            resultado = 'empate';
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Compu';
        }
    }
    if (jugadaCompu == 'piedra') {
        if (jugador == 'tijera') {
            resultado = 'Gana Compu';
        }
        if (jugador == 'piedra') {
            resultado = 'empate';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Jugador';
        }
    }
    console.log(resultado)
    let contenido = document.getElementById('ejemplo').innerHTML = jugadaCompu + '-------> ' + resultado;
    console.log(resultado)
}




