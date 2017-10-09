const vm = new Vue({
    el: 'main',
    data: {
        mensaje: "adrian",
        nuevaTarea: null,
        tareas: [
            {
                titulo: 'titulo1',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'titulo2',
                prioridad: true,
                antiguedad: 192
            },
            {
                titulo: 'titulo3',
                prioridad: false,
                antiguedad: 23
            }
        ],
    },
    methods: {
        agregarTarea() {
            // desde aquí hace referencia a la instancia de vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        },
        multiplicarPrecio() {
            console.log('hola');
            this.preciox2 = this.precio * 2;
        }
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('')
        },
        tareasConPrioridad(){
             return this.tareas.filter((tarea)=>
                 tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b)=> b.antiguedad<a.antiguedad);
        }
    }
})
