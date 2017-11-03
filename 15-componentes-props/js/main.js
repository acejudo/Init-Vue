Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        // Las props son accesibles desde this (proxy)
        //console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template: `<div><h1> {{ nombre }} </h1><button @click="cambiarProp">Cambiar Prop</button> {{autorToUpper}}</div>`,
    methods: {
        cambiarProp() {
            this.autorToUpper = this.nombre.toUpperCase();
        }
    },
    data() {
        return {
            autorToUpper: this.autorToUpper,
        }
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'Juan Andrés',
        autorToUpper: null,
    },
});