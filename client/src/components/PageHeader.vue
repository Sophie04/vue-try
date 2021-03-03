<template>
    <v-app-bar fixed class="indigo lighten-1" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">
                vueTry
            </span>
            vueTry
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text @click="navigateTo({name: 'login'})" class="indigo lighten-1">
                Login
            </v-btn>
            <v-btn text @click="navigateTo({name: 'register'})" class="indigo lighten-1">
                Sign up
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-toolbar{
    height: 1px;
}

.home{
    cursor: pointer;
}

.v-toolbar__title:hover{
    color: #283593;
}
</style>
