const vm = new Vue({
    el: 'main',
    data: {
        busqueda :'',
        minpuntuacion : 50,
        juegos: [
            {
                titulo: 'monkey island',
                genero: 'rol',
                puntuacion: 60
            },
            {
                titulo: 'civilization',
                genero: 'arcade',
                puntuacion: 70
            },
            {
                titutitulolo: 'street fighter',
                genero:'accion',
                puntuacion: 23
            }
        ],
    },
    computed:{
        juegosTop(){
            return this.juegos.filter((juego)=>
            juego.puntuacion > this.minpuntuacion);
        },
        buscarJuego(){
            return this.juegosTop.filter((juego) => 
            juego.titulo.includes(this.busqueda));
        }
    }
})
