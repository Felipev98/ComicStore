<template>
  <div>
      <div class="login">
                      <div class="imagen text-center">
                <img src="../assets/User.svg" alt="User">
            </div>
      <h2  class="text-center text-light mb-4">Iniciar sesión</h2>
      <form @submit.prevent="submitForm" action="">
          <input class="input d-block mx-auto" type="text" v-model="username" placeholder="Nombre de usuario">
            <input class="input d-block mx-auto mt-4" type="text" v-model="password" placeholder="Contraseña">
            <input class="input d-block mx-auto mt-4" type="text" v-model="password2" placeholder="Repetir contraseña">
            <div  v-if="errors.length">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </div>
            <button class="boton-inicio d-block mx-auto mt-4 ">Registrarse</button>
            <hr>
            <div class="boton-login">
            <router-link to="/log-in">Inicio de sesión</router-link>
            </div>
      </form>

  </div>
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
.boton-login{
text-decoration: none;
color: white;
text-align: center;
padding: 0.8rem;
width: 40%;
margin: auto;
background-color:#222D33 ;
transform: translateY(-10px);
border-radius: 0.8rem;
}
.boton-login a{
    color: white;
text-decoration: none;
}
</style>