<template>
    <div class="container">
        <div class="login">
            <div class="imagen text-center">
                <img src="../assets/User.svg" alt="User">
            </div>
      <h2 class="text-center text-light mb-4">Iniciar sesión</h2>
      <form @submit.prevent="submitForm" action="">
          <input class="input d-block mx-auto" type="text" v-model="username" placeholder="Nombre de usuario">
            <input class="input d-block mx-auto mt-4" type="text" v-model="password" placeholder="Contraseña">
            <div  v-if="errors.length">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </div>
            <button class="boton-inicio d-block mx-auto mt-4 ">Iniciar sesión</button>
            
            <hr>
            
      </form>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'LogIn',
data() {
    return {
        username:'',
        password:'',
        errors:[]
    }
},
mounted() {
    document.title= 'Iniciar sesión | ComicStore'
},
methods: {
    async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                username: this.username,
                password: this.password
            }
            await axios
                .post("/api/v1/token/login/", formData)
                .then(response => {
                    const token = response.data.auth_token
                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    const toPath = this.$route.query.to || '/car'       
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Algo sucedió, por favor intentelo de nuevo')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>

<style>
.input{
    padding: 0.8rem;
    width: 40%;
    border-radius: 0.8rem;
    outline: none;
    border: none;
}
.login{
    width: 50%;
    margin-top: 2rem;
    margin: auto;
    background-color: #487B94;
    border-radius: 0.8rem;
    margin-top: 2rem;
    box-shadow: 0px 9px 32px -1px #236482;
    margin-bottom: 2rem;
}
.login h2{
font-family: 'Poppins', sans-serif;
font-weight: 600;

}
.imagen img{
    width: 10rem;
}
.boton-inicio{
    padding: 0.8rem;
    width: 40%;
    background-color: #FFC107;
    border-radius: 0.8rem;
    border: none;
    outline: none;
}
</style>