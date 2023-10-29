<script>
 import { RouterLink, RouterView } from 'vue-router'

export default {
  data (){
    return {
      count: 0,
      isShow: false,
      answers: []
    }
  },
methods: {
  change(number) {
    this.count = this.count + -number
  },
  say(count){
  alert(this.count)
  },
  showFinder() {
   this.isShow = !this.isShow
  }
},
components: {Finder, Buttons}
}
import Finder from './components/Finder.vue'
import Buttons from './components/Buttons.vue'
</script>

<template>
 <div>
  <button @click="change(-1)">+1</button>
  <button @click="change(1)">-1</button>
  <h1>Count: {{count}}</h1>
 </div>

 
<button @click="say(count)">ShowCount</button>
 <Finder v-if="isShow"/>

 
 <br/>
 <button @click="showFinder">{{isShow?'Hide' : 'Show' }}</button>
 <div>
  
 </div>
 <div><router-link :to="{name: 'MainPage'}">Main</router-link> <br/>
 <router-link :to="{name: 'Find'}">Finder</router-link> <br/>
 <router-link :to="{name: 'Questions'}">Questions</router-link> <br/>
 <router-link :to="{name: 'poem'}">Poem</router-link>
 </div>
 
 <router-view></router-view>
 
</template>

<style>

</style>
