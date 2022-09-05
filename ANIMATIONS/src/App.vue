<template>
 <div>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade" moude="in-out">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else key="secondary">Another hello!</h2>
  </transition>
 </div>
</template>
 
<script>
 
export default {
  name: 'App',
  components: {
   
  },
  props: {
   
  },
  data:() => {
    return {
     flag: false
    }
  },
  computed: {
   
  },
  methods: {
   
  },
  mounted() {
   
 },
 
}
</script>
 
<style>
 .fade-enter-from {
  opacity: 0;
 }

 .fade-enter-active {
  transition: all 3s linear
 }
 .fade-leave-to {
  transition: all 3s linear;
  opacity: 0;
 }
</style>