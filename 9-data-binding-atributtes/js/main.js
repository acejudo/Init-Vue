const vm1 = new Vue({
    el: 'main',
    data: {

        tareas: [
            {
                titulo: "Hacer la cama",
                completado: false
            },
            {
                titulo: "Hacer la compra",
                completado: false
            },
            {
                titulo: "Apprender Vue",
                completado: false
            },
        ]
    },
    
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea =>tarea.completado));
        }
    }
})

