<template>
 <div class="nav">
    <router-link to="/">Home</router-link>
    <a v-on:click="add" href="#">Add Restaurant</a>
    <a v-on:click="update"  href="#">Update Restaurant</a>
    <a v-on:click="logout" href="#">Logout</a>
 </div>
</template>

<script>
export default{
    name:'MainMenu',
    methods:{
logout(){
   localStorage.clear();
    this.$router.push({name:'LoginPage'});
},
add(){
    this.$router.push({name:'AddResto'});
},
update(){
    this.$router.push({name:'UpdateResto'});
}
    }
}
</script>
<style>

.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float:left;
    color: #f2f2f2;
    padding:16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background:#ddd ;
    color:#333;
}
</style>