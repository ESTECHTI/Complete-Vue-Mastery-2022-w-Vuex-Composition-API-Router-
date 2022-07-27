let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
      size: 150
    }
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple }
    },
    rotate_circle() {
      return [
        { width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px'}, 
        { transform: 'rotate(30deg)'}
      ]
    }
    
  }
}).mount('#app')