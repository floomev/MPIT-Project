<script>
 import { RouterLink, RouterView } from 'vue-router'

export default {
  data (){
    return {
      
      
    }
  },
components: {Finder, Buttons}
}
import Finder from './components/Finder.vue'
import Buttons from './components/Buttons.vue'
</script>

<template>
 

 


 
 
 <div class="nav">
  <ul>
    <li class="iLi"><img class="imgg" src="./pictures/kjujnbg.png" alt=""></li><div class="border"></div>
    <li>
      <router-link :to="{name: 'MainPage'}" 
      class="router-link">Главная</router-link> 
    </li>
    <div class="border"></div>
    <li> <router-link :to="{name: 'Find'}" 
      class="router-link">Места</router-link> </li><div class="border"></div>
    <li><router-link :to="{name: 'Questions'}"
      class="router-link">Рейтинг</router-link> </li><div class="border"></div>
    <li><router-link :to="{name: 'Questions'}"
      class="router-link">Отдых для тебя</router-link> </li><div class="border"></div>
    <li><router-link :to="{name: 'poem'}"
      class="router-link">Профиль</router-link></li>
  </ul>

 
 
 </div>
 
 <router-view></router-view>
 
</template>

<style>
  .nav ul {
    display: flex;
    list-style-type: none;
    flex-direction:row;
    
    margin: 0px;
   
    width: 100%px;
    height: 131px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    
    justify-content: space-around;
    
  }
   .nav li {
    display: flex;
    list-style-type: none;
    
    
    font-size: 25px;
    width: 200px;
    height: 131px;
    justify-content: center;
    align-items: center;   
   
  } 
  /* .nav {
    width: 100%;
    height: 131px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background-color: grey;
  } */
  .imgg {
    
    margin-bottom: 10px;
    width: 200px;
    height:120 ;
    
  }
  .iLi {
    margin-bottom: 30px;
    margin-left: 70px;
    height: 200px;
  }
  .router-link {
    text-decoration: none;
    color: black;
  }
  .border {
    
    height: 80px;
    border: 0.01px solid black;
    margin-top: 25px;
  }
  
</style>
