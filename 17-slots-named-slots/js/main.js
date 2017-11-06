Vue.component('alerta', {
    props: ['tipo', 'posicion', 'nombre'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
            {{nombre}}
                <header class="alerta__header">
                <slot name="nombreSlot">{{nombre}} </slot>
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
});

new Vue({
    el: 'main',
    data:{
        nombre:'model'
    }
});