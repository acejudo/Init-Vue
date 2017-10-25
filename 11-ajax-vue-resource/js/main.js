const vm = new Vue({
    el: 'main',
    mounted(){
        console.log('Instancia Montada');
        this.cargarPersonas();
    },
    data: {
       personas:[]
    },
    methods: {
        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=50')
            .then((response) =>{
                console.log(response);
                this.personas = response.body.results;
            });
        }
    }
    
});
