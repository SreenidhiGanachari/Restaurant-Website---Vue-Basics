<template>
    <img  class="logo" src="../assets/logo.png"/>
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result  = await axios.post("http://localhost:3000/user",{
                email:this.email,
                password:this.password,
                name:this.name
               

            });
            console.log(result);
            if(result.status==201 && result.data.length>0){
                alert("Signed up successfully");
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'LoginPage'})
            }
        }
    }
}
</script>

<style>

</style>