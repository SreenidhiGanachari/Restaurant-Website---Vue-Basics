<template>
 <router-view/>
 
</template>

<script>

export default {
  name: 'App',
 
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.body{
  margin: 0;
  padding: 0;
}
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
