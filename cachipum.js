let puntajeCompu = 0;
let puntajeJugador = 0;




function cachipum(jugador) {
    let opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];

    let jugadaCompu = opciones[Math.floor(Math.random() * opciones.length)];

    console.log(jugadaCompu);
    let resultado;

    if (jugadaCompu == 'tijera') {
        document.getElementById('imgCompu').src = "./imagenes/scissors.png";
        if (jugador == 'tijera') {
            resultado = 'Empate!';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'lagarto') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'spock') {
            resultado = 'Gana Jugador!';
        }

    }

    if (jugadaCompu == 'papel') {
        document.getElementById('imgCompu').src = "./imagenes/papel.png";
        if (jugador == 'tijera') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'papel') {
            resultado = 'Empate!';
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'lagarto') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'spock') {
            resultado = 'Gana Compu!';
        }
    }

    if (jugadaCompu == 'piedra') {
        document.getElementById('imgCompu').src = "./imagenes/rock.png";
        if (jugador == 'tijera') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'piedra') {
            resultado = 'Empate!';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'lagarto') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'spock') {
            resultado = 'Gana Jugador!';
        }
    }

    if (jugadaCompu == 'lagarto') {
        document.getElementById('imgCompu').src = "./imagenes/lizard.png";
        if (jugador == 'spock') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'lagarto') {
            resultado = 'Empate!';
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'tijera') {
            resultado = 'Gana Jugador!';
        }
    }

    if (jugadaCompu == 'spock') {
        document.getElementById('imgCompu').src = "./imagenes/spock.png";
        if (jugador == 'tijera') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'spock') {
            resultado = 'Empate!';
        }
        if (jugador == 'papel') {
            resultado = 'Gana Jugador!';
        }
        if (jugador == 'piedra') {
            resultado = 'Gana Compu!';
        }
        if (jugador == 'lagarto') {
            resultado = 'Gana Jugador!';
        }
    }
    if (resultado == 'Gana Jugador!') {
        puntajeJugador++;
    }
    if (resultado == 'Gana Compu!') {
        puntajeCompu++;
    }
    console.log(resultado)
    

    document.getElementById('resultadoMano').innerHTML = `<span>${resultado}</span>`;
    document.getElementById("resultadoMano").classList.add("badge");
    document.getElementById("resultadoMano").classList.add("rounded-pill");
    document.getElementById("resultadoMano").classList.add("fs-1");




    
    if (resultado == 'Gana Jugador!') {
        
        
        document.getElementById("resultadoMano").classList.remove('bg-warning');
        document.getElementById("resultadoMano").classList.remove('bg-danger');
        document.getElementById("resultadoMano").classList.add("bg-success");
        
    }
    if (resultado == 'Empate!') {
        
        document.getElementById("resultadoMano").classList.add("bg-warning");
        document.getElementById("resultadoMano").classList.remove('bg-success');
        document.getElementById("resultadoMano").classList.remove('bg-danger');
        
    }
    if (resultado == 'Gana Compu!') {
        
        document.getElementById("resultadoMano").classList.add("bg-danger");
        document.getElementById("resultadoMano").classList.remove('bg-warning');
        document.getElementById("resultadoMano").classList.remove('bg-success');
        
    }


    document.getElementById('tabCompu').innerHTML = `<span>${puntajeCompu}</span>`;
    document.getElementById('tabJugador').innerHTML = `<span>${puntajeJugador}</span>`;
    





    console.log(resultado)
}




