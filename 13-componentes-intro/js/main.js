
Vue.component('ejemplo',{
 template: `<p>Ejemplo de tarea</p>`
});

Vue.component('ejemplo2',{
    template: `<p>Ejemplo de tarea2</p>`
});

Vue.component('mis-tareas',{
    props:['tareas'], //Para hacer referencia al componente :tareas
    template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
});

Vue.component('mis-tareas-sin-propriedad',{
    template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) =>{
            this.tareas = response.data;
        });
    },
    data() {
        return {
            tareas:[],
        }
     },
});

const vm = new Vue({
    el: 'main',
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) =>{
            this.tareasAjax = response.data;
        });
    },
    data: {
       tareasAjax:[],
       tareasLocales: [
           {title:"una tarea"},
           {title:"otra tarea"}
       ]
    },
   
})
