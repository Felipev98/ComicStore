<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="submitForm" action="">
          <input type="text" v-model="username" placeholder="Nombre de usuario">
            <input type="text" v-model="password" placeholder="Contraseña">
            <div  v-if="errors.length">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </div>
            <button class="btn btn-dark">Iniciar sesión</button>
            <hr>
      </form>

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

</style>