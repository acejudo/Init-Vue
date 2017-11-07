Vue.component('componentenombre',{
    props:['nombrehijo'],
    template: `<div>   <a href="#" @click="modificarnombre">Modificar nombre padre</a>  {{nombrehijo}}</div>`,
    methods: {
        modificarnombre() {
            this.$emit('modificacionnombre');
        }
    } 
});

Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                        <a href="#" @click="ocultarWidget">Cerrar</a>
                        <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
    methods: {
        ocultarWidget() {
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        nombrepadre: "pepe",
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    }
});