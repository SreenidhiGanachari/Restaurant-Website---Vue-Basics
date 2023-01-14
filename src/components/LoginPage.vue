<template>
    <img  class="logo" src="../assets/logo.png"/>
    <h1>Login Page</h1>
    <div class="register">
     
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'LoginPage',
   
    data(){
        return{
           
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result  = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`,{
                email:this.email,
                password:this.password,
                
               

            });
            console.log(result);
            if(result.status==200){
            
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'HomeName'})
            }
            
        },
        mounted(){
        let user=localStorage.getItem('user-info');
       if(user){
        this.$router.push({name:'HomeName'});
       }
        }
    }
}
</script>

<style>
.logo{
    width:250px;
    height: 250px;
}
.register input{
    height: 40px;
    width: 300px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}

.register button{
    width:320px;
    height:40px;
    background-color: skyblue;
    border: 1px solid skyblue;
    color:aliceblue;
    cursor: pointer;
}
</style>