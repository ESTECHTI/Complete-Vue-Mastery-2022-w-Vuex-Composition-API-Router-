const vm = Vue.createApp({
  data() {
    return {
      firstName: "Joe",
      lastName: "DOE",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
}).mount('#app')