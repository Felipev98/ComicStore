<template>
  <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="submitForm" action="">
          <input type="text" v-model="username" placeholder="Nombre de usuario">
            <input type="text" v-model="password" placeholder="Contraseña">
            <input type="text" v-model="password2" placeholder="Repetir contraseña">
            <div  v-if="errors.length">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </div>
            <button class="btn btn-dark">Registrarse</button>
            <hr>
            <router-link to="/log-in" >Iniciar sesión</router-link>
      </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'SignUp',
data() {
    return {
        username:'',
        password:'',
        password2:'',
        errors:[]
    }
},
methods: {
    submitForm(){
        if(this.username === '' || this.username.length < 6){
            this.errors.push('Su nombre de usuario es demasiado corto')
        }
        if(this.password === '' || this.password.length < 6 ){
            this.errors.push("La contraseña es demasiado corta")
        }
        if(this.password !== this.password2){
            this.errors.push("Las contraseñas no coinciden")
        }
        if (!this.errors.length){
            const formData ={
                username: this.username,
                password: this.password
            }
            axios
                .post("/api/v1/users/",formData)
                .then(response =>{
                alert("Usuario creado con")    
                this.$router.push('/log-in')
     })
     .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Algo ocurrió, por favor intenta de nuevo')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>

<style>

</style>