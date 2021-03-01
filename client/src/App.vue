<template>
<v-app class="flex" app>
  <page-header />
  <main>
    <v-container fluid>
      <!-- <div id="app"> -->
      <router-view/>
    </v-container>
  </main>
    <!-- </div> -->
</v-app>

</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
body{
  height: 100vh;
}

.container{
  padding: 0;
  max-width: 100%;
}

v-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  padding-top:70px;
  /* margin-top: 60px; */
}

.xs6{
  padding-top: 100px;
  max-width: 33.33% !important;
}

.v-btn{
  min-width: 100px;
  /* align-self: center; */
  margin-bottom: 10px;
}

</style>
