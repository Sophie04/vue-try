<template>
    <v-app-bar fixed class="indigo lighten-1" dark>
        <v-toolbar-title class="mr-4">
            vueTry
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <!-- <v-btn text class="indigo lighten-1">
                Browse
            </v-btn> -->
            <v-btn text @click="navigateTo" class="indigo lighten-1">
                Sign up
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo () {
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-toolbar{
    height: 1px;
}
</style>
