const vm = Vue.createApp({
  data() {
    return {
      firstName: "Joe",
      lastName: "DOE",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    increment() {
      this.age++
    },
    updateLastName(msg, event) {
      
      console.log(msg)
      this.lastName = event.target.value
    }
  },
}).mount('#app')