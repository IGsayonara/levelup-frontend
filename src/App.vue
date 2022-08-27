<template>
  <div>
    <p>this is my main vue app</p>
    <div id="learnEnglishWords"></div>
    <another-vue-app/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { createApp } from 'vue'
import AnotherVueApp from '../../levelup-learn-english-words/src/App.vue'

@Options({
  components: {
    AnotherVueApp
  },
})

export default class App extends Vue {
  mounted(){
    console.log(666)
    createApp(AnotherVueApp).mount('#learnEnglishWords')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
