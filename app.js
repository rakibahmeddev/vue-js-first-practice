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
    }
});


app.mount("#app")