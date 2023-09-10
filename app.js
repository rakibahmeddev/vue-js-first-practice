const app = Vue.createApp({
    //data, function, click event, template etc we can use

    // template: "<h1> Hello from template</h1>"

    data(){
        return {
            // variable, array, object function etc thakte pare 
          title: 'this is title',
          name:  'John Doe',
          age: 30,
        }
    },

    // this is for writing function and it returns object
    methods:{
        // we can write function inside object/methods

        changeTitle(){
            // console.log('click new') // after click on the button it will show into the console

            this.title = 'New title from changeTitle Function'
        }

    }
});


app.mount("#app")