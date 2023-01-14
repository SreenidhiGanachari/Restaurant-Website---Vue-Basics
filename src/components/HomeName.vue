<template>
    <MainMenu/>
    <h1>Hello {{ name }} , Welcome to the home page </h1>
</template>
<script>
import MainMenu from './MainMenu.vue'
export default{
    name:'HomeName',
    data(){
 return{
    name:'',
 }
    },
    components:{
        MainMenu
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        console.log(name);
        }
}
</script>