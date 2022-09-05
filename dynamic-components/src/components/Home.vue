<template>
 <div>
  <h1>Home Page</h1>
 </div>
</template>
 
<script>
 
export default {
  name: '',
  components: {
   
  },
  props: {
   
  },
  data:() => {
    return {
     
    }
  },
  computed: {
   
  },
  methods: {
   
  },
  unmounted() {
   console.log("Home component unmounted")
 },
 activated() {
  console.log("Home component activated")
 },
 deactivated() {
  console.log("Home component Deactivated")
 }
}
</script>
 
<style lang="scss" scoped>
 
</style>