const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje:'Instancia1'
    },
    beforeUpdate(){
        console.log('Before Update',this.mensaje);
    },
    methods:{
        delReves(){
             this.mensaje = this.mensaje.split('').reverse().join('');
        },
        delReves2(){
                vm2.mensaje = vm2.mensaje.split('').reverse().join('');
        }
    }
})

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje:'Instancia 2 :)'
    }
})