<template>
  <v-layout>
    <v-flex xs6 offset-xs4>
      <div class="white elevation-2 rounded">
        <v-toolbar flat dense class="indigo lighten-1 rounded" dark>
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>

        <div class="d-flex flex-column pl-4 pr-4 pt-2 pb-2">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" v-model="password"></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <v-btn class="indigo lighten-1" @click="register" dark>Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:red;
}

.v-toolbar__title{
  margin: 0 auto;
}
</style>
