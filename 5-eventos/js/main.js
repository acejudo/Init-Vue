const vm = new Vue({
    el: 'main',
    data: {
        precio:0,
        preciox2:0,
        active: false,
        nuevaTarea: null,
        tareas: [
            'Tarea 1',
            'Tarea 2'
        ],
    },
    methods: {
        agregarTarea() {
            // desde aquí hace referencia a la instancia de vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        },
        multiplicarPrecio(){
            console.log('hola');
            this.preciox2 = this.precio * 2;
        }
    }
})
